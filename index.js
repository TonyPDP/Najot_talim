// // Exercise: 1
// let user_input = Number(prompt("Enter a day's number: "));

// if (user_input) {
//     switch (user_input) {
//         case 1:
//             alert("Monday");
//             break;
//         case 2:
//             alert("Tuesday");
//             break;
//         case 3:
//             alert("Wednesday");
//             break;
//         case 4:
//             alert("Thursday");
//             break;
//         case 5:
//             alert("Friday");
//             break;
//         case 6:
//             alert("Saturday");
//             break;
//         case 7:
//             alert("Sunday");
//             break;
//         default:
//             alert("Invalid input. Please enter a number between 1 and 7.");
//             break;
//     }
// } else {
//     alert("Invalid input. Please enter a valid number.");
// }

// // Exercise: 2
// let user_input = Number(prompt("Enter a month's number: "));

// if (user_input) {
//     switch (user_input) {
//         case 1:
//             alert("January");
//             break;
//         case 2:
//             alert("February");
//             break;
//         case 3:
//             alert("March");
//             break;
//         case 4:
//             alert("April");
//             break;
//         case 5:
//             alert("May");
//             break;
//         case 6:
//             alert("June");
//             break;
//         case 7:
//             alert("July");
//             break;
//         case 8:
//             alert("August");
//             break;
//         case 9:
//             alert("September");
//             break;
//         case 10:
//             alert("November");
//             break;
//         case 11:
//             alert("October");
//             break;
//         case 12:
//             alert("December");
//             break;
//         default:
//             alert("Invalid input. Please enter a number between 1 and 7.");
//             break;
//     }
// } else {
//     alert("Invalid input. Please enter a valid number.");
// }

// // Exercise: 3

// let ageing_test = Number(prompt("Please, Enter your age: "));

// switch (true) {
//     case (ageing_test <= 10 && ageing_test >= 0):
//         alert("You are a child.");
//         break;

//     case (ageing_test >= 18 && ageing_test < 60):
//         alert("You are a teenager.");
//         break;

//     case (ageing_test >= 60):
//         alert("Too old!");
//         break;

//     default:
//         alert("Invalid input. Please enter a valid number.");
//         break;
// }


// // Exercise: 4

// let marks = prompt(`Please, Enter your marks: 'eg. A, B, C'`);

// if (marks){
//     switch (marks) {
//         case ("A"):
//             alert("Excellent");
//             break;
//         case ("B"):
//             alert("Good");
//         case ("C"):
//             alert("Qoniqarli");
//             break;
//         default:
//             alert("Invalid input. Please enter a valid mark.");
//             break;
//     }
// }


// // Exercise: 5

// let traffic_light = prompt(`Please, Enter the color of the traffic light: 'eg. Red, Yellow, Green'`);
// if (traffic_light){
//     switch (traffic_light) {
//         case ("Red"):
//             console.log("Stop");
//             break;
//         case ("Yellow"):
//             console.log("Ready");
//             break;
//         case ("Green"):
//             console.log("Go");
//             break
//         default:
//             console.log("Invalid input. Please enter a valid color.");
//             break;
//     }
// }


// // Exercise: 6

let user_input_number_1 = Number(prompt("Enter a first number: "));
let user_input_number_2 = Number(prompt("Enter a second number: "));

let operation = prompt("Enter the operation: 'e.g., +, -, *, /'");

switch (operation) {
    case "+":
        alert(`The sum of ${user_input_number_1} and ${user_input_number_2} is ${user_input_number_1 + user_input_number_2}`);
        break;

    case "-":
        alert(`The difference of ${user_input_number_1} and ${user_input_number_2} is ${user_input_number_1 - user_input_number_2}`);
        break;

    case "*":
        alert(`The product of ${user_input_number_1} and ${user_input_number_2} is ${user_input_number_1 * user_input_number_2}`);
        break;

    case "/":
        alert(`The division of ${user_input_number_1} and ${user_input_number_2} is ${user_input_number_1 / user_input_number_2}`);
        break;

    default:
        alert("Invalid input.");
        break;
}
