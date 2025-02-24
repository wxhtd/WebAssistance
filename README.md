# Web Assistance

## Overview
A Chrome browser extension that allows users to highlight text on any website and receive simple explanations powered by OpenAI's API.

## Features
- 🖱️ **Context Menu Integration** — Right-click selected text and choose **"Explain this text"**.
- 📖 **AI-Powered Explanations** — Uses OpenAI's GPT model for generating simple, concise explanations.
- 📋 **Lightweight Flyout View** — Explanations appear in a clean flyout on the webpage.
- ⚡ **No UI Frameworks** — Built with native JavaScript for maximum performance.

## 📁 Project Structure
text-explainer/ 
│ 
├── backend/ # Express.js backend 
│ ├── index.js # API endpoint for explanations 
│ ├── package.json # Dependencies 
│ └── .env # OpenAI API key 
│ 
└── browser-extension/ # Chrome extension files
  ├── manifest.json # Extension configuration
  ├── background.js # Handles context menu and API requests 
  ├── icon.png # Extension icon 
  └── styles.css # Flyout styles


## Setup Instructions

### Backend (Express.js)
1. Navigate to the `backend` folder:
   ```bash
   cd backend
