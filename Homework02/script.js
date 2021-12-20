
let year = prompt ("Enter Your Birth Year!");

let parsedYear = parseInt(year);

console.log(parsedYear);

    if (!Number.isNaN(parsedYear));

    if (year >= 1900 && year <= 2100 && (year - 4) % 12 === 0) {
        alert("Your are a Rat");

    } else if (year >= 1900 && year <= 2100 && (year - 4) % 12 === 1) {
        alert("You are an Ox");

    } else if (year >= 1900 && year <= 2100 && (year - 4) % 12 === 2) {
        alert("You are a Tiger"); 

    } else if (year >= 1900 && year <= 2100 && (year - 4) % 12 === 3) {
        alert("You are a Rabbit");

    } else if (year >= 1900 && year <= 2100 && (year - 4) % 12 === 4) {
        alert("You are a Dragon");

    } else if (year >= 1900 && year <= 2100 && (year - 4) % 12 === 5) {
        alert("You are a Snake");

    } else if (year >= 1900 && year <= 2100 && (year - 4) % 12 === 6) {
        alert("You are a Horse");

    } else if (year >= 1900 && year <= 2100 && (year - 4) % 12 === 7) {
        alert("You are a Goat");

    } else if (year >= 1900 && year <= 2100 && (year - 4) % 12 === 8) {
        alert("You are a Monkey");

    } else if (year >= 1900 && year <= 2100 && (year - 4) % 12 === 9) {
        alert("You are a Rooster");

    } else if (year >= 1900 && year <= 2100 && (year - 4) % 12 === 10) {
        alert("You are a Dog");

    } else if (year >= 1900 && year <= 2100 && (year - 4) % 12 === 11) {
        alert("You are a Pig");

    } else {
        alert ("Your Input is not Valid");
    }           
