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
exports.Utils = void 0;
const axios_1 = __importDefault(require("axios"));
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
function addUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.post('https://jsonplaceholder.typicode.com/users', data);
        console.log(response);
        return response.data;
    });
}
exports.Utils = { addUser, calculateDiscountPrice };
