// an updated pattern where we would simply define all of our functions and variables in the private scope and return an anonymous object with pointers to the private functionality we wished to reveal as public.

var myRevealingModule = (function(){
    var privateVar = "Shyma", publicVar = "Hello there";

    function privateFunction(){
        console.log('Name:' + privateVar);
    };

    function publicSetName(strName){
        privateVar = strName;
    };
    
    function publicGetName(){
        privateFunction();
    }

    return {
        setName: publicSetName,
        getName: publicGetName,
        greeting: publicVar
    }
})()

myRevealingModule.setName('jomana');
console.log(myRevealingModule.getName())
