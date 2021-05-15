const copyArray = () => {
    const a = [1, 2, 3, 4];
    const b = [...a];
    console.log("B (copied from a): ", b);
}
copyArray();

const copyObject = () => {
    const multiLevelObject = {x: 10, y: {m: 20, n: {b: 30}}};
    // Copy first level property only
    const clonedMultiLevelObj = {...multiLevelObject};
    
    // Since copy is performed at first level, changing clonedMultiLevelObj.x cloned Obj doesn't change the multiLevelObject.x
    clonedMultiLevelObj.x = 40;

    // Since copy is performed at first level, changing clonedMultiLevelObj.y.m also change the multiLevelObject.y.m 
    // as both clonedMultiLevelObj.y and multilevelObject.y is referencing the same object
    clonedMultiLevelObj.y.m = 30;
    console.log(`Original Object: ${JSON.stringify(multiLevelObject)} Cloned Obj: ${JSON.stringify(clonedMultiLevelObj)}`);
}

copyObject();

const concatArrayDemo = () => {
    // Concat two array
    const a = [0, 1, 2, 3, 4];
    const b = [5, 6, 7, 8, 9];
    const concat = [...a, ...b];
    console.log("Concatinated A & B", concat);
}
concatArrayDemo();

const concatObjects = () => {
    const obj1 = {p: 20, q: 30};
    const obj2 = {r: 40, s: 50};
    
    const obj3 = {...obj1, ...obj2}
    console.log(`Merged Object: ${JSON.stringify(obj3)}`);
}
concatObjects();

const concatCommonPropertiesObjects = () => {
    // Object concatination with common properties
    const obj1 = {p: 20, q: 30};
    const obj2 = {q: 40, s: 50};
    
    const obj3 = {...obj1, ...obj2}

    // Last object common properties values will override the prior objects properties values
    console.log(`Merged Object: ${JSON.stringify(obj3)}`);
    // Output: Merged Object {p: 20, q: 40, s: 50};
}
concatCommonPropertiesObjects();

// Unlimited parameters
const maximumValue = (...numbers: number[]) => {
   return numbers.reduce((maxValue: number, number: number) => {
        if(maxValue > number) {
            return maxValue;
        }
        return number;
    }, numbers[0]);
}

console.log(`Maximum value: ${maximumValue(50, 40, 30, 100, 60)}`)

//Descstructing
const destructureArray = () => {
    const a = [1, 2, 3, 4];
    const [one, two, three, four] = a;
    console.log(`${one} ${two} ${three} ${four}`);
} 

destructureArray();

const destructureObject = () => {
    const obj = {x: 10, y: 20};
    
    // Provide the same properties names while destructuring object
    const {x, y} = obj;
    console.log(`x: ${x} y: ${y}`);
}
destructureObject();

const multiLevelDestructuring = () => {
    const obj = {x: 10, y: {m: 20, n: {g: 30, h: 40}}};
    
    // Define the equivalent properties 
    const { y: {m, n: {g, h}} } = obj;
    console.log(`m: ${m} g: ${g} h: ${h}`);

}
multiLevelDestructuring();
