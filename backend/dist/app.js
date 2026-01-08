"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const portfolio_routes_1 = __importDefault(require("./routes/portfolio.routes"));
const rateLimit_middleware_1 = require("./middlewares/rateLimit.middleware");
const app = (0, express_1.default)();
app.set("trust proxy", 1);
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(express_1.default.json());
app.use("/api", rateLimit_middleware_1.apiRateLimiter);
app.use("/api", portfolio_routes_1.default);
exports.default = app;
