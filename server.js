const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const tk = req.headers.authorization.split(' ')[1];
  console.log(tk);
  res.send("success");
});

app.listen(PORT, "localhost", () => {
  console.log(`http://localhost:${PORT}`);
});