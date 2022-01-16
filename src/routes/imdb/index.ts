import { Router } from "express";
import { getMovieByName, getActorByName } from "./logic";

const router: Router = Router();

router.get("/get-movie", async (req, res) => {
  try {
    const result = await getMovieByName(req.body.searchKey);
    res.send(result);
  } catch (e: any) {
    res.send(e.message);
  }
});

router.get("/get-actor", async (req, res) => {
  try {
    const result = await getActorByName(req.body.searchKey);
    res.send(result);
  } catch (e: any) {
    res.send(e.message);
  }
});

module.exports = router;
