"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
// function add(a: number, b: number) {
//     return a + b;
// }
function calculateDiscountedPriceWithExtra(price, discountPercentage) {
    if (price < 0 || discountPercentage < 0) {
        throw new Error('Price and discount percentage must be positive numbers');
    }
    else if (discountPercentage > 100) {
        throw new Error('Discount percentage cannot be more than 100');
    }
    else if (price > 500) {
        discountPercentage += 5; // ถ้าราคามากกว่า 500 จะเพิ่มส่วนลดอีก 5%
    }
    const discount = (price * discountPercentage) / 100;
    return price - discount;
}
exports.Utils = { calculateDiscountedPriceWithExtra };
