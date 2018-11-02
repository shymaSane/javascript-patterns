//can only return one instance of an object at the time
//why would you use it?
//for a one use object created at the time 
//prevent having tow users being created at once

var singleton = (function(){
    var instance;

    function init(){

        //private
        function privateMethod(){
            console.log('this is my private method')
        }

        var privateVariable = "shyma"

        return {
            //public following module style
            publicMethod: function(){
                privateMethod();
            },

            publicProperty: 'm also public'
        }

    }

    return {
        getInstance: function(){
            //important to let instance y === to instance x
            // a wrong syntax wont have if condition
            if(!instance){
                instance = init()
                console.log('first instance init')
            }
            return instance
        }
    }
})();

let y = singleton.getInstance(); //>>>> 'first instance init' 
let x = singleton.getInstance(); //>>>> ........
x === y ///>>>> true they both equal to {publicMethod: ƒ, publicProperty: "m also public"}
