import { Router } from "express";

const router: Router = Router();

router.use("/example", require("./example"));

module.exports = router;
