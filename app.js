git add app.js
git commit -m "change message"
const port = 8080;

app.get('/', (req, res) => res.send('Welcome buddy'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
