// alert(`🎉 Welcome to the Number Guesser Game! 🎉`);
// alert(`
// 📜 Rules:
// 1. Objective: Guess the secret number chosen by the system.
// 2. Range: The secret number is between 1 and 100.
// 3. Levels: 
//    - Level 1: 10 lives
//    - Level 2: 7 lives
//    - Level 3: 3 lives
// 4. Feedback: 
//    - "Too High" or "Too Low" after each guess.
//    - If you guess correctly, you win! 🎯
// 5. Challenge: The range narrows down as you play!

// 🎯 Good luck and have fun!
// `);

// let lives = 0;
// let game_is_on = true;

// // Generate a random integer between 1 and 100
// const randomInteger = Math.floor(Math.random() * 100) + 1;

// let lowerBound = 1;
// let upperBound = 100;

// let user_input = Number(prompt("🎮 Choose a difficulty level (1, 2, or 3):"));

// switch (user_input) {
//     case 1:
//         alert("🎯 Level 1 Selected: You have 10 lives. Good luck!");
//         lives = 10;
//         break;
//     case 2:
//         alert("🔥 Level 2 Selected: You have 7 lives. Stay sharp!");
//         lives = 7;
//         break;
//     case 3:
//         alert("💀 Level 3 Selected: You have only 3 lives. Brace yourself!");
//         lives = 3;
//         break;
//     default:
//         alert("Invalid choice! Defaulting to Level 1 with 10 lives.");
//         lives = 10;
//         break;
// }

// while (game_is_on) {
//     let user_guess = Number(prompt(`🔢 Enter your guess! The number is between ${lowerBound} and ${upperBound}.\nLives remaining: ${lives}`));

//     if (user_guess === randomInteger) {
//         alert(`🎉 Congratulations! You guessed the number ${randomInteger} correctly with ${lives} lives remaining! 🎊`);
//         game_is_on = false;
//     } else if (user_guess > randomInteger) {
//         upperBound = user_guess - 1;
//         alert(`📉 Too High! Try a number between ${lowerBound} and ${upperBound}. Lives remaining: ${lives}`);
//     } else if (user_guess < randomInteger) {
//         lowerBound = user_guess + 1;
//         alert(`📈 Too Low! Try a number between ${lowerBound} and ${upperBound}. Lives remaining: ${lives}`);
//     }

//     lives--;

//     if (lives === 0) {
//         alert(`💀 Game Over! You ran out of lives. The correct number was ${randomInteger}. Better luck next time!`);
//         game_is_on = false;
//     }
// }

// 1 problem
// nums = [1, 3, 5];
// let total = 0
// for (let i = 0; i < nums.length; i++){
//     total += nums[i]
// }
// console.log(total);

// 2 problem
nums = [1, 2, 3, 4, 5, 6];
evenCount = 0;

for(let i = 0; i < nums.length; i++){
    if (nums[i] % 2 == 0){
        evenCount += nums[i]
    } 
}
console.log(evenCount);

// 3 problem



















