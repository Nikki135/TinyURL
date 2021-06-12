
const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

// app.get('/', (req,res) => {

// })


app.get("/api", (req, res) => {
    res.json({ message: "Hi, welcome to server!" });
  });
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
// app.listen(process.env.PORT || 5000);