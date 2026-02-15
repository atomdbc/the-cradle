// Write a JavaScript function that takes a number of minutes and converts it into seconds.

// Requirements:

// Name the function minutesToSeconds.

// It should accept one input (parameter/argument) representing the minutes.

// It should return the result (do not just console.log it inside the function).

// Expected Output:

// If I pass 5, the function should return 300.

// If I pass 3, the function should return 180.

// If I pass 2, the function should return 120.

// math behind it is that 60 sec is 1 min


function  minutesToSeconds(minutes) {
    const perMinute = 60
    return minutes * perMinute
}

console.log(minutesToSeconds(5));