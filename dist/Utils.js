"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
function add(a, b) {
    return a + b;
}
// function calculateDiscountPrice(price: number, discount: number): number {
//     if (price < 0 || discount < 0) {
//         throw new Error("ราคาหรือส่วนลดต้องไม่ติดลบ");
//     }
//     const discountAmount = (price * discount) / 100;
//     return price - discountAmount;
// }
// export default calculateDiscountPrice;
// async function addUser(data:any) {
//     const response: any = await axios.post('https://jsonplaceholder.typicode.com/users', data);
//    console.log (response);
//    return response.data
// }
exports.Utils = { add };
