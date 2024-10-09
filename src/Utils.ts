import axios from "axios";

// Function to calculate discount price
function calculateDiscountPrice(price: number, discount: number): number {
    if (price < 0 || discount < 0) {
        throw new Error("ราคาหรือส่วนลดต้องไม่ติดลบ");
    }
    const discountAmount = (price * discount) / 100;
    return price - discountAmount;
}

// Function to add user
export async function addUser(data: any) {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error adding user:", error);
        throw error; // Rethrow the error for further handling
    }
}

export default calculateDiscountPrice;