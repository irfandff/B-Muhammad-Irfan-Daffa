function divideNumbers(a, b) {
    try {
        if (a === undefined || b === undefined) {
            throw new Error("Anda harus menginputkan angka");
        }
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Input harus berupa angka.");
        }
        if (b === 0) {
            throw new Error("Tidak dapat membagi dengan nol.");
        }    
        return a / b;
    } catch (error) {
        console.error("Kesalahan:", error.message);
        return null;
    }
}

// Contoh penggunaan
console.log(divideNumbers(10, 2)); 
console.log(divideNumbers(10, 0)); 
console.log(divideNumbers(10, 'a')); 
console.log(divideNumbers()); 
