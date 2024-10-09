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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __importDefault(require("./Utils"));
const unit_test = () => __awaiter(void 0, void 0, void 0, function* () {
    //ทดสอบฟังก์ชัน calculateDiscountPrice
    try {
        // ทดสอบการคำนวณส่วนลด 20% จากราคาสินค้า 100 บาท ควรจะได้ผลลัพธ์ 80
        const result1 = (0, Utils_1.default)(500, 20);
        if (result1 === 80) {
            console.log("Discount Test1 passed: calculateDiscountPrice(500, 20) === 80");
        }
        else {
            console.log("Discount Test1 failed: calculateDiscountPrice(500, 20) !== 80");
        }
        // ทดสอบการคำนวณเมื่อไม่มีส่วนลด ราคาสินค้าควรจะยังคงเป็น 100 บาท
        const result2 = (0, Utils_1.default)(100, 0);
        if (result2 === 100) {
            console.log("Discount Test2 passed: calculateDiscountPrice(100, 0) === 100");
        }
        else {
            console.log("Discount Test2 failed: calculateDiscountPrice(100, 0) !== 100");
        }
        // ทดสอบกรณีที่ราคาสินค้าติดลบ ควรจะเกิดข้อผิดพลาด (throw error)
        try {
            (0, Utils_1.default)(-100, 20);
            console.log("Discount Test3 failed: calculateDiscountPrice(-100, 20) should throw error");
        }
        catch (error) {
            console.log("Discount Test3 passed: Error caught correctly for negative price");
        }
    }
    catch (error) {
        console.error("Error in discount calculation tests:", error);
    }
});
// เรียกใช้ฟังก์ชันทดสอบ
unit_test();
