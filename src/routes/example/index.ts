import { Router } from "express";
import { test } from "./logic";
const router: Router = Router();

router.get("/get", async (req, res) => {
  console.log(req.body.message);

  const response = test(req.body.message);
  res.json(response);
});

module.exports = router;
