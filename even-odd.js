// node even-odd.js \\

// const number = 10;
// const remainder = number % 2;
// console.log(remainder == 0,"It's a even number.");

/////////////////Even\\\\\\\\\\\\\\\\\

console.log('');
console.log('>>>>>>>>>>>Even>>>>>>>>>>>');
console.log('');

function evenodd(number)
{
    if(number % 2 == 0)
    {
        return true;
    }
    return false;
}


const mynum = 234;
const ismynum = evenodd(mynum);
console.log("Is my number even?",ismynum);

const hernum = 1231;
const ishernum = evenodd(hernum);
console.log("Is her number even?",ishernum);

const hisnum = 503;
const ishisnum = evenodd(hisnum);
console.log("Is his number even?",ishisnum);

/////////////////Odd\\\\\\\\\\\\\\\\\

// console.log('');
// console.log('>>>>>>>>>>>Odd>>>>>>>>>>>');
// console.log('');

// function evenodd(number)
// {
//     if(number % 2 != 0)
//     {
//         return true;
//     }
//     return false;
// }


// const omynum = 234;
// const oismynum = evenodd(omynum);
// console.log("Is my number odd?",oismynum);

// const ohernum = 1231;
// const oishernum = evenodd(ohernum);
// console.log("Is her number odd?",oishernum);

// const ohisnum = 503;
// const oishisnum = evenodd(ohisnum);
// console.log("Is his number odd?",oishisnum);