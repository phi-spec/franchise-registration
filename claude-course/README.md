# Claude AI Essentials — A Beginner's Course

A friendly, hands-on, no-jargon course that teaches anyone how to use **Claude** (the AI assistant by Anthropic) — even if they've never used AI before.

> 7 short modules · 7 real projects · 5-question quizzes · a printable certificate.

## Who it's for

- Someone who's never used AI and wants a gentle start.
- A professional looking for real productivity wins, not abstract theory.
- A parent, student, or hobbyist who wants AI to fit into daily life.

**No coding required. No technical background assumed.**

## How to run the course

There is no build step. It's plain HTML, CSS, and JavaScript.

1. Open `index.html` in any modern browser.
2. That's it.

If you'd like to serve it from a local web server (recommended so things like `localStorage` work consistently across browsers):

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

Or deploy the folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.).

## The curriculum

| # | Module | What you'll do |
|---|---|---|
| 1 | Meet Claude — Your New AI Assistant | Tour claude.ai and have your first real conversation |
| 2 | Talking to Claude — Prompt Basics | Learn the CRAFT recipe; write 3 real emails |
| 3 | Everyday Writing & Thinking Partner | Brainstorm, edit, summarize, translate |
| 4 | Files, Artifacts & Projects | Convert a recipe into a clean shopping list |
| 5 | Custom Instructions & Personas | Build your own personalized Study Buddy |
| 6 | Real-Life Projects | Multi-step planning: meals, trips, decisions |
| 7 | Using Claude Safely & What's Next | Privacy, hallucinations, responsible use |

After all 7 modules, learners earn a **printable certificate** with their name, completion date, and a unique verification ID.

## Features

- **One-idea-per-screen** lessons in plain English.
- **Try-it prompt boxes** with one-click copy + "Open Claude →" buttons.
- **Inline knowledge checks** so concepts actually stick.
- **End-of-module quizzes** (must pass 4/5 to unlock the next module).
- **Project checklists** for hands-on application.
- **Progress saved locally** in your browser — no account, no tracking.
- **Printable certificate** at the end, with a unique verification ID.

## Privacy

Everything is stored client-side in your browser's `localStorage`. Nothing is uploaded anywhere. Clear browser data and you start fresh. There is no analytics, no tracking, no account.

## File structure

```
claude-course/
├── index.html      # the app shell + view templates
├── styles.css      # all styling, including the certificate
├── content.js      # every module's text, quizzes, and projects
├── app.js          # routing, state, quizzes, certificate generation
└── README.md       # this file
```

To tweak the curriculum, edit `content.js` — it's a single structured object.

## License & affiliation

This is an independent learning project. **Not affiliated with Anthropic.** "Claude" is Anthropic's product. The course is provided for educational use.
