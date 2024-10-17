var i=0
function checkOddEven(num){
    if(num%2==0) {
        console.log(`${num} is Even.`)
    }
    else{
        console.log(`${num} is odd.`)
    }
}
console.log("For Loop \n")
for(i;i<=10;i++)
{
    checkOddEven(i)
    if(i==7)
    {
        break;
    }
}
console.log("While Loop")
var x=0
while(x<=10)
{
    checkOddEven(x)
    x++
}
console.log("Do While Loop")
var x=0
do{
    checkOddEven(x)
    x++
}while(x<=10)

