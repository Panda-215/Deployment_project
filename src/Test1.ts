import { Utils } from "./Utils";
import calculateDiscountPrice from "./Utils";

// ตัวอย่างฟังก์ชัน unit_test
const unit_test = async () => {
    // ทดสอบฟังก์ชัน add
    // try {
    //     // ทดสอบกรณี add(1, 2) ซึ่งควรจะได้ผลลัพธ์เท่ากับ 3
    //     if (Utils.add(1, 2) === 3) {
    //         console.log("Test1 passed: add(1, 2) === 3");
    //     } else {
    //         console.log("Test1 failed: add(1, 2) !== 3");
    //     }

    //     // ทดสอบกรณี add(2, 2) ซึ่งควรจะได้ผลลัพธ์เท่ากับ 4
    //     if (Utils.add(2, 2) === 4) {
    //         console.log("Test2 passed: add(2, 2) === 4");
    //     } else {
    //         console.log("Test2 failed: add(2, 2) !== 4");
    //     }
    // } catch (error) {
    //     console.error("Error in add function tests:", error);
    // }

    // ทดสอบฟังก์ชัน calculateDiscountPrice
    try {
        // ทดสอบการคำนวณส่วนลด 20% จากราคาสินค้า 100 บาท ควรจะได้ผลลัพธ์ 80
        const result1 = calculateDiscountPrice(100, 20);
        if (result1 === 80) {
            console.log("Discount Test1 passed: calculateDiscountPrice(100, 20) === 80");
        } else {
            console.log("Discount Test1 failed: calculateDiscountPrice(100, 20) !== 80");
        }

        // ทดสอบการคำนวณเมื่อไม่มีส่วนลด ราคาสินค้าควรจะยังคงเป็น 100 บาท
        const result2 = calculateDiscountPrice(100, 0);
        if (result2 === 100) {
            console.log("Discount Test2 passed: calculateDiscountPrice(100, 0) === 100");
        } else {
            console.log("Discount Test2 failed: calculateDiscountPrice(100, 0) !== 100");
        }

        // ทดสอบกรณีที่ราคาสินค้าติดลบ ควรจะเกิดข้อผิดพลาด (throw error)
        try {
            calculateDiscountPrice(-100, 20);
            console.log("Discount Test3 failed: calculateDiscountPrice(-100, 20) should throw error");
        } catch (error) {
            console.log("Discount Test3 passed: Error caught correctly for negative price");
        }
    } catch (error) {
        console.error("Error in discount calculation tests:", error);
    }

    // ทดสอบฟังก์ชัน addUser
    try {
        const data: any = {
            "name": "panda",
            "username": "pp"
        };
        const response: any = await Utils.addUser(data);
        const correct_result: any = {
            "name": "panda",
            "username": "pp"
        };

        // ตรวจสอบว่าข้อมูลที่เพิ่มตรงกับข้อมูลที่คาดหวังหรือไม่
        let testPassed = true;
        const keys: string[] = Object.keys(correct_result);
        for (const k of keys) {
            if (correct_result[k] !== response[k]) {
                console.log(`addUser test failed at key: ${k}`);
                testPassed = false;
            }
        }
        if (testPassed) {
            console.log("addUser test passed");
        }
    } catch (error) {
        console.error("Error in addUser test:", error);
    }
};

// เรียกใช้ฟังก์ชันทดสอบ
unit_test();
