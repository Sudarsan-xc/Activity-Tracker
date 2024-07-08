const router = require("express").Router();
//crud
router.get("/", (req, res) => {
  res.json({ msg: "All the data in the database!" });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ msg: `We are reading ${id} from the database!"` });
});

router.post("/", (req, res) => {
  res.json({ data: req.body, msg: "Posting New Data " });
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
