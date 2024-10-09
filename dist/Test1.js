"use strict";
"./Utils"; // นำเข้าฟังก์ชันจาก Utils
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const unit_test = () => __awaiter(void 0, void 0, void 0, function* () {
<<<<<<< Updated upstream
    // ฟังก์ชันทดสอบโดยใช้ if-else
    function testCalculateDiscountedPriceWithExtra() {
        // ทดสอบกรณีปกติ
        let result = calculateDiscountedPriceWithExtra(100, 10);
        if (result === 90) {
            console.log('Test 1 passed');
=======
    //ทดสอบฟังก์ชัน calculateDiscountPrice
    try {
        // ทดสอบการคำนวณส่วนลด 20% จากราคาสินค้า 100 บาท ควรจะได้ผลลัพธ์ 80
        const result1 = (0, Utils_1.default)(100, 30);
        if (result1 === 20) {
            console.log("Discount Test1 passed: calculateDiscountPrice(100, 30) === 80");
>>>>>>> Stashed changes
        }
        else {
            console.log('Test 1 failed: Expected 90 but got ' + result);
        }
<<<<<<< Updated upstream
        result = calculateDiscountedPriceWithExtra(600, 10);
        if (result === 510) {
            console.log('Test 2 passed');
=======
        // ทดสอบการคำนวณเมื่อไม่มีส่วนลด ราคาสินค้าควรจะยังคงเป็น 100 บาท
        const result2 = (0, Utils_1.default)(100, 0);
        if (result2 === 20) {
            console.log("Discount Test2 passed: calculateDiscountPrice(100, 0) === 100");
>>>>>>> Stashed changes
        }
        else {
            console.log('Test 2 failed: Expected 510 but got ' + result);
        }
        // ทดสอบกรณีโยนข้อผิดพลาด (invalid input)
        try {
            calculateDiscountedPriceWithExtra(-100, 10);
            console.log('Test 3 failed: Expected an error but none was thrown');
        }
        catch (e) {
            if (e.message === 'Price and discount percentage must be positive numbers') {
                console.log('Test 3 passed');
            }
            else {
                console.log('Test 3 failed: ' + e.message);
            }
        }
        try {
            calculateDiscountedPriceWithExtra(100, 110);
            console.log('Test 4 failed: Expected an error but none was thrown');
        }
        catch (e) {
            if (e.message === 'Discount percentage cannot be more than 100') {
                console.log('Test 4 passed');
            }
            else {
                console.log('Test 4 failed: ' + e.message);
            }
        }
        // ทดสอบกรณีส่วนลดเป็น 0
        result = calculateDiscountedPriceWithExtra(100, 0);
        if (result === 100) {
            console.log('Test 5 passed');
        }
        else {
            console.log('Test 5 failed: Expected 100 but got ' + result);
        }
    }
    // เรียกใช้ฟังก์ชันทดสอบ
    testCalculateDiscountedPriceWithExtra();
});
// เรียกใช้ฟังก์ชันทดสอบ
unit_test();
