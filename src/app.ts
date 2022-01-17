import express from "express";
import { getStoreInfo } from "./routes/example/logic";
const app = express();

// body parser
app.use(express.json());

app.use(require("./routes"));

app.get("/", (req, res) => {
  res.send("Server Is Running");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Listening to port: ", port);
});


getStoreInfo()