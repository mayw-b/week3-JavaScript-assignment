//Question 1
let num = '45';
Number(num);
console.log(num);

//Question 2
//Print the sun
const printSum = parseInt("20") + 40;
console.log(printSum);

//String concatenation
const sentence = "I am " + (23 + 4) + " years old";
console.log(sentence);

//Question 3
const myValue = "May"; // Declare the variable with the correct name.
myValue = 86; // Assign a value to myValue (assuming you want to change its value).
console.log(myValue);


//Question 4
const firstName = 'Susan';
const lastName = 'Ochieng';
const guruCodingCourse = 'JavaScript';
const testScore = 'A';

 
//Question 5
const testScoreIs = 80;

switch (true) {
    case testScoreIs < 30:
        console.log('Failed');
        break;
    case testScoreIs >= 31 && testScoreIs <= 40:
        console.log('E');
        break;
    case testScoreIs >= 41 && testScoreIs <= 49:
        console.log('D');
        break;
    case testScoreIs >= 50 && testScoreIs <= 59:
        console.log('C');
        break;
    case testScoreIs >= 60 && testScoreIs <= 69:
        console.log('B');
        break;
    case testScoreIs >= 70:
        console.log('A');
        break;
    default:
        console.log('Out of range');
        break;
}


//Question 6
//A program that counts from 1 to 20
// Initialize a variable 'count' to 0.
let count = 0;

// Start a 'for' loop. This loop will continue as long as 'count' is less than or equal to 20.
for (; count <= 20;) {
    // Inside the loop, print the current value of 'count' to the console.
    console.log(count);

    // Increment the 'count' variable by 1 in each iteration.
    count++;
}