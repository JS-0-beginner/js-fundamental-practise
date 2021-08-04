function converter(inches)
{
    var feet = inches /12;
    return feet;
}

var maria = 54;
var feet = converter(maria);
console.log("Maria's Height :",feet,'ft');

var faria = 60;
var feet = converter(faria);
console.log("Faria's Height :",feet,'ft');

var sadia = 66;
var feet = converter(sadia);
console.log("Sadia's Height :",feet,'ft');

