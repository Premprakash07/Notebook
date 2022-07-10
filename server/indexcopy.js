import express from "express";
import cors from "cors";
import net from "net";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

let bcgdata;

var client = new net.Socket();
client.connect(8080, "192.168.169.217", function () {
  console.log("Connected");
  client.write("Hello, server! Love, Client.");
});

client.on("data", function (data) {
  bcgdata = data;
});

client.on("close", function () {
  console.log("Connection closed");
});

app.get("/bcgreport", (req, res) => {
  console.log("hey");
  res.header("Access-Control-Allow-Origin", "*");
  res.sendFile(__dirname + "/ibedhtml.html");
});
app.get("/bcgdata", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let data = String(bcgdata);
  res.send({ bcg: data });
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
