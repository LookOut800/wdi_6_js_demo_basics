'use strict';

/* NUMBERS
———————————————————————————————————————————————————
Unlike in Ruby there is no special distinction between numbers with and
without decimal points. They are all just "numbers".  */

var currentLevel = 17;
var price = 1499.99;
var fiveMinutes = 60 * 5; // all the basic math operations work
var threeHalves = 3 / 2; // this results in 1.5 -- no weird "integer division"
price = 1299.99; // only the first assignment needs a `var`
price += 100; // this kind of shortcut still works
var infinity = 42 / +0;
var negativeInfinity = 42 / -0;

/* STRINGS
———————————————————————————————————————————————————
Unlike in Ruby there is no difference between single quotes and double
quotes... since JavaScript has no string interpolation. Strings are also
"immutable", meaning we can't modify them in-place (no shoveling!)  */

var greeting = 'Hello there!';
var firstName = "Jason";
var lastName = "Wharff";
var myName = firstName + ' ' + lastName; // clunky, but it's the only way

/*  BOOLEANS
———————————————————————————————————————————————————
Like in Ruby, we have the booleans true and false. */

var excited = true;
var testMode = false;

var excitedlyTesting = excited && testMode; // boolean && and || are here
var calm = !excited; // boolean "not" is also here

/* UNDEFINED
———————————————————————————————————————————————————
Unlike in Ruby, we have an extra nil-like value called "undefined". It's
what you'll get if you access a variable that's not assigned yet, or call
a function that doesn't return anything.*/
var mystery = undefined;
var spooky; // This does the same thing as above! The value is "undefined"
console.log('variable mystery is typeof ' + typeof mystery + ' javascript type');

/*  NULL
———————————————————————————————————————————————————
We also have nil, but in JS it's called "null". A value that carries no value.
Like undefined, but defined (not automatically assigned).
It is falsy.  */
var result = null; // the variable `result` is defined, but it's value is null.
console.log('null is typeof ' + typeof null + ' javascript type');

/*  Control Flow in Javascript
———————————————————————————————————————————————————
Important differences from Ruby:
  - Conditions must be enclosed in parentheses.
  - Code blocks are always enclosed in braces. There is no `end` in JavaScript.
  - The "else-if" syntax is two separate words, `else if`, rather than `elsif`.
  - There is no `unless` in JavaScript. Use the "not" operator (`!`) instead.   */

var holyNumber = function(holyNumber){
  if(holyNumber > 3) {
    return 'Four shalt thou not count. Five is right out.';
  } else if(holyNumber < 3) {
    return 'Count neither one nor two, excepting that thou then proceedest to three.';
  } else if(holyNumber === 3) {
    return 'Throw the holy hand grenade!';
  } else {
    return 'World ends';
  }
};


/*  Switch/Case statements
———————————————————————————————————————————————————
Note that `case` blocks are *not* enclosed in braces,
and each one also needs a `break` statement at the end &ndash;
otherwise code execution will "fall through" to the next
block and keep on going! Thankfully `switch` uses the
threequals for comparison, but due to its quirks and
inflexibility, you don't see it that often in real-world programs.
*/

var yearbook = function(year){
  switch(year) {
    case 'freshman':
      return 'cannon fodder';
      break;
    case 'sophomore':
      return 'mildly respectable';
      break;
    case 'junior':
      return 'some influence';
      break;
    case 'senior':
      return 'phenomenal cosmic power';
      break;
    default:
      return 'mysterious stranger'
      break;
  }
};


/*  Arrays
———————————————————————————————————————————————————
Like all objects, arrays can have *functions* (or methods) 
defined on them, like `.sort()`, that we can call. Functions 
must always be called with parentheses, even if we're not 
passing any arguments. Note `length` is not a function &ndash; 
instead it is a *property* that is accessed directly, and we 
cannot use parentheses to call it. The MDN reference will 
tell you whether something is a property or a function. */

var colors = ['red', 'green', 'blue'];
var green = colors[1];
var colorsCount = colors.length;
var indexOfBlue = colors.indexOf('blue');
var lastColor = colors[colors.length - 1]; // we can't use negative indexes

colors.push('purple');
var purple = colors.pop();

colors.sort(); // now they're in alphabetical order

// These should be familiar from Ruby
var newColors = 'blue, orange, yellow'.split(', ');
var joinedColors = newColors.join(' and '); // 'blue and orange and yellow'






