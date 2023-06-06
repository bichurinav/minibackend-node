import express from "express";
import mainRouter from "./router.js";
const PORT = 1337;
const app = express();

app.use(express.json());
app.use("/api", mainRouter);

app.listen(PORT, () => {
  console.log("API запущено на порту: " + PORT);
});
