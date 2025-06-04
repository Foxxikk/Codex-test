const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve the basic HTML interface
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Placeholder registration endpoint
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  // TODO: implement real registration logic
  res.json({ message: `Registered ${email}` });
});

// Placeholder login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // TODO: implement authentication
  res.json({ message: `Logged in as ${email}` });
});

// Placeholder story generation endpoint
app.post('/api/generate-story', (req, res) => {
  const { title, childName, age, style, pages } = req.body;
  // TODO: integrate with OpenAI or other model
  const story = {
    title: title || `Adventure of ${childName}`,
    pages: Array.from({ length: pages || 10 }).map((_, i) => ({
      page: i + 1,
      text: `Page ${i + 1} text for ${childName}`
    }))
  };
  res.json(story);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
