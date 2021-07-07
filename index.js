// Write your solution here!
const drivers = ["Milo" , "Otis"  , "Garfield"];

function  destructivelyAppendDriver(name)  {

 
  return   drivers.push(name) ;
}
destructivelyAppendDriver('David') ;

function  destructivelyPrependDriver(name){
  return drivers.unshift(name) ;
}
destructivelyPrependDriver('Nathan');

function  destructivelyRemoveLastDriver() {
  return drivers.pop()
}
destructivelyRemoveLastDriver()

function destructivelyRemoveFirstDriver()  {
  return drivers.shift()
}
destructivelyRemoveFirstDriver()

var allDrivers= [];
function appendDriver(name) {
  const allDrivers = [...drivers , name] ;
  return allDrivers ;
}
allDrivers = appendDriver('David');

function  prependDriver(name) {
   const allDrivers = [name , ...drivers ] ;
    return allDrivers ;
}
prependDriver("Nathan");

function  removeLastDriver() {
 const fewDrivers = drivers.slice( 0 , -1) ;
  return fewDrivers ;
}
removeLastDriver();

function  removeFirstDriver() {
 var againFewDrivers = drivers.slice(1);
  return againFewDrivers ;
}
removeFirstDriver();
