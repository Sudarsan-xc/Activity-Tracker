const router = require("express").Router();
const QRController = require("./qrcode.controller");
//crud
router.get("/", (req, res) => {
  res.json({ msg: "All the data in the database!" });
});

router.get("/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    if (id === "sudarsan") throw new Error("Sudarsan string provided");
    res.json({ msg: `we are adding ${id} from database` });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = await QRController.createQr(req.body);
    res.json({ data: data, msg: "Generating Qr " });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ data: req.body, msg: `updating ${id} from database` });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ data: req.body, msg: `patching ${id} from database` });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ msg: `deleting ${id} from database` });
});
module.exports = router;
