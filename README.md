# ProtoMind AI

## Overview

AI-powered research paper analysis platform that extracts:

- Summary
- Methodology
- Research Gaps
- Recommended Datasets

using Google's Gemini API.

---

## Features

- PDF Upload
- Automatic PDF Parsing
- AI-powered Summary
- Methodology Extraction
- Research Gap Analysis
- Dataset Recommendations

---

## Architecture

PDF
      ↓
FastAPI Backend
      ↓
PyMuPDF
      ↓
Gemini AI
      ↓
Structured JSON
      ↓
Next.js Dashboard

---

## Tech Stack

Frontend
- Next.js
- React
- TailwindCSS
- Framer Motion

Backend
- FastAPI
- PyMuPDF
- Google Gemini API
- Pydantic

Deployment
- Railway
- Vercel

---

## Installation

### Backend

pip install -r requirements.txt

uvicorn app.main:app --reload

### Frontend

npm install

npm run dev

---

## Demo

(Add GIF)

---

## Screenshots

(Add images)

---
