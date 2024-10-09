"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Utils_1 = __importDefault(require("./Utils"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
// Example of using calculateDiscountPrice
app.get('/calculateDiscount', (req, res) => {
    try {
        const price = Number(req.query.price);
        const discount = Number(req.query.discount);
        const finalPrice = (0, Utils_1.default)(price, discount);
        res.send(`Final price after discount: ${finalPrice}`);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        }
        else {
            res.status(500).send("An unknown error occurred.");
        }
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
