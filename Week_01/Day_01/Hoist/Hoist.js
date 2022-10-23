// 1
console.log(hello); // reference error on hello because its initialized after the console log
var hello = 'world'; // initializing the hello variable

// 2
var needle = 'haystack'; // initializing needle variable
test(); // runs the test function which console logs 'magnet'
function test(){ // initializing test function
    var needle = 'magnet'; // initializing needle variable
    console.log(needle); // console logs needle variable
}

// 3
var brendan = 'super cool'; // initializing brendan variable
function print(){ // initializing print function
    brendan = 'only okay'; // assigning brendan variable to 'only okay' inside the scope of the function
    console.log(brendan); // console logging brendan variable
}
console.log(brendan); // console logs 'super cool' since it never changed outside the scope of the function

// 4
var food = 'chicken'; // initializing food variable
console.log(food); // console logs 'chicken'
eat(); // calling eat function which console logs'half-chicken'
function eat(){ // initializing eat function
    food = 'half-chicken'; // reassigning food to 'half-chicken' in the scope of the function
    console.log(food); // console logs food variable
    var food = 'gone'; // sets food variable to 'gone' inside the scope of the function
}

// 5
mean(); // error mean function does not exist since mean is equal to a variable that holds a value of a function
console.log(food); // reference error since food only lives inside the scope of the function
var mean = function() { // initializing the variable mean with the value of the function call
    food = "chicken"; // sets variable food to 'chicken'
    console.log(food); // console logs 'chicken'
    var food = "fish"; // sets variable food to 'fish'
    console.log(food); // console logs 'fish'
}
console.log(food); // reference error since food only lives inside the scope of the function

// 6
console.log(genre); // console logs undefinded since genre has not been declared yet 
var genre = "disco"; // setting variable genre to 'disco'
rewind(); // calls rewind function which console logs 'rock' and then 'r&b'
function rewind() { // initializing rewind function that console logs 'rock' then 'r&b'
    genre = "rock"; // setting genre variable to 'rock'
    console.log(genre); // console logging 'rock'
    var genre = "r&b"; // setting genre variable to 'r&b'
    console.log(genre); // console logging 'r&b'
}
console.log(genre); // console logs 'disco' since it never changes outside the scope of the function

// 7
dojo = "san jose"; // setting variable dojo to 'san jose'
console.log(dojo); // console logs 'san jose'
learn(); // calling learn function which console logs 'seattle'  and 'burbank'
function learn() { // initializing learn function that console logs 'seattle' and then 'burbank'
    dojo = "seattle"; // setting variable dojo to 'seattle'
    console.log(dojo); // console logging 'seattle'
    var dojo = "burbank"; // setting variable dojo to 'burbank'
    console.log(dojo); // console logging 'burbank'
}
console.log(dojo); // console logging 'san jose'

// 8
console.log(makeDojo("Chicago", 65)); // console logs the object with the name key as 'Chicago', the students key as '65' and the hiring key as true;
console.log(makeDojo("Berkeley", 0)); // cannot reassign the value of a const
function makeDojo(name, students){ // initializing makeDojo function which returns the object with its data or a string saying 'closed for now' depending on the amount of students.
    const dojo = {}; // creating an object
    dojo.name = name; // assigning new key to object called name with the value of name that was passed into the function
    dojo.students = students; // assigning new key to object called students with the value of students that was passed into the function
    if(dojo.students > 50){ // checking if the value of students key is greater than 50
        dojo.hiring = true; // if students are greater than 50 set a new key of 'hiring' to the value of true
    }
    else if(dojo.students <= 0){ // else check if students is less than or equal to 0
        dojo = "closed for now"; //  if students value is less than or equal to 0 set dojo object to equal string 'closed for now'
    }
    return dojo; // return the value of dojo variable
}
