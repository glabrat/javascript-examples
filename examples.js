    // 1. Composite function
    // Arrow function to multiply 3 int parameters
    let rokket = (x) => (y) => (z) => x * y * z;
    console.log(rokket(2)(5)(3)) // this outputs 30
    console.log(rokket(4)(2)(2)) // this outputs 16
    console.log(rokket(8)(2)(1)) // this also outputs 16

    // 2. Longest string
    const list = ['best', 'company', 'ever'];
    // output the longest string of the array 
    // It will compare the elements of the array, if first element's length is bigger than the second, It will print first element, otherwise the second
    rokket = (array) => array.reduce((first, second) => first.length > second.length ? first : second);
    console.log(rokket(list)) // this outputs 'company'

    // 3. String repetition
    rokket = (word, repetition) => word.repeat(repetition);
    console.log(rokket('node', 5)) // this outputs 'nodenodenodenodenode'
    console.log(rokket('abc', 2)) // this outputs 'abcabc'

    // 4. Only last names
    const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }
    ]
    rokket = (contacts) => contacts.map(elem => elem.lastName);
    console.log(rokket(contacts)); // this outputs ['Rokket', 'Bond', 'Potter']
    // 5. Unique numbers
    // This functions works well
    rokket = (firstArray, secondArray) => Array.from(new Set([...firstArray, ...secondArray]));
    rokket = function (firstArray, secondArray) {
      let array = [...firstArray, ...secondArray];
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
      // using accumulator
      return array.reduce((first, second) => first.includes(second) ? first : [...first, second], [])
    };
    console.log(rokket([1, 2, 5], [2, 1, 6])); // this outputs [1, 2, 5, 6]
    console.log(rokket([1, 2, 3], [4, 5, 6])); // this outputs [1, 2, 3, 4, 5, 6]
