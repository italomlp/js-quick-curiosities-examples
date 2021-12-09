const types = {
    "String('abc')": typeof String('abc'), // object
    'undefined': typeof undefined, // object
    '0': typeof 0, // number
    "'0'": typeof '0', // string
    'Number(123)': typeof Number(123), // object
    'NaN': typeof NaN, // object
    'new class {}': typeof new class {}, // object
    'Array([])': typeof Array([]), // object
    'Object({})': typeof Object({}), // object
    '[]': typeof [], // object
    '{}': typeof {}, // object
    'null': typeof null, // object
};

console.table(types);
