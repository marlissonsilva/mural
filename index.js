const express = require("express");
const port = 3000;
const path = require("path");
const cors = require("cors");
const apiRoute = require("./src/routes/api");
const app = express();

app.use(cors());
app.use("/api", apiRoute);
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(
    `Servidor rodando na porta ${port} acesse  http://localhost:${port}/`
  );
});
