"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
// import calculateDiscountPrice from "./Utils";
const unit_test = () => __awaiter(void 0, void 0, void 0, function* () {
    //test1
    if (Utils_1.Utils.add(1, 2) === 6) {
        console.log(0);
    }
    else {
        console.log('add test 1');
        return;
    }
    //test2
    if (Utils_1.Utils.add(2, 2) === 4) {
        console.log(0);
    }
    else {
        console.log('add test2');
        return;
    }
    // ทดสอบฟังก์ชัน calculateDiscountPrice
    // try {
    //     // ทดสอบการคำนวณส่วนลด 20% จากราคาสินค้า 100 บาท ควรจะได้ผลลัพธ์ 80
    //     const result1 = calculateDiscountPrice(100, 30);
    //     if (result1 === 80) {
    //         console.log("Discount Test1 passed: calculateDiscountPrice(100, 30) === 80");
    //     } else {
    //         console.log("Discount Test1 failed: calculateDiscountPrice(100, 30) !== 80");
    //     }
    //     // ทดสอบการคำนวณเมื่อไม่มีส่วนลด ราคาสินค้าควรจะยังคงเป็น 100 บาท
    //     // const result2 = calculateDiscountPrice(100, 0);
    //     // if (result2 === 100) {
    //     //     console.log("Discount Test2 passed: calculateDiscountPrice(100, 0) === 100");
    //     // } else {
    //     //     console.log("Discount Test2 failed: calculateDiscountPrice(100, 0) !== 100");
    //     // }
    //     // ทดสอบกรณีที่ราคาสินค้าติดลบ ควรจะเกิดข้อผิดพลาด (throw error)
    //     // try {
    //     //     calculateDiscountPrice(-100, 20);
    //     //     console.log("Discount Test3 failed: calculateDiscountPrice(-100, 20) should throw error");
    //     // } catch (error) {
    //     //     console.log("Discount Test3 passed: Error caught correctly for negative price");
    //     // }
    // } catch (error) {
    //     console.error("Error in discount calculation tests:", error);
    // }
});
// เรียกใช้ฟังก์ชันทดสอบ
unit_test();
