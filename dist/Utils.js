"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
//function add(a: number, b: number) {
//return a + b;
//}
function calculateDiscountPrice(price, discount) {
    if (price < 0 || discount < 0) {
        throw new Error("ราคาหรือส่วนลดต้องไม่ติดลบ");
    }
    const discountAmount = (price * discount) / 100;
    return price - discountAmount;
}
exports.default = calculateDiscountPrice;
// async function addUser(data:any) {
//     const response: any = await axios.post('https://jsonplaceholder.typicode.com/users', data);
//    console.log (response);
//    return response.data
// }
exports.Utils = { calculateDiscountPrice };
