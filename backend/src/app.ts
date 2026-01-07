import express from "express";
import cors from "cors";
import portfolioRoutes from "./routes/portfolio.routes";

const app = express();

app.use(cors({
    origin: "*",
}));
app.use(express.json());

app.use("/api", portfolioRoutes);

export default app;
