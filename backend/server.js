// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();

// For production, replace with your frontend URL:
// const allowed = ['https://your-frontend.vercel.app'];
// app.use(cors({ origin: (origin, cb) => cb(null, !origin || allowed.includes(origin)) }));

app.use(cors()); // allow all origins for now (tighten later)
app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true }));
app.get('/api/hello', (req, res) => {
  res.json({ msg: 'Hello from backend!', time: new Date().toISOString() });
});

// 404 fallback
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Backend listening on ${port}`));
