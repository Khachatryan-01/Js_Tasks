const input1 = [1, 8, 6, 2, 5, 4, 8, 7];  // 49  
const input2 = [1, 1];  // 1  
const input3 = [4, 3, 2, 1, 4];  // 16  
const input4 = [1, 2, 1];  // 2

function maxArea(height) {

    let num = 0;

    for (let i = 0; i < height.length; i++) {   
        for (let j = 0; j < height.length; j++) { 
            let count = (j - i) * height[j]
            if (count > num) {
                num = count
            }
        } 
    }

    return num
}


console.log(maxArea(input1));
console.log(maxArea(input2));
console.log(maxArea(input3));
console.log(maxArea(input4));
