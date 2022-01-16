import { Router } from "express";

const router: Router = Router();

router.use("/imdb", require("./imdb"));

module.exports = router;
