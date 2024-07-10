const router = require("express").Router();
const PDFController = require("./pdf.controller");
router.get("/", (req, res) => {
  res.json({ msg: "All the pdf data in the database" });
});
router.get("/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    if (id === "sudarsan") throw new Error("sudarsan string provided");
    res.json({ msg: `we are adding ${id} from database` });
  } catch (e) {
    next(e);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const data = await PDFController.createPDF(req.body);
    res.json({ data: data, msg: `Generating PDF ` });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ data: req.body, msg: "Updating new data" });
});
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ data: req.body, msg: "Patching new data" });
});
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ msg: "Deleting new data" });
});
module.exports = router;
