//1- mixin is interduce some methods to a class without inheriting form a class 
 const canEat = {
     eat: function(){
        this.hunger--;
        console.log('Eating!!!!')
     }
 }

 const canWalk = {
     walk: function(){
         console.log('walking!!!!!')
     }
 }

 const canSwim = {
     swim: function(){
         console.log('can swim!!!!')
     }
 }

 const person = Object.assign({}, canEat, canWalk);
// person ll equal to >>>> {eat: ƒ, walk: ƒ}

//How to assign it to calss:
function Animal(){

 }

Object.assign(Animal.prototype, canEat, canWalk);
//Animal.prototype ll equal >>>> {eat: ƒ, walk: ƒ, constructor: ƒ}
// we call the methods ad following: Animal.prototype.walk() OR use new key word >> let x = new Animal >> x.walk();

//we can make tis shorter by making a mixin function that opreates when ever we need to use assign

function mixing(target, ...sources){
    //when we use ...sources in the arguments its precevied as an array
    //the spread opreator has the same syntax but it ll spread the argument array
    //target is the calss we want to assign objects to it 
    // ...sources are the objects with methods in it 
    Object.assign(target, ...sources)
}

//Example

function Duck(){

}

mixing(Duck.prototype, canSwim, canEat);
console.log(Duck.prototype) //>>> {swim: ƒ, eat: ƒ, constructor: ƒ}