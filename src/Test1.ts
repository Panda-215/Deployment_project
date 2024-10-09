import calculateDiscountPrice from './Utils';

const Test1 = async () => {
    try {
        // Test calculateDiscountPrice with 20% discount
        const result1 = calculateDiscountPrice(100, 20);
        if (result1 !== 80) {
            console.error("Assertion failed: Discount Test1 failed: calculateDiscountPrice(100, 20) should equal 80 but got", result1);
            process.exit(1); // Exit with failure code
        } else {
            console.log("Discount Test1 passed: calculateDiscountPrice(100, 20) === 80");
        }

        // Test with no discount
        const result2 = calculateDiscountPrice(100, 0);
        if (result2 !== 100) {
            console.error("Assertion failed: Discount Test2 failed: calculateDiscountPrice(100, 0) should equal 100 but got", result2);
            process.exit(1); // Exit with failure code
        } else {
            console.log("Discount Test2 passed: calculateDiscountPrice(100, 0) === 100");
        }

        // Test with negative price
        try {
            calculateDiscountPrice(-100, 20);
            console.error("Assertion failed: Discount Test3 failed: calculateDiscountPrice(-100, 20) should throw an error");
            process.exit(1); // Exit with failure code
        } catch (error) {
            console.log("Discount Test3 passed: Error caught correctly for negative price");
        }
    } catch (error) {
        console.error("Error in discount calculation tests:", error);
        process.exit(1); // Exit with failure code if there's an error
    }
};

// Call the test function
Test1();
