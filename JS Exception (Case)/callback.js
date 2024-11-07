function myFirst(){ 
    myDisplayer("Bulat");
}

function mySecond (callback) { 
    myDisplayer("Tahu");
    callback();
}

function myDisplayer (message) {
    console.log(message);
}

mySecond (myFirst);