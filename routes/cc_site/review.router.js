import { Router } from "express";
import ReviewController from "../../controllers/cc_site/ReviewController.js";

const reviewRouter = Router();

reviewRouter.get("/truspilot", ReviewController.getTotalReviewsFromTrustpilot);

export default reviewRouter;
