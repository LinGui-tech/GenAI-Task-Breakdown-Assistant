
# 🧠 AI Task Decomposer

A lightweight GenAI-powered web application that breaks down user-defined tasks into clear, actionable, and executable steps using the OpenAI API.

This project demonstrates how structured prompt engineering and modern frontend practices can be combined to deliver deterministic, UI-ready AI outputs in a real-world product scenario.

---

## 🌍 Live Demo

- **Frontend (Vercel):** [https://gen-ai-task-breakdown-assistant.vercel.app/](https://gen-ai-task-breakdown-assistant.vercel.app/)

---

## ✨ Features

- Convert free-form tasks into step-by-step action plans
- Structured prompt engineering for stable and predictable AI output
- Clean, responsive UI built with React and Vite
- Direct integration with OpenAI’s Chat Completion API
- Optimized for fast iteration and real-time user feedback

---

## 🛠 Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **AI / GenAI:** OpenAI API (Chat Completion)
- **Styling:** CSS / TailwindCSS
- **Tooling:** ESLint, Git, npm

---

## 🧩 Prompt Engineering Approach

The application uses a carefully designed system prompt to ensure the model:

- Produces actionable, non-vague steps
- Follows a deterministic numbered list format
- Outputs content ready for direct UI rendering without post-processing

**Example prompt strategy:**

- Role-based instruction (task planner)
- Output constraints (numbered list, verb-first steps)
- UI-oriented formatting rules



---

## 🚀 Getting Started

```bash
git clone git@github.com:LinGui-tech/GenAI-Task-Breakdown-Assistant.git
cd GenAI-Task-Breakdown-Assistant
npm install
npm run dev
```

Create a `.env` file in the project root:

```env
VITE_OPENAI_API_KEY=your_api_key_here
```