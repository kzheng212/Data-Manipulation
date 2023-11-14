/* 
=======================================================
    ALAB 308.1.1: Data Manipulation with JavaScript
=======================================================
*/

/* 
=======================================================
                        Links
=======================================================
*/

// Assignment Lab Link
// https://www.canva.com/design/DAFxiNus6dk/N170Fss8bc8VJb6iPbpuxg/view

// Link for Copy Template
// https://codesandbox.io/s/alab-308-1-1-activity-one-example-yhd2x8?from-embed

/* 
=======================================================
                CodePen Copy Template
=======================================================
*/

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

// Beginning of my work

/* 
=======================================================
                Part 1: Math Problems
=======================================================
*/

// Using the variables from before

/* 

    Check one: Check if all numbers are divisible by 5. 
    Cache the result in a variable. This is a fairly 
    simple operation using modulus operator on each 
    const and summing all of the results .

*/

const isDiv5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log(isDiv5);

/* 

    Check two: Check if the first number is larger than 
    the last. Cache the result in a variable.This is a 
    fairly simple operation using comparison operators. 

*/

const is1stNumMoreThanNthNum = n1 > n4;
console.log(is1stNumMoreThanNthNum);

/* 

    Check three: Accomplish the following arithmetic chain:
        - Subtract the first number from the second number.
        - Multiply the result by the third number.
        - Find the remainder of dividing the result by the 
          fourth number. 

*/

const formula = ((n2 - n1) * n3) % n4;
console.log(formula);

/* 

    Check four: Another way of calculating isOver25 w/o NOT
    operator (!) :
        - Change the way that isOver25 calculates so that 
          we do not need to use the NOT operator (!) in 
          other logic comparisons. 
        - Rename the variable as appropriate.

*/

// const isOver25Ver2 = n1 / 25 > 1 || n2 / 25 > 1 || n3 / 25 > 1 || n4 / 25 > 1;
// console.log(isOver25Ver2);

const isEqualOrLess25 = n1 <= 25 || n2 <= 25 || n3 <= 25 || n4 <= 25;
console.log(isEqualOrLess25);

//
const isValidV2 = isSum50 && isTwoOdd && isEqualOrLess25 && isUnique;

// Finally, log the results.
console.log(isValid);

/* 
=======================================================
                Part 2: Practical Math
=======================================================
*/

// Using the variables from before

/* 

    Check one: Fuel Efficiency Algorithm
        - Must reach total distance: 1500 miles
        - Must respect fuel budget: $175
        - Must respect avg cost per fuel: $3 / gallon
        - Must respect fuel efficiency conditions:
            - At 55 miles per hour, you get 30 miles per gallon.
            - At 60 miles per hour, you get 28 miles per gallon.
            - At 75 miles per hour, you get 23 miles per gallon.
*/

// Setting Up Global Variables
const totalDist = 1500;
const budget = 175;
const fuelCost = 3;
// # mph - Miles Per Hour - Speed
const speed55Mph = 55;
const speed60Mph = 60;
const speed75Mph = 75;
// # mpg - Miles Per Gallon - Fuel Economy
const fuelEco30Mpg = 30;
const fuelEco28Mpg = 28;
const fuelEco23Mpg = 23;

// ------------------------------------------------------------------
// Check "Total Travel Time"
// "Total Time" = "Total Distance" / "Speed"
// Where "Speed" is in MPH
// ------------------------------------------------------------------
//  - Check "Total Travel Time" of 55 MPH Trip
//      - "Total Travel Time" ~= 27.27 hrs
const totalTripTime55MPH = totalDist / speed55Mph;
console.log("Total Time of a 55 MPH Trip:", totalTripTime55MPH);

//  - Check "Total Travel Time" of 60 MPH Trip
//      - "Total Travel Time" = 25 hrs
const totalTripTime60MPH = totalDist / speed60Mph;
console.log("Total Time of a 60 MPH Trip:", totalTripTime60MPH);

//  - Check "Total Travel Time" of 75 MPH Trip
//      - "Total Travel Time" ~= 20 hrs
const totalTripTime75MPH = totalDist / speed75Mph;
console.log("Total Time of a 75 MPH Trip:", totalTripTime75MPH);

// ------------------------------------------------------------------
// Check "Total Trip Fuel"
// "Total Trip Fuel" = "Total Distance" / "Fuel Eco"
// Where "Fuel Eco" is in "MPG"
// ------------------------------------------------------------------
//  - Check "Total Trip Fuel" of 55 MPH Trip having a "30 MPG Fuel Eco"
//      - "Total Travel Fuel" = 50
const totalTripFuel30MPG = totalDist / fuelEco30Mpg;
console.log("Total Gallons of a 55 MPH Trip:", totalTripFuel30MPG);

//  - Check "Total Trip Fuel" of of 60 MPH Trip having a "28 MPG Fuel Eco"
//      - "Total Travel Fuel" ~= 53.57
const totalTripFuel28MPG = totalDist / fuelEco28Mpg;
console.log("Total Gallons of a 60 MPH Trip:", totalTripFuel28MPG);

//  - Check "Total Trip Fuel" of of 75 MPH Trip having a "23 MPG Fuel Eco"
//      - "Total Travel Fuel" ~= 65.22
const totalTripFuel23MPG = totalDist / fuelEco23Mpg;
console.log("Total Gallons of a 75 MPH Trip:", totalTripFuel23MPG);

// ------------------------------------------------------------------
// Check Trip's Cost
// "Trip's Cost" = "# of Gallons" * "$3 Per Gallon"
// ------------------------------------------------------------------
//  - Check Cost of "55 MPH Trip having a 30 MPG Fuel Eco"
//      - $150
const tripCost30MPG = 3 * totalTripFuel30MPG;
console.log("Cost of 55 MPH Trip:", tripCost30MPG);
//  - Check Cost of "60 MPH Trip having a 28 MPG Fuel Eco"
//      - $160.71
const tripCost28MPG = 3 * totalTripFuel28MPG;
console.log("Cost of 60 MPH Trip:", tripCost28MPG);
//  - Check Cost of "75 MPH Trip having a 23 MPG Fuel Eco"
//      - $195.65
const tripCost23MPG = 3 * totalTripFuel23MPG;
console.log("Cost of 75 MPH Trip:", tripCost23MPG);

// ------------------------------------------------------------------
// Check if Trip is Affordable
// "Is Trip Affordable" - "# of Gallons" * "$3 Per Gallon" <= "budget"
// Results is either true or false depending if the cost of the trip
// based on the respective mpg is "less than or equal" or "greater than"
// to budget
// ------------------------------------------------------------------
//  - Check Cost of "55 MPH Trip having a 30 MPG Fuel Eco" is Affordable
//      - True
const isTripAffordable30MPG = 3 * totalTripFuel30MPG <= budget;
console.log("Is 55 MPH Trip Affordable?:", isTripAffordable30MPG);

//  - Check Cost of "60 MPH Trip having a 28 MPG Fuel Eco" is Affordable
//      - True
const isTripAffordable28MPG = 3 * totalTripFuel28MPG <= budget;
console.log("Is 60 MPH Trip Affordable?:", isTripAffordable28MPG);

//  - Check Cost of "75 MPH Trip having a 23 MPG Fuel Eco" is Affordable
//      - False
const isTripAffordable23MPG = 3 * totalTripFuel23MPG <= budget;
console.log("Is 75 MPH Trip Affordable?:", isTripAffordable23MPG);

// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?

console.log(
  "\nQuestion: \n\nCompare the results when traveling at an average of 55, 60, and 75 miles per hour. \n\nWhich makes the most sense for the trip?"
);
// In-Depth Answer:
console.log("\nAnswer: ");
console.log(
  "\nThe 75 MPH Trip is not worth it financially! \n\nThis means that only the 55 MPH and 60 MPH are worth it because it meets budget criteria! \n\nThe 55 MPH Trip is cheaper than 60 MPH Trip by $10.71. \n\nOn the other hand, the 60 MPH is a better time saver by 2.27 hours."
);
// It is not worth it
// Only the 30 MPG & 28 MPG are worth it
// ------------------------------------------------------------------

// Below Not Covered in this Specific Assignment Link - So for next time

/* 
=======================================================
                Part 3: Future Exploration
=======================================================
*/
