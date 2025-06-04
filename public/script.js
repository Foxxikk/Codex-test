async function register() {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const res = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  document.getElementById('register-result').innerText = JSON.stringify(data, null, 2);
}

async function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  document.getElementById('login-result').innerText = JSON.stringify(data, null, 2);
}

async function generateStory() {
  const title = document.getElementById('story-title').value;
  const childName = document.getElementById('story-childName').value;
  const age = parseInt(document.getElementById('story-age').value) || 0;
  const style = document.getElementById('story-style').value;
  const pages = parseInt(document.getElementById('story-pages').value) || 10;
  const res = await fetch('/api/generate-story', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, childName, age, style, pages })
  });
  const data = await res.json();
  document.getElementById('story-result').innerText = JSON.stringify(data, null, 2);
}
