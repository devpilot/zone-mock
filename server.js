const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const port = 3020;
const prefix = "/api/robinreserve/v1/zones";
const defaultData = { zones: ["red", "green", "blue"] };

app.get(prefix, (req, res) => {
  res.send(defaultData);
});
app.patch(prefix, (req, res) => {
  if (req.body.add) {
    defaultData.zones = defaultData.zones.concat(req.body.add);
  }
  if (req.body.remove) {
    defaultData.zones = defaultData.zones.filter(
      (val) => !req.body.remove.includes(val)
    );
  }
  res.send(defaultData);
});

app.listen(port);
