// 1. String
let foodName = "Nasi Goreng";
alert("Makanan favorit saya: " + foodName);
console.log("String:", foodName);

// 2. Boolean
let sate = 2;
let bakso = 3;
let equality = sate==bakso;
alert("Apakah jumlah sate sama dengan bakso? " + equality);
console.log("Boolean: Jumlah sate sama dengan bakso ", equality);

// 3. Number
let harga = 1e4;
let diskon = 2e3;
let total = harga-diskon;
alert("Sate 10.000 diskon 2000 jadi= " + total);
console.log("Number: ", total);

// 4. Array
let ingredients = ["Beras", "Minyak", "Telur", "Bumbu"];
ingredients[3] = 'Tepung';
console.log("Array:", ingredients);

// 5. BigInt
let hugeNumber = 1234567890n;
console.log("BigInt:", hugeNumber);

// 6. Undefined
let pizza;
console.log("Undefined:", pizza);

// 7. Null
let additionalIngredient = null;
console.log("Null:", additionalIngredient);

// 8. Object
let foodDetails = {name: "Irfan", favFood: "Sate ayam", price: 20000};
console.log("Object:", foodDetails);

// 9. Symbol
let uniqueFoodID = Symbol("Sate");
console.log("Symbol:", uniqueFoodID);

// 10. Type of Operator Examples
console.log("Nasi Goreng:", typeof foodName);
console.log("false: ", typeof equality);
console.log("8000: ", typeof total);

// 11. Logical Operator
let sushi = 6;
let bakmi = 2;
console.log(!(sushi>2 && bakmi<6));
console.log(bakmi<1 || sushi<8);

// 12. Equality Comparison
let tahu = 5
let bulat = '5'
console.log(tahu === bulat)