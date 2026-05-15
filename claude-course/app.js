// ============================================================
//  Claude AI Essentials — App logic
//  Routing, state, quizzes, projects, certificate.
// ============================================================

const STORAGE_KEY = 'claude-essentials-state-v1';

const defaultState = () => ({
  name: '',
  startedAt: null,
  current: { module: 1, lesson: 0 },
  progress: {} // { 1: { lessons: [true,...], quizPassed: false, projectDone: false } }
});

function initProgress(state) {
  COURSE.modules.forEach(m => {
    if (!state.progress[m.id]) {
      state.progress[m.id] = {
        lessons: new Array(m.lessons.length).fill(false),
        quizPassed: false,
        projectDone: false,
        checklist: new Array(m.project.checklist.length).fill(false)
      };
    }
  });
  return state;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const s = raw ? JSON.parse(raw) : defaultState();
    return initProgress(s);
  } catch {
    return initProgress(defaultState());
  }
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

// ============ Routing ============
const routes = {
  home: renderHome,
  onboard: renderOnboard,
  modules: renderModulesList,
  module: renderModule,
  certificate: renderCertificate,
  about: renderAbout
};

function navigate(route, params = {}) {
  const el = document.getElementById('app');
  el.innerHTML = '';
  const fn = routes[route] || renderHome;
  fn(el, params);
  // active nav
  document.querySelectorAll('.topnav a').forEach(a => {
    a.classList.toggle('active', a.dataset.route === route);
  });
  // scroll up
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function parseHash() {
  const h = (location.hash || '#home').slice(1);
  const [route, ...rest] = h.split('/');
  if (route === 'module' && rest[0]) {
    return { route: 'module', params: { id: parseInt(rest[0], 10) } };
  }
  return { route, params: {} };
}

window.addEventListener('hashchange', () => {
  const { route, params } = parseHash();
  navigate(route, params);
});

// ============ Helpers ============
function tpl(id) {
  const t = document.getElementById(id);
  return t.content.cloneNode(true);
}

function el(html) {
  const div = document.createElement('div');
  div.innerHTML = html.trim();
  return div.firstElementChild;
}

function completedCount() {
  return COURSE.modules.filter(m => {
    const p = state.progress[m.id];
    return p && p.quizPassed && p.projectDone;
  }).length;
}

function isModuleUnlocked(id) {
  if (id === 1) return true;
  const prev = state.progress[id - 1];
  return prev && prev.quizPassed && prev.projectDone;
}

function isModuleDone(id) {
  const p = state.progress[id];
  return p && p.quizPassed && p.projectDone;
}

function updateLearnerChip() {
  const chip = document.getElementById('learnerChip');
  const name = document.getElementById('learnerName');
  if (state.name) {
    chip.hidden = false;
    name.textContent = state.name;
  } else {
    chip.hidden = true;
  }
}

// ============ Renderers ============
function renderHome(root) {
  root.appendChild(tpl('tpl-home'));

  const startBtn = root.querySelector('#startBtn');
  const resumeBtn = root.querySelector('#resumeBtn');
  startBtn.addEventListener('click', () => {
    if (!state.name) {
      location.hash = '#onboard';
    } else {
      location.hash = `#module/${state.current.module}`;
    }
  });

  if (state.name && state.startedAt) {
    startBtn.textContent = 'Continue learning →';
    resumeBtn.hidden = false;
    resumeBtn.textContent = `Jump to Module ${state.current.module}`;
    resumeBtn.addEventListener('click', () => {
      location.hash = `#module/${state.current.module}`;
    });
  }

  // Module preview list
  const list = root.querySelector('#homeModuleList');
  list.appendChild(buildModuleList(false));
}

function renderOnboard(root) {
  root.appendChild(tpl('tpl-onboard'));
  const input = root.querySelector('#nameInput');
  input.value = state.name || '';
  input.focus();
  root.querySelector('#saveNameBtn').addEventListener('click', () => {
    const v = input.value.trim();
    if (!v) { input.focus(); return; }
    state.name = v;
    state.startedAt = state.startedAt || new Date().toISOString();
    saveState();
    updateLearnerChip();
    location.hash = '#module/1';
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') root.querySelector('#saveNameBtn').click();
  });
}

function renderModulesList(root) {
  root.appendChild(tpl('tpl-modules'));
  const list = root.querySelector('#modulesList');
  list.appendChild(buildModuleList(true));
  const done = completedCount();
  root.querySelector('#overallFill').style.width = `${(done / COURSE.modules.length) * 100}%`;
  root.querySelector('#overallText').textContent = `${done} of ${COURSE.modules.length} complete`;
}

function buildModuleList(withLock) {
  const frag = document.createDocumentFragment();
  COURSE.modules.forEach(m => {
    const unlocked = !withLock || isModuleUnlocked(m.id);
    const done = isModuleDone(m.id);
    const li = el(`
      <li class="${unlocked ? '' : 'locked'}">
        <span class="m-num ${done ? 'done' : ''}">${done ? '✓' : m.id}</span>
        <div class="m-body">
          <div class="m-title">${m.icon} ${m.title}</div>
          <div class="m-desc">${m.shortDesc}</div>
          <div class="m-meta">
            <span>${m.duration}</span>
            <span>${m.lessons.length} lessons</span>
            <span>1 project</span>
            ${done ? '<span style="color:var(--good)">✓ Completed</span>' : ''}
            ${!unlocked ? '<span>🔒 Locked — finish previous module</span>' : ''}
          </div>
        </div>
        <div class="m-action">${unlocked ? (done ? 'Review →' : 'Start →') : ''}</div>
      </li>
    `);
    if (unlocked) {
      li.addEventListener('click', () => { location.hash = `#module/${m.id}`; });
      li.style.cursor = 'pointer';
    }
    frag.appendChild(li);
  });
  return frag;
}

function renderModule(root, { id }) {
  if (!state.name) { location.hash = '#onboard'; return; }
  const m = COURSE.modules.find(x => x.id === id);
  if (!m) { location.hash = '#modules'; return; }
  if (!isModuleUnlocked(m.id)) { location.hash = '#modules'; return; }

  state.current.module = m.id;
  saveState();

  root.appendChild(tpl('tpl-module'));
  root.querySelector('#modNum').textContent = `Module ${m.id} of ${COURSE.modules.length}`;
  root.querySelector('#modTitle').textContent = `${m.icon} ${m.title}`;
  root.querySelector('#modIntro').textContent = m.intro;
  root.querySelector('#modDuration').textContent = `⏱ ${m.duration}`;
  root.querySelector('#modIcon').textContent = `📖 ${m.lessons.length} lessons`;

  // Lesson tabs
  const tabs = root.querySelector('#lessonTabs');
  m.lessons.forEach((l, i) => {
    const btn = document.createElement('button');
    const isDone = state.progress[m.id].lessons[i];
    btn.innerHTML = `${l.title}${isDone ? ' <span class="tab-check">✓</span>' : ''}`;
    btn.addEventListener('click', () => showLesson(m, i));
    tabs.appendChild(btn);
  });

  // Project
  const p = m.project;
  root.querySelector('#projTitle').textContent = p.title;
  root.querySelector('#projDesc').textContent = p.description;
  root.querySelector('#projPrompt').textContent = p.prompt;

  const cl = root.querySelector('#projChecklist');
  p.checklist.forEach((step, i) => {
    const li = el(`<li><label><input type="checkbox" data-i="${i}" ${state.progress[m.id].checklist[i] ? 'checked' : ''}/> <span>${step}</span></label></li>`);
    li.querySelector('input').addEventListener('change', (e) => {
      state.progress[m.id].checklist[i] = e.target.checked;
      saveState();
    });
    cl.appendChild(li);
  });

  const projDone = root.querySelector('#projDone');
  projDone.checked = state.progress[m.id].projectDone;
  projDone.addEventListener('change', (e) => {
    state.progress[m.id].projectDone = e.target.checked;
    saveState();
  });

  // Quiz
  buildQuiz(root, m);

  // Footer nav
  const prev = root.querySelector('#prevModBtn');
  const next = root.querySelector('#nextModBtn');
  prev.disabled = m.id === 1;
  prev.addEventListener('click', () => { if (m.id > 1) location.hash = `#module/${m.id - 1}`; });
  if (m.id === COURSE.modules.length) {
    next.textContent = 'Go to Certificate →';
    next.addEventListener('click', () => { location.hash = '#certificate'; });
  } else {
    next.addEventListener('click', () => {
      if (!isModuleDone(m.id)) {
        alert("Finish this module's quiz and tick \"I completed this project\" first.");
        return;
      }
      location.hash = `#module/${m.id + 1}`;
    });
  }

  // Show first incomplete (or first) lesson
  const firstUnread = state.progress[m.id].lessons.findIndex(v => !v);
  showLesson(m, firstUnread === -1 ? 0 : firstUnread);
}

function showLesson(m, idx) {
  const tabs = document.querySelectorAll('#lessonTabs button');
  tabs.forEach((b, i) => b.classList.toggle('active', i === idx));
  const body = document.getElementById('lessonBody');
  body.innerHTML = m.lessons[idx].body;

  // Wire copy buttons
  body.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-copy');
      const text = document.getElementById(targetId)?.textContent || '';
      navigator.clipboard.writeText(text).then(() => {
        const orig = btn.textContent;
        btn.textContent = '✓ Copied';
        setTimeout(() => btn.textContent = orig, 1500);
      });
    });
  });

  // Checkpoint
  const cp = m.lessons[idx].checkpoint;
  if (cp) {
    const wrap = el(`
      <div class="checkpoint">
        <h4>✋ Quick check</h4>
        <p>${cp.q}</p>
        <div class="ck-opts">
          ${cp.options.map((o, i) => `<label><input type="radio" name="ck${m.id}-${idx}" value="${i}"/> <span>${o}</span></label>`).join('')}
        </div>
        <div class="ck-feedback" hidden></div>
      </div>
    `);
    wrap.querySelectorAll('input[type=radio]').forEach(r => {
      r.addEventListener('change', () => {
        const picked = parseInt(r.value, 10);
        const fb = wrap.querySelector('.ck-feedback');
        fb.hidden = false;
        if (picked === cp.answer) {
          fb.className = 'ck-feedback right';
          fb.textContent = `✓ Correct — ${cp.explain}`;
          // mark lesson done
          state.progress[m.id].lessons[idx] = true;
          saveState();
          // refresh tab check
          const tab = tabs[idx];
          if (!tab.innerHTML.includes('tab-check')) {
            tab.innerHTML += ' <span class="tab-check">✓</span>';
          }
        } else {
          fb.className = 'ck-feedback wrong';
          fb.textContent = `Not quite — ${cp.explain}`;
        }
      });
    });
    body.appendChild(wrap);
  } else {
    // mark lesson done on view (no checkpoint)
    state.progress[m.id].lessons[idx] = true;
    saveState();
    const tab = tabs[idx];
    if (tab && !tab.innerHTML.includes('tab-check')) {
      tab.innerHTML += ' <span class="tab-check">✓</span>';
    }
  }

  // Wire project copy / open buttons (inside module page)
  document.querySelectorAll('[data-copy-target]').forEach(b => {
    if (b._wired) return;
    b._wired = true;
    b.addEventListener('click', () => {
      const target = b.getAttribute('data-copy-target');
      const text = document.getElementById(target)?.textContent || '';
      navigator.clipboard.writeText(text).then(() => {
        const orig = b.textContent;
        b.textContent = '✓ Copied';
        setTimeout(() => b.textContent = orig, 1500);
      });
    });
  });
}

function buildQuiz(root, m) {
  const container = root.querySelector('#quizContainer');
  container.innerHTML = '';
  m.quiz.forEach((q, i) => {
    const qEl = el(`
      <div class="q">
        <div class="q-text">${i + 1}. ${q.q}</div>
        <div class="q-opts">
          ${q.options.map((o, oi) => `<label><input type="radio" name="q${m.id}-${i}" value="${oi}"/> <span>${o}</span></label>`).join('')}
        </div>
      </div>
    `);
    container.appendChild(qEl);
  });

  const submit = root.querySelector('#submitQuizBtn');
  const result = root.querySelector('#quizResult');

  submit.addEventListener('click', () => {
    let correct = 0;
    m.quiz.forEach((q, i) => {
      const picked = container.querySelector(`input[name="q${m.id}-${i}"]:checked`);
      const labels = container.querySelectorAll(`input[name="q${m.id}-${i}"]`);
      labels.forEach(l => {
        const lab = l.closest('label');
        lab.classList.remove('correct', 'incorrect', 'user-pick');
      });
      if (!picked) return;
      const pIdx = parseInt(picked.value, 10);
      labels[q.answer].closest('label').classList.add('correct');
      if (pIdx === q.answer) {
        correct++;
      } else {
        labels[pIdx].closest('label').classList.add('incorrect', 'user-pick');
      }
    });
    const pass = correct >= 4;
    result.hidden = false;
    result.className = `quiz-result ${pass ? 'pass' : 'fail'}`;
    result.textContent = pass
      ? `🎉 ${correct} / 5 — you passed! ${m.id < COURSE.modules.length ? 'Now do the project and head to the next module.' : 'Now finish the project and claim your certificate.'}`
      : `${correct} / 5 — you need 4 to pass. Review the lessons and try again — the right answers are highlighted in green.`;
    if (pass) {
      state.progress[m.id].quizPassed = true;
      saveState();
    }
  });

  // pre-mark if passed
  if (state.progress[m.id].quizPassed) {
    result.hidden = false;
    result.className = 'quiz-result pass';
    result.textContent = '✓ You already passed this quiz. You can retake it anytime.';
  }
}

function renderCertificate(root) {
  if (!state.name) { location.hash = '#onboard'; return; }
  root.appendChild(tpl('tpl-certificate'));
  const done = completedCount();
  const all = COURSE.modules.length;
  const status = root.querySelector('#certStatus');

  root.querySelector('#certName').textContent = state.name;

  if (done < all) {
    status.innerHTML = `You've completed <strong>${done} of ${all}</strong> modules. Finish all modules (pass each quiz and tick the project) to unlock the verified certificate below. You can still preview it.`;
  } else {
    status.innerHTML = `🎉 <strong>Congratulations, ${state.name}.</strong> You completed Claude AI Essentials. Your certificate is ready — print it or save as PDF.`;
  }

  const dateObj = new Date();
  root.querySelector('#certDate').textContent = dateObj.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

  // Verification ID — simple deterministic hash
  const id = makeCertId(state.name, dateObj.toISOString().slice(0, 10), done);
  root.querySelector('#certId').textContent = id;

  root.querySelector('#printCertBtn').addEventListener('click', () => {
    if (done < all) {
      if (!confirm("You haven't finished all modules yet. Print the preview anyway?")) return;
    }
    window.print();
  });
}

function makeCertId(name, date, done) {
  const s = `${name}|${date}|${done}|claude-essentials`;
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  const hex = (h >>> 0).toString(16).toUpperCase().padStart(8, '0');
  return `CE-${hex}-${date.replace(/-/g, '').slice(2)}`;
}

function renderAbout(root) {
  root.appendChild(tpl('tpl-about'));
  root.querySelector('#resetBtn').addEventListener('click', () => {
    if (confirm("Erase your name, progress, and all quiz/project state? This can't be undone.")) {
      localStorage.removeItem(STORAGE_KEY);
      state = loadState();
      updateLearnerChip();
      location.hash = '#home';
    }
  });
}

// ============ Boot ============
document.getElementById('changeNameBtn')?.addEventListener('click', () => { location.hash = '#onboard'; });
document.querySelectorAll('[data-route]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    location.hash = '#' + a.dataset.route;
  });
});

updateLearnerChip();

// Initial route
(function start() {
  if (!location.hash) location.hash = '#home';
  else {
    const { route, params } = parseHash();
    navigate(route, params);
  }
})();
