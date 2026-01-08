"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortfolio = getPortfolio;
const portfolio_service_1 = require("../services/portfolio.service");
const service = new portfolio_service_1.PortfolioService();
async function getPortfolio(req, res) {
    try {
        const data = await service.getPortfolio();
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ message: "Failed to load portfolio" });
    }
}
