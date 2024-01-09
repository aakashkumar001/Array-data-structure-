//CREATING ARRAYS

var numbers = [];
console.log(numbers.length);

var numbers = [1, 2, 3, 4, 5];

console.log(numbers.length);

var numbers = new Array(10);

console.log(numbers.length);

var numbers = 3;

var arr = [7, 4, 6, 3];

console.log(Array.isArray(numbers));
console.log(Array.isArray(arr));

//ACCESSING AND WRITING ARRAY ELEMENTS

var nums = [];

for (var i = 0; i < 10; i++) {
  nums[i] = i + 1;
}
console.log(nums);

var numbers = [1, 2, 3, 4, 5];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

//CREATING ARRAY FROM STRINGS

var sentence = "the quick brown fox jumps over the lazy dog";
var words = sentence.split(" ");

console.log(words);

for (var i = 0; i < words.length; i++) {
  console.log("word" + i + ":" + words[i]);
}

//AGGREGATE ARRAY OPERATIONS

var nums = [];

for (var i = 0; i < 10; i++) {
  nums[i] = i + 1;
}

var samenums = nums; //this is called a shallow copy.
nums[0] = 500;
console.log(samenums[0]);

//the following code create a deep copy of an array.

function copy(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
  }
}

var nums = [];

for (var i = 0; i < 10; i++) {
  nums[i] = i + 1;
}

var samenums = [];

copy(nums, samenums);

nums[0] = 200;
console.log(nums[0]);
console.log(samenums[0]);

//ACCESOSOR FUNCTION

//searching for a value

var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer", "David"];
var namee = "David";
var position_first = names.indexOf(namee);
var position_last = names.lastIndexOf(namee);
console.log("Found " + namee + " at position " + position_first);
console.log("Found " + namee + " at position " + position_last);

//STRING REPRESENTATION OF ARRAYS

var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var nameStr = names.join();
console.log(nameStr);
nameStr = names.toString();
console.log(nameStr);

//CREATING NEA ARRAYS FROM EXISTING ARRAYS

var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cisDept.concat(dmpDept);
console.log(itDiv);

var itDiv = [
  "Mike",
  "Clayton",
  "Terrill",
  "Raymond",
  "Cynthia",
  "Danny",
  "Jennifer",
];
var dmpDept = itDiv.splice(3, 3);
var cisDept = itDiv;

console.log(dmpDept);
console.log(cisDept);

//MUTATOR FUNCTIONS

//adding elements to an array

var nums = [1, 2, 4, 5, 6];
var pushed_elem = nums.push(6);
console.log(pushed_elem);
console.log(nums);

// using push() is more intuitive than using th length property to extend an array.

var nums = [1, 2, 3, 4, 5];
nums[nums.length] = 6;
nums.unshift(10);
console.log(nums);

//removing elements from an array.

var nums = [1, 2, 3, 4, 6];
nums.pop();
nums.shift();
console.log(nums);

//ADDING AND REMOVING ELEMENT FROM THE MIDDLE OF AN ARRAY

var nums = [1, 3, 5, 6, 7];
var new_elem = [8, 9, 2];

nums.splice(2, 0, new_elem);
console.log(nums.flat());

//PUTTING ARRAY ELEMENTS IN ORDER

var numbers = [1, 2, 3, 5, 6];
numbers.reverse();

console.log(numbers);

console.log(numbers.sort());

var names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"];
console.log(names.sort());

function compare(nums1, nums2) {
  return nums1 - nums2;
}

var nums = [3, 5, 8, 2, 97, 0, 77, 78];
console.log(nums.sort(compare));

//ITERATOR FUNCTIONS

//non - array generating iterator functions

function square(num) {
  console.log(num, num*num);
}

var nums = [1,2,3,4,6,7,8,9];
nums.forEach(square);
console.log(nums);



function isEven(num) {
  return num % 2 == 0;
}

var nums = [2,4,6,7,9,3];
var even = nums.every(isEven);

if(even){
  console.log("all nums are even");
}else{
 console.log("not all nums are even");
}


even = nums.some(isEven);
if(even){
  console.log("some nums are even");
}else{
 console.log("no nums are even");
}


function add(runningTotal, currentValue) {
  return runningTotal + currentValue;
  }
  var nums = [1,2,3,4,5,6,7,8,9,10];
  var sum = nums.reduce(add);
  console.log(sum);

  function concat(accumString, item){
    return accumString + item;
    }

    var words = ['the', 'quick','brown','fox'];
    var sentence = words.reduce(concat);
    console.log(sentence);
    var sentence = words.reduceRight(concat);
    console.log(sentence);

//ITERATORS FUNCTION THAT RETURN A NEW ARRAY

function curve(grade){
  return grade += 5;
}

var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
console.log(newgrades); 

function first(word){
  return word[0];
}
var words = ["for","your","information"];
var acroynm = words.map(first);
console.log(acroynm);
console.log(acroynm.toString());


function isEvenNum(num) {
   return num % 2 == 0;
}

function isOddNum(num){
 return num % 2 !== 0;
}

var nums = [];

for(var i = 0; i < 20; i++){
  nums[i] = i + 1;
}

var evens = nums.filter(isEvenNum);
console.log("Even Numbers"+" "+ evens);

var odds = nums.filter(isOddNum);
console.log("Odd Numbers"+ " " +odds);


//Two-Dimensional and Multidimensional Arrays


// Creating Two-Dimensional Arrays

var twod = [];
var rows = 5;

for(var i = 0; i< rows; i++){
   twod[i] = [];
}

console.log(twod);

Array.matrix = function(numrows,numcols,initial){
    var arr = [];

    for(var i = 0; i < numrows; i++){
       var columns = [];

       for(var j = 0; j < numcols; j++){
         columns[j] = initial;
      }

      arr[i] = columns;
    }

    return arr;
}


var nums = Array.matrix(5,5,0);
console.log(nums);

var names = Array.matrix(3,3,"");
console.log(names);
names[1][2] = "flash";
console.log(names);
console.log(names[1][2]);

// We can also create a two-dimensional array and initialize it to a set of values in one line:
// For small data sets, this is the easiest way to create a two-dimensional array.

 var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
console.log(grades[1][2]);



//  Processing Two-Dimensional Array Elements

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];

var total = 0;
var avg = 0.0;

for(var row = 0; row < grades.length; row++){
   for(var col = 0; col < grades[row].length; col++){
     total += grades[row][col];
  }
  avg = total / grades[row].length;
  console.log("student  " + parseInt(row+1) + " :  average" + avg.toFixed(2));

  total = 0;
  avg = 0.0;
}





var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var avg = 0.0;
for (var col = 0; col < grades.length; ++col) {
for (var row = 0; row < grades[col].length; ++row) {
total += grades[row][col];
}
avg = total / grades[col].length;
console.log("Test " + parseInt(col+1) + " average: " +
avg.toFixed(2));
total = 0;
avg = 0.0;
}


// Jagged Arrays