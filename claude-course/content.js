// ============================================================
//  Claude AI Essentials — Course content
//  All modules, lessons, quizzes, projects live here.
// ============================================================

const COURSE = {
  title: "Claude AI Essentials",
  modules: [

    // ===== MODULE 1 =====
    {
      id: 1,
      title: "Meet Claude — Your New AI Assistant",
      icon: "👋",
      duration: "~25 min",
      shortDesc: "What Claude is, what it can do, and how to start your first chat.",
      intro: "Before we use any tool, it helps to know what it is. This module gently introduces Claude — what it is, what it's good at, and (just as important) what it isn't. No jargon. Promise.",
      lessons: [
        {
          title: "1.1 What exactly is Claude?",
          body: `
            <h2>What exactly is Claude?</h2>
            <p>Claude is an <strong>AI assistant</strong> made by a company called <strong>Anthropic</strong>. You can think of it as a very well-read assistant you can talk to in plain English — by typing.</p>
            <p>Claude can read, write, summarize, brainstorm, translate, explain, plan, and help you think things through. It's available at <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a> in your web browser.</p>
            <blockquote>If a calculator is for math, Claude is for <em>words and ideas</em>.</blockquote>
            <h3>How is it different from Google?</h3>
            <p>Google sends you to <em>pages</em> that might answer your question. Claude tries to answer the question directly — and can also write, rewrite, and respond conversationally. They're complementary, not the same thing.</p>
            <div class="callout"><strong>Plain-English glossary</strong> — Through this course we'll call Claude an "AI assistant" or just "Claude." When you see the word <em>prompt</em>, it just means <em>the thing you type</em>.</div>
          `,
          checkpoint: {
            q: "Which of these best describes Claude?",
            options: [
              "A search engine that finds web pages",
              "An AI assistant you can chat with in plain English",
              "A spreadsheet program",
              "A video editing tool"
            ],
            answer: 1,
            explain: "Claude is a conversational AI — you talk, it responds. Unlike Google, it doesn't return a list of links."
          }
        },
        {
          title: "1.2 What Claude can (and can't) do",
          body: `
            <h2>What it's great at — and where it slips</h2>
            <p>Claude has read an enormous amount of text. That makes it strong at language tasks. But it has limits, and knowing them saves you frustration.</p>
            <h3>✅ Things Claude is great at</h3>
            <ul>
              <li>Writing and rewriting (emails, posts, essays, captions)</li>
              <li>Summarizing long text into a paragraph or bullets</li>
              <li>Brainstorming ideas — names, gifts, dinner menus, business angles</li>
              <li>Explaining things in simpler words</li>
              <li>Translating between languages</li>
              <li>Helping you plan (trips, study, projects)</li>
            </ul>
            <h3>⚠️ Things to be careful with</h3>
            <ul>
              <li><strong>Facts and numbers</strong> — Claude sometimes "hallucinates" (makes confident-sounding mistakes). Verify anything important.</li>
              <li><strong>Recent news</strong> — by default Claude doesn't browse the web live, so it may not know yesterday's headlines.</li>
              <li><strong>Personal medical, legal, or financial advice</strong> — useful for ideas, but never a substitute for a real professional.</li>
              <li><strong>Things you'd never trust a friend with</strong> — passwords, bank PINs, etc.</li>
            </ul>
            <div class="callout"><strong>What's a "hallucination"?</strong> When AI invents a fact — like inventing a book that doesn't exist or a quote that was never said. It happens. Always verify big claims.</div>
          `,
          checkpoint: {
            q: "True or false: Claude can be trusted to give exact, up-to-date stock prices.",
            options: [
              "True — it knows everything",
              "False — Claude doesn't browse live and can hallucinate numbers"
            ],
            answer: 1,
            explain: "Without live browsing, Claude can't fetch today's prices, and even with browsing you should verify any number that matters."
          }
        },
        {
          title: "1.3 Your first chat: a tour of claude.ai",
          body: `
            <h2>Your first chat: a tour of claude.ai</h2>
            <p>Open <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a> in a new tab. You'll see a sign-up screen (email or Google works). Once you're in, it looks roughly like this:</p>
            <ul>
              <li><strong>The big text box in the middle</strong> — that's where you type.</li>
              <li><strong>The left sidebar</strong> — your past conversations, your Projects, and the "New chat" button.</li>
              <li><strong>The paperclip icon</strong> — to attach a file (PDF, image, spreadsheet).</li>
              <li><strong>The model picker</strong> — usually you can leave it on the default.</li>
            </ul>
            <p>Try saying hello with this prompt:</p>
            <div class="prompt-box">
              <div class="prompt-box-header"><span>Try this prompt</span>
                <button class="btn btn-tiny" data-copy="hello1">Copy</button>
                <a class="btn btn-tiny" href="https://claude.ai/new" target="_blank" rel="noopener">Open Claude →</a>
              </div>
              <pre id="hello1">Hi Claude! I'm just getting started with AI. In 5 short bullet points, can you tell me what you do best and what I should be careful about?</pre>
            </div>
            <p>Read the reply. Notice the tone — it feels like a thoughtful colleague. That's by design.</p>
            <div class="callout">💡 <strong>Tip:</strong> You can hit <em>Enter</em> to send. Use <em>Shift+Enter</em> for a new line.</div>
          `,
          checkpoint: {
            q: "Which keyboard shortcut adds a new line without sending the message?",
            options: ["Enter", "Tab", "Shift + Enter", "Ctrl + Z"],
            answer: 2,
            explain: "Enter sends. Shift+Enter lets you write multi-line prompts."
          }
        },
        {
          title: "1.4 Setting expectations: AI is a partner, not a brain transplant",
          body: `
            <h2>One mindset shift that changes everything</h2>
            <p>Beginners often treat AI like a magic answer machine. The people who get the most value treat it as a <strong>collaborator</strong>:</p>
            <ul>
              <li>You give it context.</li>
              <li>It gives you a draft.</li>
              <li>You react, refine, and steer.</li>
              <li>Repeat until you're happy.</li>
            </ul>
            <p>That's the entire skill of working with AI. The rest of this course is just practice.</p>
            <div class="callout">🌱 <strong>Permission to play.</strong> You can't break Claude. Be curious. Type weird questions. Ask follow-ups. It's safe to experiment.</div>
          `
        }
      ],
      quiz: [
        {
          q: "Who makes Claude?",
          options: ["Google", "Anthropic", "Microsoft", "OpenAI"],
          answer: 1
        },
        {
          q: "Which of these is Claude best suited for?",
          options: ["Real-time stock prices", "Editing a video", "Drafting and improving writing", "Calling people on the phone"],
          answer: 2
        },
        {
          q: "What is a 'hallucination' in AI?",
          options: [
            "A confident-sounding but incorrect answer",
            "A typing error",
            "When the screen flickers",
            "A type of memory upgrade"
          ],
          answer: 0
        },
        {
          q: "Should you share your bank password with Claude?",
          options: ["Yes, it's safe", "Only if you really need help", "No, never share sensitive credentials with any AI"],
          answer: 2
        },
        {
          q: "What's the best mindset for working with Claude?",
          options: [
            "Type once, accept whatever it says",
            "Treat it as a collaborator — give context, refine the answer together",
            "Use it like a search engine for links",
            "Only use it for fun"
          ],
          answer: 1
        }
      ],
      project: {
        title: "Your first Claude conversation",
        description: "Have a real 10-message exchange with Claude. Goal: introduce yourself and walk away with 5 specific ways Claude could help in your daily life.",
        prompt: `Hi Claude! My name is [your name]. I work as [your job or role], and in my free time I enjoy [interests / hobbies].

I'm learning how to use AI for the first time. Please ask me 3 short questions to understand my daily life better — one at a time. After I answer all three, suggest 5 specific, practical ways you could help me each week. Keep your answers friendly and clear, no jargon.`,
        checklist: [
          "Open claude.ai and sign in",
          "Paste the starter prompt and personalize the bracketed parts",
          "Answer Claude's three follow-up questions honestly",
          "Read the 5 suggestions it gives you",
          "Pick the one suggestion you'd actually try this week"
        ]
      }
    },

    // ===== MODULE 2 =====
    {
      id: 2,
      title: "Talking to Claude — Prompt Basics",
      icon: "💬",
      duration: "~45 min",
      shortDesc: "The simple recipe for prompts that actually get good answers.",
      intro: "If Module 1 was \"meet your assistant,\" this one is \"learn how to ask.\" There's a tiny formula that turns vague results into great ones. You'll know it cold by the end.",
      lessons: [
        {
          title: "2.1 Why most first prompts disappoint",
          body: `
            <h2>The most common mistake</h2>
            <p>When people first try AI they type something like:</p>
            <div class="compare">
              <div class="bad"><div class="label">Vague</div>"Write me an email."</div>
              <div class="good"><div class="label">Better</div>"Write a polite 4-sentence email to my landlord, Sarah, asking for permission to install a small bookshelf in the hallway. Friendly tone. Sign off with my name, James."</div>
            </div>
            <p>Same task — wildly different results. The difference? <strong>Context.</strong> Claude can't read your mind. The more useful detail you give, the better the answer.</p>
            <blockquote>If you wouldn't tell a brand-new intern just "write an email," don't tell Claude that either.</blockquote>
          `
        },
        {
          title: "2.2 The CRAFT recipe",
          body: `
            <h2>A 5-ingredient recipe for great prompts</h2>
            <p>Memorize this and your results jump immediately. We call it <strong>CRAFT</strong>:</p>
            <table>
              <thead><tr><th>Letter</th><th>Means</th><th>Example</th></tr></thead>
              <tbody>
                <tr><td><strong>C</strong></td><td>Context — the background</td><td>"I'm a small café owner..."</td></tr>
                <tr><td><strong>R</strong></td><td>Role — who Claude should be</td><td>"Act as a friendly marketing coach."</td></tr>
                <tr><td><strong>A</strong></td><td>Action — what you want done</td><td>"Write 3 Instagram captions for our new pastry."</td></tr>
                <tr><td><strong>F</strong></td><td>Format — how the answer should look</td><td>"Each caption under 30 words, with 2 emojis."</td></tr>
                <tr><td><strong>T</strong></td><td>Tone — the voice</td><td>"Warm, playful, not salesy."</td></tr>
              </tbody>
            </table>
            <p>Put together:</p>
            <div class="prompt-box">
              <div class="prompt-box-header"><span>CRAFT example</span>
                <button class="btn btn-tiny" data-copy="craft1">Copy</button>
                <a class="btn btn-tiny" href="https://claude.ai/new" target="_blank" rel="noopener">Open Claude →</a>
              </div>
<pre id="craft1">I'm a small café owner in a quiet neighborhood (CONTEXT).
Act as a friendly marketing coach (ROLE).
Write 3 Instagram captions for our new matcha croissant (ACTION).
Each caption under 30 words, with 2 emojis each (FORMAT).
Tone: warm, playful, not salesy (TONE).</pre>
            </div>
            <p>You don't need to spell out C-R-A-F-T each time. Just include those ingredients.</p>
          `,
          checkpoint: {
            q: "Which CRAFT ingredient does this sentence add? \"Reply as a friendly study tutor for a high schooler.\"",
            options: ["Context", "Role", "Format", "Tone"],
            answer: 1,
            explain: "Telling Claude WHO to be is the Role. (Bonus: 'friendly' also hints at Tone — many sentences cover two.)"
          }
        },
        {
          title: "2.3 Iterating: the second prompt is the magic one",
          body: `
            <h2>You almost never get it right on the first try</h2>
            <p>Pros don't write perfect prompts. They <em>iterate</em>. After Claude responds, just tell it what to change:</p>
            <ul>
              <li>"Make it shorter."</li>
              <li>"Use simpler words — like for a 12-year-old."</li>
              <li>"More casual. Drop the corporate tone."</li>
              <li>"Give me 5 alternatives in a table."</li>
              <li>"Now in Vietnamese."</li>
            </ul>
            <p>You're in a conversation. Don't restart — refine.</p>
            <div class="callout"><strong>Try it:</strong> Ask Claude to write a one-paragraph self-introduction for you. Then in the same chat type "Now make it more confident and add a sentence of humor." Notice how it builds on what came before.</div>
          `
        },
        {
          title: "2.4 Common prompt patterns",
          body: `
            <h2>5 patterns you'll reach for again and again</h2>
            <ol>
              <li><strong>Summarize this:</strong> "Summarize this article in 5 bullet points a busy parent would actually read." (paste text)</li>
              <li><strong>Explain it like:</strong> "Explain what a mortgage is like I'm 10 years old."</li>
              <li><strong>Compare two things:</strong> "Compare iPhone 17 and Pixel 11 for someone who mostly takes photos. Use a table."</li>
              <li><strong>Generate options:</strong> "Give me 10 dog name ideas that are short, soft, and a little quirky."</li>
              <li><strong>Critique my work:</strong> "Here's my cover letter. Give me 3 specific things to improve and explain why."</li>
            </ol>
            <p>Bookmark these. Mix and match.</p>
          `,
          checkpoint: {
            q: "Your first reply from Claude is too long and a bit too formal. What's the fastest fix?",
            options: [
              "Start a new chat with a totally new prompt",
              "Reply in the same chat: \"Shorter, please, and more casual.\"",
              "Refresh the page",
              "Type \"???\" to confuse it"
            ],
            answer: 1,
            explain: "Iteration in the same chat is faster than restarting. Claude remembers what you were just discussing."
          }
        }
      ],
      quiz: [
        {
          q: "What's missing from the prompt \"Write me an email\"?",
          options: ["The word please", "Context — who it's to, why, and what tone", "An emoji", "Nothing — it's perfect"],
          answer: 1
        },
        {
          q: "In the CRAFT recipe, the \"F\" stands for…",
          options: ["Friendly", "Fast", "Format", "Final"],
          answer: 2
        },
        {
          q: "True or false: A longer prompt is always better than a shorter one.",
          options: ["True", "False — a short, clear prompt with the right context is fine"],
          answer: 1
        },
        {
          q: "Claude gave you a draft, but it's too formal. The smart move is to…",
          options: [
            "Start over with a brand new chat",
            "Reply in the same chat asking for a more casual rewrite",
            "Switch to a different AI",
            "Accept it as-is"
          ],
          answer: 1
        },
        {
          q: "Which prompt is most likely to give a great result?",
          options: [
            "tell me about dogs",
            "I'm choosing my first dog. Act as a calm vet. List 5 breeds that suit a small apartment and a working adult, with one pro and con each in a table.",
            "DOGS???",
            "Dogs please"
          ],
          answer: 1
        }
      ],
      project: {
        title: "Three real emails in three tones",
        description: "Use the CRAFT recipe to draft three emails you might actually send: a polite request, a gentle follow-up, and a sincere apology. Keep what you write.",
        prompt: `I'd like your help drafting 3 short emails. For each, I'll tell you the situation. Use a warm, human tone. Each email must be under 120 words, no jargon, and end with a clear next step.

Email 1 — Request: I want to ask my manager [name] for a half-day off on [date] to attend a family appointment. I've been on the team for 8 months, never asked before, and will cover my Friday tasks in advance.

Email 2 — Follow-up: I emailed a supplier [name] last Tuesday about a quote for 500 paper bags and haven't heard back. Polite nudge, no pressure.

Email 3 — Apology: I missed a meeting yesterday with [name] because I had a family emergency. Apologize sincerely without over-explaining, and propose two new times.

Please write all three, clearly labeled.`,
        checklist: [
          "Open a new chat in claude.ai",
          "Paste the starter prompt and fill in the [bracketed] details",
          "Read Claude's three drafts",
          "Pick one and ask Claude to make it 'shorter and more confident'",
          "Save the version you'd actually send"
        ]
      }
    },

    // ===== MODULE 3 =====
    {
      id: 3,
      title: "Everyday Writing & Thinking Partner",
      icon: "✍️",
      duration: "~45 min",
      shortDesc: "Use Claude to brainstorm, edit, summarize, and translate like a pro.",
      intro: "Now we put your prompt skills to work on the four most useful everyday tasks: brainstorming, editing, summarizing, and translating. By the end, you'll feel like you have a writing partner on standby.",
      lessons: [
        {
          title: "3.1 Brainstorming — quantity before quality",
          body: `
            <h2>Brainstorming with Claude</h2>
            <p>The trick: ask for <strong>a lot</strong> of options first, then narrow down. AI is fantastic at generating quantity. You're the judge of quality.</p>
            <div class="prompt-box">
              <div class="prompt-box-header"><span>Brainstorm prompt</span>
                <button class="btn btn-tiny" data-copy="brainstorm">Copy</button>
                <a class="btn btn-tiny" href="https://claude.ai/new" target="_blank" rel="noopener">Open Claude →</a>
              </div>
<pre id="brainstorm">Give me 20 short, original name ideas for a new neighborhood bakery that specializes in sourdough.
Avoid clichés like "Crumbs" or "Loaf". Mix one-word names, two-word names, and a few playful puns.
Then group your favorites into 3 themes.</pre>
            </div>
            <p>Once you see the list, reply with: "I like ideas 3, 7, and 14. Give me 10 more in that style."</p>
          `
        },
        {
          title: "3.2 Editing — your patient writing coach",
          body: `
            <h2>Editing</h2>
            <p>Don't just say "fix this." Tell Claude what kind of edit you want.</p>
            <div class="compare">
              <div class="bad"><div class="label">Vague</div>"Fix my paragraph."</div>
              <div class="good"><div class="label">Specific</div>"Edit my paragraph for clarity and flow. Don't change the meaning. Keep it under 80 words. Show me the edited version, then list 3 specific changes you made and why."</div>
            </div>
            <p>You can also ask for a <em>track-changes-style</em> output:</p>
            <div class="prompt-box">
              <div class="prompt-box-header"><span>Track changes prompt</span>
                <button class="btn btn-tiny" data-copy="trackchanges">Copy</button>
                <a class="btn btn-tiny" href="https://claude.ai/new" target="_blank" rel="noopener">Open Claude →</a>
              </div>
<pre id="trackchanges">Please edit my paragraph below for clarity and a more confident tone. Show:
1) The cleaned-up paragraph.
2) A short bullet list of every change you made and why.
3) One sentence on the overall improvement.

[Paste your paragraph here]</pre>
            </div>
          `,
          checkpoint: {
            q: "Which edit instruction is most useful?",
            options: [
              "\"Fix it.\"",
              "\"Make it better.\"",
              "\"Edit for clarity and a confident tone. Keep under 80 words. List your changes.\"",
              "\"Improve.\""
            ],
            answer: 2,
            explain: "Specific goals (clarity, tone, length) + a request to show its work give you a useful, controllable edit."
          }
        },
        {
          title: "3.3 Summarizing — turn long into short",
          body: `
            <h2>Summarizing</h2>
            <p>Two ingredients that make summaries dramatically better:</p>
            <ol>
              <li><strong>Tell Claude the audience.</strong> ("for a busy parent", "for my boss", "for a 10-year-old")</li>
              <li><strong>Tell Claude the format.</strong> ("3 bullets", "1 paragraph", "a one-line tweet")</li>
            </ol>
            <div class="prompt-box">
              <div class="prompt-box-header"><span>Summary prompt</span>
                <button class="btn btn-tiny" data-copy="summary">Copy</button>
                <a class="btn btn-tiny" href="https://claude.ai/new" target="_blank" rel="noopener">Open Claude →</a>
              </div>
<pre id="summary">Summarize the article below for a busy parent who has only 60 seconds.
Format: 4 short bullets + a "so what?" sentence at the end.
Keep the language simple and skip any jargon.

[Paste the article text here]</pre>
            </div>
          `
        },
        {
          title: "3.4 Translating — beyond word-for-word",
          body: `
            <h2>Translating</h2>
            <p>Google Translate gives you literal translations. Claude can give you <em>idiomatic</em> ones — translations that sound natural in the target language.</p>
            <div class="prompt-box">
              <div class="prompt-box-header"><span>Translate prompt</span>
                <button class="btn btn-tiny" data-copy="translate">Copy</button>
                <a class="btn btn-tiny" href="https://claude.ai/new" target="_blank" rel="noopener">Open Claude →</a>
              </div>
<pre id="translate">Translate my message into natural, polite Vietnamese as a native speaker would say it.
Show: (1) the translation, (2) a literal back-translation in English, (3) any cultural nuances I should know.

Message: "Thanks so much for your patience — I'll send the proposal tomorrow morning."</pre>
            </div>
            <div class="callout">🌏 <strong>Pro move:</strong> For important messages, ask for a literal back-translation. That's how you sanity-check accuracy without speaking the language.</div>
          `,
          checkpoint: {
            q: "Why ask for a 'back-translation' when translating?",
            options: [
              "It's faster",
              "It lets you sanity-check the meaning even if you don't speak the language",
              "It saves Claude's memory",
              "It changes the language"
            ],
            answer: 1,
            explain: "A back-translation acts as a mirror — it tells you what your translated message actually says."
          }
        }
      ],
      quiz: [
        {
          q: "When brainstorming, what's the smartest first move?",
          options: [
            "Ask for one perfect answer",
            "Ask for many options, then narrow down",
            "Provide no context",
            "Use as few words as possible"
          ],
          answer: 1
        },
        {
          q: "Which is the best edit prompt?",
          options: [
            "fix it",
            "Edit my paragraph for clarity. Keep it under 80 words. List the changes you made.",
            "improve",
            "better please"
          ],
          answer: 1
        },
        {
          q: "Which two ingredients sharpen a summary the most?",
          options: [
            "Length and font",
            "Audience and format",
            "Emoji and capital letters",
            "Page count and color"
          ],
          answer: 1
        },
        {
          q: "What's a 'back-translation' useful for?",
          options: [
            "Speeding up Claude",
            "Verifying that the translation says what you meant",
            "Hiding mistakes",
            "Changing fonts"
          ],
          answer: 1
        },
        {
          q: "After Claude gives you a draft you mostly like, the pro move is to…",
          options: [
            "Discard it and write your own",
            "Tell Claude exactly what to tweak — tone, length, structure",
            "Accept whatever it said",
            "Start a new chat"
          ],
          answer: 1
        }
      ],
      project: {
        title: "Resume & cover letter polish",
        description: "Use Claude as a writing coach to improve a real resume bullet, then translate a polite version of your cover-letter intro into another language.",
        prompt: `Help me polish my professional writing in three steps.

Step 1 — Rewrite this resume bullet to sound more confident and specific. Keep it under 22 words. Show before and after.
Bullet: "Worked with team on project to improve customer service."

Step 2 — Critique this 2-sentence cover-letter opening for a marketing role. List 3 specific weaknesses and rewrite it.
Opening: "I am writing to apply for the role. I have several years of experience and would be a good fit."

Step 3 — Translate the rewritten opening from Step 2 into [target language] as a native speaker would write it. Show the translation, a literal back-translation, and one cultural tip.`,
        checklist: [
          "Replace the [target language] with one you want to learn",
          "Run the prompt and read all three steps",
          "Reply: \"Make Step 1's rewrite punchier and add a number.\"",
          "Save the final version you'd actually use"
        ]
      }
    },

    // ===== MODULE 4 =====
    {
      id: 4,
      title: "Files, Artifacts & Projects",
      icon: "📂",
      duration: "~50 min",
      shortDesc: "Upload PDFs, generate documents, and organize your work.",
      intro: "Claude does much more than chat. You can hand it files to read, ask it to build documents you can edit, and organize related work into Projects. This module makes those three features second nature.",
      lessons: [
        {
          title: "4.1 Uploading files: let Claude read for you",
          body: `
            <h2>Attach a file and ask anything</h2>
            <p>Click the <strong>paperclip icon</strong> in the chat box to attach. Claude can read:</p>
            <ul>
              <li>PDFs (rental agreements, reports, articles)</li>
              <li>Images (photos of receipts, handwritten notes, screenshots)</li>
              <li>Spreadsheets (CSV / Excel)</li>
              <li>Plain text and Word documents</li>
            </ul>
            <p>Once attached, your prompt can refer to the file:</p>
            <div class="prompt-box">
              <div class="prompt-box-header"><span>File prompt</span>
                <button class="btn btn-tiny" data-copy="file1">Copy</button>
                <a class="btn btn-tiny" href="https://claude.ai/new" target="_blank" rel="noopener">Open Claude →</a>
              </div>
<pre id="file1">I've attached my apartment lease. In plain English:
1) Summarize the 5 most important rules I'm agreeing to.
2) Flag anything that looks unusual or risky.
3) List 3 questions I should ask the landlord before signing.</pre>
            </div>
            <div class="callout">🔒 <strong>Privacy reminder:</strong> Don't upload anything you wouldn't share with a careful assistant — IDs with full numbers, bank statements with account info, etc.</div>
          `,
          checkpoint: {
            q: "Which file type can Claude NOT read directly in a chat?",
            options: [
              "PDF",
              "JPG photo",
              "A streaming video file",
              "Excel spreadsheet"
            ],
            answer: 2,
            explain: "Claude reads documents, images, and text — but it can't watch a video file."
          }
        },
        {
          title: "4.2 Artifacts: documents you can keep and edit",
          body: `
            <h2>What's an Artifact?</h2>
            <p>An Artifact is a side panel where Claude builds something you can <strong>edit, save, and re-use</strong> — like a Word doc that lives next to your chat. Common uses: documents, tables, checklists, simple web pages.</p>
            <p>Claude often creates an Artifact automatically when you ask for something "document-shaped." You can also ask for one explicitly:</p>
            <div class="prompt-box">
              <div class="prompt-box-header"><span>Artifact prompt</span>
                <button class="btn btn-tiny" data-copy="artifact1">Copy</button>
                <a class="btn btn-tiny" href="https://claude.ai/new" target="_blank" rel="noopener">Open Claude →</a>
              </div>
<pre id="artifact1">Create a printable 1-page packing checklist for a 4-day trip to a cold city in winter. Group items by category (clothing, toiletries, electronics, documents, medication). Use checkboxes. Put it in an Artifact so I can edit it.</pre>
            </div>
            <p>Click anywhere inside the Artifact to tweak text directly, or just tell Claude in chat: "Remove the documents section and add a 'snacks' category."</p>
          `,
          checkpoint: {
            q: "What's the best way to think about an Artifact?",
            options: [
              "A search result",
              "A side panel containing a document, table, or checklist you can edit",
              "An old chat archive",
              "A password vault"
            ],
            answer: 1,
            explain: "Artifacts are workspaces — anything you'd want to take with you and edit."
          }
        },
        {
          title: "4.3 Projects: organize related chats with persistent instructions",
          body: `
            <h2>What's a Project?</h2>
            <p>A <strong>Project</strong> is a folder for related chats. Inside it you can:</p>
            <ul>
              <li>Set <em>custom instructions</em> that apply to every chat in the project (e.g. "Always reply in casual British English").</li>
              <li>Upload reference files Claude can refer to across chats (your résumé, brand guidelines, your kids' meal preferences).</li>
              <li>Keep all related chats in one tidy place.</li>
            </ul>
            <p>When to start a Project: any time you'd say "I'm going to use Claude for a while on this topic." Examples: <em>Job Hunt 2026</em>, <em>Wedding Planning</em>, <em>Sourdough Café</em>, <em>French Practice</em>.</p>
            <h3>How to create one</h3>
            <ol>
              <li>In claude.ai sidebar, click <strong>Projects</strong> → <strong>New Project</strong>.</li>
              <li>Name it.</li>
              <li>Add 1–3 sentences of instructions (we'll learn this properly in Module 5).</li>
              <li>Drag in reference files you'll re-use.</li>
              <li>Start new chats inside that Project.</li>
            </ol>
          `
        },
        {
          title: "4.4 When to use what",
          body: `
            <h2>Files vs. Artifacts vs. Projects — choosing the right tool</h2>
            <table>
              <thead><tr><th>If you want to…</th><th>Use this</th></tr></thead>
              <tbody>
                <tr><td>Read or analyze something you have</td><td>Upload a <strong>file</strong></td></tr>
                <tr><td>Generate a document, list, or table you'll edit</td><td><strong>Artifact</strong></td></tr>
                <tr><td>Keep many chats on the same topic, with shared instructions</td><td><strong>Project</strong></td></tr>
              </tbody>
            </table>
            <p>You'll use all three together. Example: a "Wedding Planning" Project with the venue contract uploaded as a reference, and an Artifact for your guest list.</p>
          `,
          checkpoint: {
            q: "You're job hunting and want every chat to know your résumé and target roles. What's the best tool?",
            options: ["A single long chat", "An Artifact", "A Project with your résumé uploaded and custom instructions", "Just typing it each time"],
            answer: 2,
            explain: "Projects shine when many future chats will need the same context."
          }
        }
      ],
      quiz: [
        {
          q: "What's the icon you click to attach a file?",
          options: ["A camera", "A paperclip", "A microphone", "A gear"],
          answer: 1
        },
        {
          q: "Which of these is an Artifact best for?",
          options: ["Browsing the web", "An editable checklist or document", "Calling someone", "Sending email"],
          answer: 1
        },
        {
          q: "A Project lets you…",
          options: [
            "Share screen with Claude",
            "Group related chats with shared instructions and reference files",
            "Replace your email inbox",
            "Translate languages only"
          ],
          answer: 1
        },
        {
          q: "Should you upload a scan of your passport's photo page to Claude just to chat?",
          options: ["Yes, always", "Only if necessary and you trust the platform's privacy", "It's the recommended first step"],
          answer: 1
        },
        {
          q: "You want to draft a packing checklist you can keep. Best move?",
          options: [
            "Ask Claude to put it in an Artifact",
            "Ask Claude to email it",
            "Ask Claude to call you",
            "Don't ask, just guess"
          ],
          answer: 0
        }
      ],
      project: {
        title: "Recipe converter as an Artifact",
        description: "Upload (or paste) a recipe, then have Claude convert units to metric, halve the portions, and produce a tidy shopping list — all in an Artifact you can save.",
        prompt: `I'm going to give you a recipe. Please do all of the following inside one editable Artifact:

1) Rewrite the recipe with all measurements in metric (grams, milliliters, °C).
2) Halve every quantity so it serves 2 instead of 4.
3) Below the recipe, add a clean "Shopping List" section, grouped by aisle (Produce / Dairy / Pantry / Other).
4) Add a 30-second "What to do the night before" tip at the bottom.

Use checkboxes for the shopping list. Make the whole document one page.

Recipe:
[Paste a 4-serving recipe here — or describe one]`,
        checklist: [
          "Find any 4-serving recipe (yours, online, or made up)",
          "Paste it into the prompt and run it",
          "Look at the Artifact panel — it should be a single tidy document",
          "Ask Claude: \"Add a vegetarian substitute for the main protein.\"",
          "Print or screenshot the Artifact"
        ]
      }
    },

    // ===== MODULE 5 =====
    {
      id: 5,
      title: "Custom Instructions & Personas",
      icon: "🎭",
      duration: "~40 min",
      shortDesc: "Make Claude consistent: same tone, same rules, every time.",
      intro: "Tired of repeating yourself? In this module you'll teach Claude — once — how you like things done. Then build a personalized 'study buddy' you can come back to forever.",
      lessons: [
        {
          title: "5.1 What are custom instructions?",
          body: `
            <h2>Custom instructions in plain English</h2>
            <p>Custom instructions are <strong>standing rules</strong> Claude follows for every new chat in a Project. Instead of telling Claude "I'm a small business owner, write casually, no jargon, use British spelling" every single time — you write it once.</p>
            <p>Two flavors:</p>
            <ul>
              <li><strong>Account-level preferences</strong> — apply everywhere.</li>
              <li><strong>Project-level instructions</strong> — apply only inside that Project. Strongly recommended.</li>
            </ul>
            <p>Click your Project → <em>Edit project instructions</em> → write your rules.</p>
          `
        },
        {
          title: "5.2 Writing instructions that actually work",
          body: `
            <h2>What good instructions look like</h2>
            <p>Good instructions are <strong>specific, concrete, and a little bossy</strong>. Vague instructions get ignored.</p>
            <div class="compare">
              <div class="bad"><div class="label">Vague</div>"Be helpful. Be smart."</div>
              <div class="good"><div class="label">Specific</div>"You are my study buddy for AP Biology. Always: explain in plain English, use a real-life analogy, then quiz me with 3 questions. Never just lecture. If I get something wrong, explain why without making me feel bad."</div>
            </div>
            <h3>A template you can copy</h3>
            <div class="prompt-box">
              <div class="prompt-box-header"><span>Instruction template</span>
                <button class="btn btn-tiny" data-copy="instr1">Copy</button>
              </div>
<pre id="instr1">You are [role: e.g. "my marketing coach"].
My situation: [1 line about you].
Always:
- [rule 1, e.g. "use plain language, no buzzwords"]
- [rule 2, e.g. "ask me one clarifying question if my prompt is vague"]
- [rule 3, e.g. "end every answer with a single concrete next step"]
Never:
- [thing to avoid, e.g. "lecture without giving me a task to try"]
- [thing to avoid, e.g. "use bullet lists longer than 5 items"]
Tone: [e.g. "warm, direct, lightly humorous"].</pre>
            </div>
          `,
          checkpoint: {
            q: "Which instruction is more likely to change Claude's behavior?",
            options: [
              "\"Be smart.\"",
              "\"Always end with one concrete next step. Never lecture without giving me a task to try.\""
            ],
            answer: 1,
            explain: "Concrete \"always/never\" rules give Claude something to actually obey. Vague adjectives don't."
          }
        },
        {
          title: "5.3 Personas: reusable characters for specific jobs",
          body: `
            <h2>Build a persona</h2>
            <p>A <strong>persona</strong> is just a custom-instruction setup with a clear identity. Examples:</p>
            <ul>
              <li>🧑‍🏫 <strong>Study Buddy</strong> — patient tutor for whatever you're learning.</li>
              <li>🍳 <strong>Meal Planner</strong> — knows your dietary needs and your weekly budget.</li>
              <li>💼 <strong>Job Coach</strong> — knows your résumé and target industry.</li>
              <li>🗣 <strong>Language Partner</strong> — corrects gently, uses everyday phrases.</li>
              <li>🧘 <strong>Decision Helper</strong> — walks you through pros/cons calmly.</li>
            </ul>
            <p>Each lives in its own Project, with instructions and a few uploaded reference files.</p>
            <h3>Example: language partner instructions</h3>
            <div class="prompt-box">
              <div class="prompt-box-header"><span>Persona example</span>
                <button class="btn btn-tiny" data-copy="persona1">Copy</button>
              </div>
<pre id="persona1">You are my Spanish conversation partner. I'm A2 level (beginner).

Always:
- Reply 70% in simple Spanish, 30% in English glosses for new words.
- Use only present and past tense for now.
- After each of your replies, ask me one short follow-up question.
- If I make a grammar mistake, gently correct it in a footnote at the end.

Never:
- Use the subjunctive without explaining it.
- Reply in long paragraphs — keep it conversational, 2–4 sentences.

Tone: warm, encouraging, like a patient friend.</pre>
            </div>
          `
        },
        {
          title: "5.4 The limits of personas",
          body: `
            <h2>What personas can't do</h2>
            <p>A persona changes <em>style and behavior</em>. It does <strong>not</strong>:</p>
            <ul>
              <li>Give Claude new factual knowledge (for that, upload reference files into the Project).</li>
              <li>Make Claude impersonate a real living person convincingly — and shouldn't, ethically.</li>
              <li>Make Claude break its safety rules. "Pretend you're an evil version of yourself" won't work, and that's by design.</li>
            </ul>
            <div class="callout">📁 <strong>Combine for power.</strong> Persona + uploaded reference files + a clear Project name = a genuinely personalized assistant.</div>
          `,
          checkpoint: {
            q: "You want Claude to know your specific company's brand voice. Best approach?",
            options: [
              "Just type \"use our voice\" each time",
              "Create a Project with brand-voice instructions and upload your brand guidelines PDF",
              "Hope it guesses",
              "Send Claude an email"
            ],
            answer: 1,
            explain: "Persistent instructions + reference files in a Project is the durable, repeatable setup."
          }
        }
      ],
      quiz: [
        {
          q: "Where do you write rules that apply to every chat in a Project?",
          options: [
            "Your inbox",
            "The Project's custom instructions",
            "A sticky note on your laptop",
            "You can't — every chat is independent"
          ],
          answer: 1
        },
        {
          q: "Which instruction is most useful?",
          options: [
            "\"Be smart.\"",
            "\"Always reply in plain English; end with one next step; never use bullet lists longer than 5 items.\"",
            "\"Be brief sometimes maybe.\""
          ],
          answer: 1
        },
        {
          q: "A 'persona' in Claude is basically…",
          options: [
            "A new AI model",
            "A reusable set of custom instructions giving Claude a consistent identity",
            "A subscription tier",
            "A type of file"
          ],
          answer: 1
        },
        {
          q: "Can a persona give Claude new factual knowledge it doesn't already have?",
          options: ["No — for that, upload reference files into the Project", "Yes, automatically"],
          answer: 0
        },
        {
          q: "True or false: A persona can convince Claude to ignore its safety rules.",
          options: ["True", "False — safety rules are built in and personas can't override them"],
          answer: 1
        }
      ],
      project: {
        title: "Build your personalized Study Buddy",
        description: "Set up a Project with instructions that turn Claude into a tutor for a topic you actually want to learn. Have it teach you one concept three different ways.",
        prompt: `I'd like to use these instructions inside a Project called "Study Buddy."

You are my patient study buddy for learning [topic — e.g. "Italian basics" or "personal finance" or "photography fundamentals"].

Always:
- Explain like I'm 12 years old.
- Use one real-world analogy per concept.
- After each explanation, quiz me with exactly 3 short questions.
- Mark my answers, gently explain anything I got wrong, and decide if I'm ready for the next concept or need a re-do.

Never:
- Lecture for more than 4 short paragraphs without stopping to quiz me.
- Use jargon without defining it the first time.

Tone: warm, encouraging, lightly playful.

For our first session, please teach me one fundamental concept of [topic]. Begin now.`,
        checklist: [
          "Create a new Project in claude.ai named \"Study Buddy\"",
          "Paste the instructions into the Project (Edit project instructions)",
          "Start a chat inside that Project and run the prompt",
          "Answer Claude's 3 quiz questions",
          "Reply: \"Explain that same concept again, but using a sports analogy this time.\""
        ]
      }
    },

    // ===== MODULE 6 =====
    {
      id: 6,
      title: "Real-Life Projects — Putting It All Together",
      icon: "🏗",
      duration: "~50 min",
      shortDesc: "Multi-step prompts for trips, meals, decisions, and tough conversations.",
      intro: "Time to combine everything: prompts + files + Artifacts + Projects. We'll tackle five real-life situations that show how Claude becomes a true thinking partner, not a one-off toy.",
      lessons: [
        {
          title: "6.1 The 'big task' mindset: break it into steps",
          body: `
            <h2>Stop dumping the whole task in one go</h2>
            <p>Beginners often write one massive prompt and hope. Pros walk Claude through a task <em>step by step</em>, like briefing an assistant.</p>
            <p>Two ways to do it:</p>
            <ol>
              <li><strong>Numbered steps in one prompt</strong> — when the work is clear.</li>
              <li><strong>A back-and-forth conversation</strong> — when you want to think alongside Claude.</li>
            </ol>
            <div class="callout"><strong>Magic phrase:</strong> "Before you answer, ask me any clarifying questions you need." That single line turns Claude from a guesser into a collaborator.</div>
          `
        },
        {
          title: "6.2 Walkthrough 1 — Plan a 4-day trip",
          body: `
            <h2>Plan a trip without losing your mind</h2>
            <div class="prompt-box">
              <div class="prompt-box-header"><span>Trip planner</span>
                <button class="btn btn-tiny" data-copy="trip1">Copy</button>
                <a class="btn btn-tiny" href="https://claude.ai/new" target="_blank" rel="noopener">Open Claude →</a>
              </div>
<pre id="trip1">I'm planning a 4-day trip to Hoi An, Vietnam in October. Budget: ~$500 USD (excluding flights). Travelling as a couple, mid-30s, love food and gentle activities, not nightlife.

Before you plan anything, ask me 4 short clarifying questions. After I answer, produce:
1) A day-by-day itinerary in an Artifact (morning / afternoon / evening blocks)
2) A short "what to pack" list
3) Two budget warnings — places we might overspend
4) Three local etiquette tips</pre>
            </div>
          `
        },
        {
          title: "6.3 Walkthrough 2 — Analyze a bill or contract",
          body: `
            <h2>Make sense of a long document</h2>
            <div class="prompt-box">
              <div class="prompt-box-header"><span>Bill / contract review</span>
                <button class="btn btn-tiny" data-copy="contract1">Copy</button>
                <a class="btn btn-tiny" href="https://claude.ai/new" target="_blank" rel="noopener">Open Claude →</a>
              </div>
<pre id="contract1">I've attached [my electric bill / my apartment lease / a gym membership contract]. In plain English:
1) Summarize what I'm paying for, in 5 bullets.
2) Highlight any fees, conditions, or auto-renewals that could surprise me.
3) Suggest 3 specific questions I should ask before agreeing or paying.
Do not give legal advice — just help me understand the document.</pre>
            </div>
            <div class="callout">⚠️ <strong>Limit:</strong> Claude is great at helping you <em>understand</em>. For binding decisions (signing leases, disputing bills), confirm with a real professional.</div>
          `,
          checkpoint: {
            q: "Why include \"Do not give legal advice — just help me understand the document\" in a contract prompt?",
            options: [
              "It's required by law",
              "It keeps Claude in 'plain explainer' mode and sets realistic expectations",
              "It makes Claude faster",
              "It changes the file format"
            ],
            answer: 1,
            explain: "You're setting a sensible boundary and reminding yourself that AI complements professionals — it doesn't replace them."
          }
        },
        {
          title: "6.4 Walkthrough 3 — A tough conversation",
          body: `
            <h2>Prepare for a hard chat</h2>
            <div class="prompt-box">
              <div class="prompt-box-header"><span>Tough conversation rehearsal</span>
                <button class="btn btn-tiny" data-copy="hard1">Copy</button>
                <a class="btn btn-tiny" href="https://claude.ai/new" target="_blank" rel="noopener">Open Claude →</a>
              </div>
<pre id="hard1">I need to have a tough but caring conversation with my [sibling / partner / coworker] about [topic]. I'm worried I'll come off as harsh.

Please help me in 3 steps:
1) Ask me 3 quick questions to understand the situation and my goal.
2) Draft a short opening I could actually say out loud — warm, honest, no blaming.
3) List 3 likely reactions they might have and a calm way to respond to each.</pre>
            </div>
            <p>This is one of the most underrated uses of AI. Use it for resignations, breakups (yes really), giving feedback, asking for raises.</p>
          `
        },
        {
          title: "6.5 Walkthrough 4 — Compare options visually",
          body: `
            <h2>Decision-making with a comparison table</h2>
            <div class="prompt-box">
              <div class="prompt-box-header"><span>Compare prompt</span>
                <button class="btn btn-tiny" data-copy="compare1">Copy</button>
                <a class="btn btn-tiny" href="https://claude.ai/new" target="_blank" rel="noopener">Open Claude →</a>
              </div>
<pre id="compare1">I'm choosing between two laptops:
- Option A: [model, price, key specs]
- Option B: [model, price, key specs]

I mostly use it for: writing, light photo editing, video calls. I value: portability, battery, quiet keyboard.

Please:
1) Build a comparison table covering my priorities.
2) Recommend one and explain in 3 sentences.
3) Flag one downside I should be aware of either way.</pre>
            </div>
          `,
          checkpoint: {
            q: "Comparison tables work best when you…",
            options: [
              "Give Claude no information about what you care about",
              "Tell Claude your specific priorities so it weights the rows correctly",
              "Use as little detail as possible",
              "Refuse to ever explain your needs"
            ],
            answer: 1,
            explain: "Your priorities are what make the recommendation useful — not raw specs."
          }
        },
        {
          title: "6.6 Walkthrough 5 — Research a purchase",
          body: `
            <h2>Research without the rabbit hole</h2>
            <div class="prompt-box">
              <div class="prompt-box-header"><span>Research prompt</span>
                <button class="btn btn-tiny" data-copy="research1">Copy</button>
                <a class="btn btn-tiny" href="https://claude.ai/new" target="_blank" rel="noopener">Open Claude →</a>
              </div>
<pre id="research1">I'm buying my first espresso machine, budget under $400, for a small kitchen, beginner home barista.

In 3 short sections:
1) The 4 features that actually matter at this price point (skip marketing hype).
2) Two general types of machines I should be choosing between, with pros and cons.
3) Five questions I should answer before pulling the trigger.

Don't recommend specific brands — focus on helping me think.</pre>
            </div>
            <div class="callout">🔍 <strong>Always verify big claims.</strong> Use Claude to <em>frame</em> the decision, then check current reviews and prices on the open web before buying.</div>
          `
        }
      ],
      quiz: [
        {
          q: "What's the magic phrase that turns Claude from a guesser into a collaborator?",
          options: [
            "\"Hurry up.\"",
            "\"Before you answer, ask me any clarifying questions you need.\"",
            "\"Just guess.\"",
            "\"Pretend you know everything.\""
          ],
          answer: 1
        },
        {
          q: "When asking Claude to compare two laptops, what helps most?",
          options: [
            "Give no preferences",
            "Tell Claude your specific priorities so it weights the comparison correctly",
            "Just paste the model names",
            "Use as few words as possible"
          ],
          answer: 1
        },
        {
          q: "For a contract review, you should…",
          options: [
            "Treat Claude's analysis as legal advice",
            "Use Claude to understand the document, then confirm anything important with a professional"
          ],
          answer: 1
        },
        {
          q: "True or false: It's smart to break a complex task into clear steps in your prompt.",
          options: ["True", "False — always one big paragraph"],
          answer: 0
        },
        {
          q: "Which is the best multi-step prompt opener?",
          options: [
            "\"Do everything for my trip.\"",
            "\"Plan a trip — please ask me 4 clarifying questions first, then produce: 1) a day-by-day itinerary, 2) a packing list, 3) two budget warnings.\"",
            "\"Trip stuff.\""
          ],
          answer: 1
        }
      ],
      project: {
        title: "Weekly meal planner (full multi-step)",
        description: "Use everything you've learned to produce a real 7-day meal plan, grocery list, and prep schedule — all in one tidy Artifact.",
        prompt: `I want a complete weekly meal plan as an editable Artifact. Before you build it, ask me 4 short clarifying questions about my household, diet, time, and budget.

After I answer, please produce one Artifact with all of the following sections:

1) A 7-day meal plan: breakfast, lunch, dinner (and 1 snack/day). Reuse ingredients across days to reduce waste. Keep meals simple enough for a beginner cook.

2) A grocery list, grouped by aisle (Produce / Dairy / Pantry / Frozen / Other), with quantities.

3) A 60-minute "Sunday prep" schedule — what to cook or chop ahead of time so weekday cooking is quick.

4) Three swap suggestions in case I can't find an ingredient.

Friendly, no jargon, one page if possible.`,
        checklist: [
          "Open a new Claude chat (or inside your Study Buddy Project, your call)",
          "Run the prompt and answer Claude's 4 clarifying questions",
          "Check the Artifact has all 4 sections",
          "Reply: \"Make the prep schedule 30 minutes instead of 60.\"",
          "Save or print the final Artifact"
        ]
      }
    },

    // ===== MODULE 7 =====
    {
      id: 7,
      title: "Using Claude Safely & What's Next",
      icon: "🛡",
      duration: "~30 min",
      shortDesc: "Privacy, spotting mistakes, responsible use — and where to go from here.",
      intro: "Last module! We'll cover the safety stuff every adult should know, then point you toward what's next if you want to keep growing — including a peek at Claude Code and the API (no coding required to understand).",
      lessons: [
        {
          title: "7.1 Privacy: what NOT to paste",
          body: `
            <h2>A short safety checklist</h2>
            <p>Never paste into any AI chat:</p>
            <ul>
              <li>Passwords, PINs, two-factor codes.</li>
              <li>Full credit card or bank account numbers.</li>
              <li>Government ID numbers (passport, social security, national ID).</li>
              <li>Anyone else's private information without their consent.</li>
              <li>Confidential work documents your employer has restricted.</li>
            </ul>
            <p>It's usually fine to share:</p>
            <ul>
              <li>Your own writing, ideas, plans, and questions.</li>
              <li>Public documents and articles.</li>
              <li>Generic personal context ("I'm a 38-year-old teacher in Hanoi").</li>
            </ul>
            <div class="callout">🧭 <strong>Rule of thumb:</strong> if you wouldn't read it aloud at a coffee shop, don't paste it.</div>
          `,
          checkpoint: {
            q: "Which is safe to share with Claude?",
            options: [
              "Your bank password",
              "Your tax ID number",
              "Your own writing and general questions about your work",
              "Someone else's medical records without permission"
            ],
            answer: 2,
            explain: "Your own ideas and writing are fine. Personal credentials and other people's private info are not."
          }
        },
        {
          title: "7.2 Spotting hallucinations",
          body: `
            <h2>How to catch confident nonsense</h2>
            <p>Claude can sound certain even when wrong. Quick checks:</p>
            <ul>
              <li><strong>Verify specifics</strong> — names, dates, statistics, book titles, quotes.</li>
              <li><strong>Ask for sources</strong> — "What's your source for that?" If it can't say or names a vague source, treat as unverified.</li>
              <li><strong>Reverse-check</strong> — "Argue the opposite. Where might you be wrong?"</li>
              <li><strong>Cross-check</strong> on the open web for anything that affects money, health, or law.</li>
            </ul>
            <blockquote>If it sounds too tidy, double-check. Reality is usually messier than AI summaries.</blockquote>
          `
        },
        {
          title: "7.3 When NOT to use AI",
          body: `
            <h2>Where humans still own the call</h2>
            <ul>
              <li><strong>Medical, legal, or financial decisions</strong> — use Claude to <em>understand and prepare</em>, then talk to a real professional.</li>
              <li><strong>Emotional emergencies</strong> — Claude is not a crisis line. Talk to a human helper or hotline.</li>
              <li><strong>Anything you'd be embarrassed to attribute</strong> — if you'd hide that AI wrote it, ask whether you should be doing it at all.</li>
              <li><strong>Cheating on tests or work agreements</strong> — Claude isn't a shortcut around your own integrity.</li>
            </ul>
          `,
          checkpoint: {
            q: "You're feeling overwhelmed and worried about your health. What's the best move?",
            options: [
              "Trust Claude completely and skip the doctor",
              "Use Claude to organize your thoughts and questions — then see a real professional",
              "Don't talk to anyone",
              "Tell Claude to diagnose you"
            ],
            answer: 1,
            explain: "AI is helpful for preparation, never a replacement for licensed care."
          }
        },
        {
          title: "7.4 Bias and fairness",
          body: `
            <h2>A short, honest word about bias</h2>
            <p>Claude was trained on enormous amounts of human-written text — and humans carry biases. Claude works hard to be balanced, but no AI is perfectly fair. When the topic is sensitive (politics, gender, race, culture), it's worth:</p>
            <ul>
              <li>Asking for multiple perspectives ("Steelman both sides").</li>
              <li>Noticing whose voice is missing.</li>
              <li>Sanity-checking with real people from the affected group.</li>
            </ul>
          `
        },
        {
          title: "7.5 What's next: Claude Code, the API, and more",
          body: `
            <h2>If this got you curious…</h2>
            <p>You don't need any of these to be a power user — but here's what's out there:</p>
            <h3>Claude.ai Projects (you already know!)</h3>
            <p>Keep building Projects for the parts of your life that benefit from a persistent assistant.</p>
            <h3>Claude Code</h3>
            <p>A version of Claude that lives in a programmer's terminal and helps build software. For now: just know it exists. If you're tech-curious, it's the next frontier.</p>
            <h3>The Claude API</h3>
            <p>A way for software developers to put Claude inside their own apps and websites. Again, not something you need — but if you imagine building a tool one day, that's how.</p>
            <h3>Stay curious</h3>
            <ul>
              <li>Pick one Project from this course and keep using it weekly.</li>
              <li>When a task feels tedious, ask: "Could I prompt Claude for this?"</li>
              <li>Teach someone else. The fastest way to deepen your skill.</li>
            </ul>
            <div class="callout">🎓 Once you finish the project below and submit the quiz, you'll unlock your certificate on the Certificate page.</div>
          `
        }
      ],
      quiz: [
        {
          q: "Which item should you NEVER paste into Claude?",
          options: ["A draft of your essay", "Your own meal preferences", "Your bank password", "A news article"],
          answer: 2
        },
        {
          q: "What's a hallucination, in AI?",
          options: ["A typo", "A confidently wrong statement", "A blurry screen", "A network error"],
          answer: 1
        },
        {
          q: "Best response to a medical worry?",
          options: [
            "Trust Claude completely",
            "Use Claude to prepare questions and understand the topic, then see a doctor",
            "Avoid all professionals",
            "Tell no one"
          ],
          answer: 1
        },
        {
          q: "On a sensitive topic, the smart prompt is to…",
          options: [
            "Ask Claude to take one extreme position",
            "Ask Claude to steelman multiple perspectives",
            "Avoid the topic entirely",
            "Type in capitals"
          ],
          answer: 1
        },
        {
          q: "Claude Code is…",
          options: [
            "A new programming language",
            "A version of Claude that lives in a programmer's terminal to help with software work",
            "A secret password",
            "An old version of Claude"
          ],
          answer: 1
        }
      ],
      project: {
        title: "Verified research briefing",
        description: "Pick a topic you genuinely care about. Have Claude produce a one-page briefing, then verify 3 specific claims with outside sources. This is the habit of a thoughtful AI user.",
        prompt: `I'd like a one-page beginner's briefing on [topic — e.g. "intermittent fasting", "index fund investing", "starting a small Etsy shop", "learning to compost at home"].

Please structure it as:
1) "What it is" — 3 short paragraphs in plain English.
2) "Why people care" — 4 bullet points.
3) "Three things often misunderstood" — 3 bullets with a quick correction.
4) "Three claims I should fact-check before trusting" — name them clearly so I know what to verify.
5) "Three reputable types of sources I could check" — e.g. peer-reviewed journals, government sites, well-known specialist publications. Do not invent specific URLs.

Tone: thoughtful, balanced, no hype.`,
        checklist: [
          "Choose a topic that genuinely matters to you",
          "Run the prompt and read the briefing",
          "Open a search engine and verify the 3 fact-check claims",
          "Note which (if any) were inaccurate or oversimplified",
          "Reply to Claude: \"Here's what I found. Please revise the briefing based on these corrections.\""
        ]
      }
    }

  ]
};
