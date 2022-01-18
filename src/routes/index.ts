import { Router } from "express";

const router: Router = Router();

router.use("/fortnite", require("./fortnite"));

module.exports = router;
