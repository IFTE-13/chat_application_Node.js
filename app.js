//external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

//internal imports
const { notFound, error } = require("./middlewares/common/errorHandler");

const app = express();
dotenv.config();

//database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

//request process
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//view engine
app.set("view engine", "ejs");

//static folder
app.use(express.static(path.join(__dirname, "public")));

//cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

//404 not found
app.use(notFound);
app.use(error);

app.listen(process.env.PORT, () => {
  console.log(`Application listening to ${process.env.PORT}`);
});
