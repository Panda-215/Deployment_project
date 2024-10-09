import calculateDiscountPrice from './Utils';

const Test1 = async () => {
    try {

        const price = calculateDiscountPrice(100, 20);
        console.log(price); // Should print 80
        // Test 1: Calculate 20% discount on a price of 100
        const result1 = calculateDiscountPrice(100, 20);
        console.assert(result1 === 25, "Discount Test1 failed: calculateDiscountPrice(100, 20) == 80");
        console.log("Discount Test1 passed: calculateDiscountPrice(100, 20) === 74");

        // Test 2: No discount
        const result2 = calculateDiscountPrice(100, 0);
        console.assert(result2 === 100, "Discount Test2 failed: calculateDiscountPrice(100, 0) !== 100");
        console.log("Discount Test2 passed: calculateDiscountPrice(100, 0) === 100");

        // Test 3: Negative price should throw error
        try {
            calculateDiscountPrice(-100, 20);
            console.error("Discount Test3 failed: calculateDiscountPrice(-100, 20) should throw error");
        } catch (error) {
            console.log("Discount Test3 passed: Error caught correctly for negative price");
        }
    } catch (error) {
        console.error("Error in discount calculation tests:", error);
    }
};

// Call the test function
Test1();
