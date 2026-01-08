import express from "express";
import cors from "cors";
import portfolioRoutes from "./routes/portfolio.routes";
import { apiRateLimiter } from "./middlewares/rateLimit.middleware";

const app = express();

app.set("trust proxy", 1);

app.use(cors({
    origin: "*",
}));

app.use(express.json());

app.use("/api", apiRateLimiter);

app.use("/api", portfolioRoutes);

export default app;
