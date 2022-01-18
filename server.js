const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const foo = req.body;;
  res.send("success");
});

app.listen(PORT, "localhost", () => {
  console.log(`http://localhost:${PORT}`);
});