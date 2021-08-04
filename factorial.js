/// factorial with for loop

/*
var factorial = 1;

for (let i=1; i<=8; i++)
{
    factorial = factorial * i;
}

console.log(factorial);
*/


// factorial with for loop in function

/*

function factorial(number)
{
    var fact = 1;

for (let i=1; i<=number; i++)
{
    fact = fact * i;
}
return fact;

}

number = 5;
var fact = factorial(number);
console.log(fact);

number2 = 8;
var fact = factorial(number2);
console.log(fact);

number3 = 12;
var fact = factorial(number3);
console.log(fact);

*/

// factorial with while loop in function

/*
function factorial(number)
{
    let fact = 1;
    let i = 1;
    while(i<=number)
    {
        fact = fact * i
        i++;
    }
    return fact;
}

number = 4;
var fact = factorial(number);
console.log(fact);

*/

// factorial with decrement while loop in function

/*
function factorial(number)
{
    let fact = 1;
    let i = number;
    while(i>=1)
    {
        fact = fact * i
        i--;
    }
    return fact;
}

number = 6;
var fact = factorial(number);
console.log(fact);

*/

// factorial with decrement for loop in function
/*
function factorial(number)
{
    let fact = 1;

    for(i=number;i>=1;i--)
    {
        fact = fact * i;
    }
    return fact;
}

var fact = factorial(8);
console.log(fact);
*/

// factorial in recursive function

// factorial formula 
// n! = n * (n-1)

function factorial(n)
{
    if(n==1)
    {
        return 1;
    }
    return n * factorial(n-1);
}
 const fact = factorial(5);
 console.log(fact);