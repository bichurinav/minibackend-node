import { Router } from "express";
import reviewRouter from "./routes/cc_site/review.router.js";

const mainRouter = Router();

mainRouter.use("/cc_site/review", reviewRouter);

export default mainRouter;
