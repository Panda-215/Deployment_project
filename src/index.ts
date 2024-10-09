import express, { Request, Response } from 'express';
import calculateDiscountPrice from './Utils'; // Import your function

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
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
    } catch (error: unknown) { // Use unknown type for error
        if (error instanceof Error) { // Type guard to ensure error is an instance of Error
            res.status(400).send(error.message); // Return error message to the client
        } else {
            res.status(500).send("An unknown error occurred."); // Fallback for non-Error objects
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
