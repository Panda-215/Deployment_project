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
exports.addUser = addUser;
const axios_1 = __importDefault(require("axios"));
// Function to calculate discount price
function calculateDiscountPrice(price, discount) {
    if (price < 0 || discount < 0) {
        throw new Error("ราคาหรือส่วนลดต้องไม่ติดลบ");
    }
    const discountAmount = (price * discount) / 100;
    return price - discountAmount;
}
// Function to add user
function addUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post('https://jsonplaceholder.typicode.com/users', data);
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.error("Error adding user:", error);
            throw error; // Rethrow the error for further handling
        }
    });
}
exports.default = calculateDiscountPrice;
