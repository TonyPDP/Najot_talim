// for (let i = 1; i <= 25; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`FizzBuzz ${i}`);
//     } else if (i % 3 === 0) {
//         console.log(`Fizz ${i}`);
//     } else if (i % 5 === 0) {
//         console.log(`Buzz ${i}`);
//     }
// }

// let a = prompt("First number")

// console.log(`${a[1]}${a[0]}`);




// let num = 3456;


// let num_4 = num % 10; 
// let end = parseInt(num / 10); 
// let third_num = end % 10; 
// end = parseInt(end / 10); 
// let second_num = end % 10; 
// let first_num = parseInt(end / 10); 

// let reversed_num = (num_4 * 1000) + (third_num * 100) + (second_num * 10) + first_num;

// console.log("Original Number:", num);
// console.log("Reversed Number:", reversed_num);
// console.log("First Digit:", first_num);
// console.log("Second Digit:", second_num);
// console.log("Third Digit:", third_num);
// console.log("Fourth Digit:", num_4);


let isStart = true;
let beshbarmoq = 320000
let osh = 25000
let manti = 8000
let = 320000

while (isStart) {
    let selectedMenu = null;
    let portion = null;

    const menu = {
        meals: {
            Burger: 10,
            Pizza: 12,
            Pasta: 8,
        },
        drinks: {
            Water: 1,
            Soda: 2,
            Juice: 3,
        },
    };



    selectedMenu = +prompt("Menuni tanglang")

    switch (selectedMenu) {
        case 0: {
            isStart = false
            break;
        }
        case 1: {
            portion = +prompt("nechta beshbarmoq olasiz")
            console.log(`
        siz ${portion} ta beshbarmoq tanladingiz
        siz ${portion * 320000} so'm to'lov qilishingiz kerak
        `);

            break;
        }
        case 2: {
            portion = +prompt("nechta osh olasiz")
            console.log(`
        siz ${portion} ta osh tanladingiz
        siz ${portion * 250000} so'm to'lov qilishingiz kerak
        `);
            break;
        }
        case 3: {
            portion = +prompt("nechta beshbarmoq olasiz")
            console.log(`
        siz ${portion} ta manti tanladingiz
        siz ${portion * 8000} so'm to'lov qilishingiz kerak
        `);
            break;
        }
        case 4: {
            portion = +prompt("nechta beshbarmoq olasiz")
            console.log(`
        siz ${portion} ta lag'mon tanladingiz
        siz ${portion * 40000} so'm to'lov qilishingiz kerak
        `);
            break;
        }
        case 5: {

            break;
        }
    }
}

console.log("Tashrifingiz uchun rahmat");






