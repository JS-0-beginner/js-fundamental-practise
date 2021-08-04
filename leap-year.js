
function leapYear(year)
{
    if 
    //(year%4==0)
    ((year%4==0 && year%100!=0) ||  year%400==0)
    {
        return true;
    }
    return false;
}

year = 2300;
var lyear = leapYear(year);
console.log('Is this a leapyear? - ',lyear);