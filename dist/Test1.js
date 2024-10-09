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
        const price = (0, Utils_1.default)(100, 20);
        console.log(price); // Should print 80
        // Test 1: Calculate 20% discount on a price of 100
        const result1 = (0, Utils_1.default)(100, 20);
        console.assert(result1 === 80, "Discount Test1 failed: calculateDiscountPrice(100, 20) !== 80");
        console.log("Discount Test1 passed: calculateDiscountPrice(100, 20) === 80");
        // Test 2: No discount
        const result2 = (0, Utils_1.default)(100, 0);
        console.assert(result2 === 100, "Discount Test2 failed: calculateDiscountPrice(100, 0) !== 100");
        console.log("Discount Test2 passed: calculateDiscountPrice(100, 0) === 100");
        // Test 3: Negative price should throw error
        try {
            (0, Utils_1.default)(-100, 20);
            console.error("Discount Test3 failed: calculateDiscountPrice(-100, 20) should throw error");
        }
        catch (error) {
            console.log("Discount Test3 passed: Error caught correctly for negative price");
        }
    }
    catch (error) {
        console.error("Error in discount calculation tests:", error);
    }
});
// Call the test function
Test1();
