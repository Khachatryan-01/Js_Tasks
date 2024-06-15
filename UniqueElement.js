let name = 'hello';

function uniqueElement(name) {

    const array = name.trim().toLowerCase().split('');
    const obj = {}
    const uniqueElements = []
    
    for (let i = 0; i < array.length; i++) {
        let num = 1
        if (obj[array[i]] >= 1) {
            obj[array[i]]++
        }
        else {
            obj[array[i]] = num
        }
    }

    for (let i in obj) {
        if (obj[i] === 1) {
            uniqueElements.push(i)
        }
    }

    return uniqueElements
}

console.log(uniqueElement(name));