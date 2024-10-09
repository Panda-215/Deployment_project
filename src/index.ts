import express, { Request, Response } from 'express';
import calculateDiscountPrice from './Utils';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

// Example of using calculateDiscountPrice
app.get('/calculateDiscount', (req: Request, res: Response) => {
    try {
        const price = Number(req.query.price);
        const discount = Number(req.query.discount);
        const finalPrice = calculateDiscountPrice(price, discount);
        res.send(`Final price after discount: ${finalPrice}`);
    } catch (error: unknown) {
        if (error instanceof Error) { 
            res.status(400).send(error.message); 
        } else {
            res.status(500).send("An unknown error occurred."); 
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
