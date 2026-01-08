import { Request, Response } from "express";
import { PortfolioService } from "../services/portfolio.service";

const service = new PortfolioService();

export async function getPortfolio(req: Request, res: Response) {
  try {
    const data = await service.getPortfolio();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to load portfolio" });
  }
}
