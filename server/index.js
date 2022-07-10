import express from "express";
import Connection from "./db/Connection.js";
import mongoose from "mongoose";
import connectStore from "connect-mongo";
import userRouter from "./routes/user.js";
import noteRouter from "./routes/note.js";
import blogRouter from "./routes/blog.js";
import imgRouter from "./routes/getimg.js";
import session from "express-session";
import cors from "cors";
// import net from "net";

const app = express();
app.use(cors());
app.use(express.json());

const MongoStore = connectStore(session);

app.use(
  session({
    name: "sid",
    secret: "this is a secret key",
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: "session",
      ttl: 18000000,
    }),
    cookie: {
      sameSite: true,
      secure: false,
      maxAge: 18000000,
    },
  })
);

app.use("/", userRouter);
app.use("/blog", blogRouter);
app.use("/note", noteRouter);
app.use("/file", imgRouter);

const port = process.env.PORT || 3001;

Connection();

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
