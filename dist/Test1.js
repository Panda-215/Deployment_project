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
const Test1 = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Test calculateDiscountPrice with 20% discount
        const result1 = (0, Utils_1.default)(100, 20);
        if (result1 !== 80) {
            console.error("Assertion failed: Discount Test1 failed: calculateDiscountPrice(100, 20) should equal 80 but got", result1);
            process.exit(1); // Exit with failure code
        }
        else {
            console.log("Discount Test1 passed: calculateDiscountPrice(100, 20) === 80");
        }
        // Test with no discount
        const result2 = (0, Utils_1.default)(100, 0);
        if (result2 !== 100) {
            console.error("Assertion failed: Discount Test2 failed: calculateDiscountPrice(100, 0) should equal 100 but got", result2);
            process.exit(1); // Exit with failure code
        }
        else {
            console.log("Discount Test2 passed: calculateDiscountPrice(100, 0) === 100");
        }
        // Test with negative price
        try {
            (0, Utils_1.default)(-100, 20);
            console.error("Assertion failed: Discount Test3 failed: calculateDiscountPrice(-100, 20) should throw an error");
            process.exit(1); // Exit with failure code
        }
        catch (error) {
            console.log("Discount Test3 passed: Error caught correctly for negative price");
        }
    }
    catch (error) {
        console.error("Error in discount calculation tests:", error);
        process.exit(1); // Exit with failure code if there's an error
    }
});
// Call the test function
Test1();
