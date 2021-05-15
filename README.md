# Spread operator and destructing in typescript
This repository showcases typescript spread operators usages possibilities in various diffrent scenarios. It also covers the destructing technique of arrays and objects
## Spread Operator Usages
### Copy array
Copying one array data to another is possible by simply spreading the array to be copied.
```typescript
    const a = [1, 2, 3, 4];
    const b = [...a];
    console.log("B (copied from a): ", b);
    // Output: B (copied from a):  [ 1, 2, 3, 4 ]
```
### Copy Object
Object copy is possible similiar to copy of array by providing object in object braces with spread operator.
```typescript
    const obj1 = {x: 10, y: 20};
    
    // Provide the same properties names while destructuring object
    const obj2 = {...obj1};
    console.log(`Obj2: ${JSON.stringify(obj)}`);
```

#### Copy behaviour in case of multilevel objects
Spread operator only create different copy of properties at first level. Second level onwards references of properties got assigned in copeid object. It can result in changing values at second level results in changes in both the objects.
```typescript
    const multiLevelObject = {x: 10, y: {m: 20, n: {b: 30}}};
    // Copy first level property only
    const clonedMultiLevelObj = {...multiLevelObject};
    
    // Since copy is performed at first level, changing clonedMultiLevelObj.x cloned Obj doesn't change the multiLevelObject.x
    clonedMultiLevelObj.x = 40;

    // Since copy is performed at first level, changing clonedMultiLevelObj.y.m also change the multiLevelObject.y.m 
    // as both clonedMultiLevelObj.y and multilevelObject.y is referencing the same object
    clonedMultiLevelObj.y.m = 30;
    console.log(`Original Object: ${JSON.stringify(multiLevelObject)} Cloned Obj: ${JSON.stringify(clonedMultiLevelObj)}`); 
    // Output: Original Object: {"x":10,"y":{"m":30,"n":{"b":30}}} Cloned Obj: {"x":40,"y":{"m":30,"n":{"b":30}}}
``` 

### Concat array
Once can concatinate array by spreading the two array side by side while initialising another array
```typescript
    // Concat two array
    const a = [0, 1, 2, 3, 4];
    const b = [5, 6, 7, 8, 9];
    const concat = [...a, ...b];
```

### Concatinating Object
Object concatination is possible in a similiar way by spreading two objects inside the object braces while initialising.
```typescript
    const concatObjects = () => {
    const obj1 = {p: 20, q: 30};
    const obj2 = {r: 40, s: 50};
    
    const obj3 = {...obj1, ...obj2}
    console.log(`Merged Object: ${JSON.stringify(obj3)}`);
    // Output Merged Object: {"p":20,"q":30,"r":40,"s":50}
}
```
#### Merging object having common properties
If two merged object have common properties then last object properties values will override the prior objects properties values

```typescript
    // Object concatination with common properties
    const obj1 = {p: 20, q: 30};
    const obj2 = {q: 40, s: 50};
    
    const obj3 = {...obj1, ...obj2}

    // Last object common properties values will override the prior objects properties values
    console.log(`Merged Object: ${JSON.stringify(obj3)}`);
    // Output: Merged Object {p: 20, q: 40, s: 50};
```

### Creating function with unlimited parameters
Sometimes we get requirement of creating function which number of parameters can't be specified in advance. Finding maximum value is one example of it.
Spread operators helps in defining a method having unlimited number of arguments very neatly. I am going to present example of function which finds maximum number out of provided n numbers.
```typescript
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
    // Output: Maximum value: 100
```

## Destructing
Destrucing is the process of taking the values from an array or object and assigning it to individual variables. Typescript provides destructing machanism for both the array and objects.
### Destructing array
Array values can be destructure by providing names of variables inside array bracket and assigning an array to it like below
```typescript
    const a = [1, 2, 3, 4];
    const [one, two, three, four] = a;
    console.log(`${one} ${two} ${three} ${four}`);
    // Output: 1 2 3 4
```
Here as you saw all the variables provided in sequence gets values of array accordingly. It is possible to have a mismatch number of variables left hand side. In such cases remaining arrays values will be discarded
### Destructing object
Object destructing is also possible in a similiar fashion just by replacing left hand side array bracket to object brackets. However names of variables should be similiar to the names of properties. Example is as followed

```typescript
    const obj = {x: 10, y: 20};
    // Provide the same properties names while destructuring object
    const {x, y} = obj;
    console.log(`x: ${x} y: ${y}`);
    // Output: x: 10 y: 20
```
### Multi Level Object property destructing
You can also destructer object properties which are deeper then one level by following way
```typescript
    const obj = {x: 10, y: {m: 20, n: {g: 30, h: 40}}};
    
    // Define the equivalent properties and list the variables inside the curly braces
    const { y: {m, n: {g, h}} } = obj;
    console.log(`m: ${m} g: ${g} h: ${h}`);
```

## Running Application
This is a node module application. It can be run with following steps
* `npm install`
* `npm run execute`

Thanks for reading!
