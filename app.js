const express = require("express");
const teachersRouter = require("./routes/teachers");
const loginRouter = require("./routes/login");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/teachers", teachersRouter);
app.use("/login", loginRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
