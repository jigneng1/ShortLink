import express from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";
import cors from 'cors';
import indexRouter from "./routes/index";
import urlsRouter from "./routes/urls";
dotenv.config();

const app = express();
connectDB();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true,
  })
)


app.get("/",(req,res)=>{
  res.send("welcome to stthi shortUrl backend")
})
app.use("/", indexRouter);
app.use("/api", urlsRouter);

// if ((process.env.NODE_ENV === "production")) {
//   app.use(express.static(path.join(__dirname, "../build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../build/index.html"));
//   });
// }

// Server Setup
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
