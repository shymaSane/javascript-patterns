//Import mixins
//This variation of the pattern demonstrates how globals (e.g jQuery, Underscore) can be passed in as arguments to our module's anonymous function. This effectively allows us to import them and locally alias them as we wish.

var myModule = (function(JQ, _){
    function privateMethod1(){
        jQ(".container").html("test");
    }

    function privateMethod2(){
        console.log( _.min([10, 5, 100, 2, 1000]) );
      }
   
      return{
          publicMethod: function(){
              privateMethod1();
          }
      };

    //pull in jquery and underscore
})(jQuery, _)

//Exports
//This next variation allows us to declare globals without consuming them and could similarly support the concept of global imports seen in the last example.

// Global module
var myModule = (function () {
 
    // Module object
    var module = {},
      privateVariable = "Hello World";
   
    function privateMethod() {
      // ...
    }
   
    module.publicProperty = "Foobar";
    module.publicMethod = function () {
      console.log( privateVariable );
    };
   
    return module;
   
  })();

  //for more visit: https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript