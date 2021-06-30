function receivesAFunction(anotherFunction) {
    anotherFunction();
}

function returnsANamedFunction() {
    return function test() {
    }
}

function returnsAnAnonymousFunction() {
    return function () {
    }
}






//function returnsAnAnonymousFunction() 
    //anonymousFunction(() => console.log('This is an anonymous function')
//}

