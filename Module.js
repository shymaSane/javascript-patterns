//counter Module example: 
var testModule = (function(){
    var counter = 0;
    //can't be access by global scope
    var myPrivateMethode = function(){
        console.log('private!!!')
    };
    //public methods that can be accessed
    return {
        increment: function(){
            return counter++;
        },
        decrement: function(){
            return counter--;
        },
        reset: function(){
            counter = 0;
        }
    }
})();

//Rules
//1- when console.log TestModule it wont show ay private method or variables >>>> {increment: ƒ, decrement: ƒ, reset: ƒ}
//2- we cans access the object using key value pair >>>> testModule.increment()
//3- we cannot access myPrivateMethode; >>>> testModule.myPrivateMethode() >>>> return error
//4- The Module pattern encapsulates "privacy", state and organization using closures. It provides a way of wrapping a  mix of public and private methods and variables, protecting pieces from leaking into the global scope and accidentally colliding with another developer's interface. With this pattern, only a public API is returned, keeping everything else within the closure private.