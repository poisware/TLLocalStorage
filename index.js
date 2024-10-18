const numberColor = document.getElementById("")
function makeGray()
{
    numberColor.style.color = "gray";
}
function makeGreen()
{
    numberColor.style.color = "green";
}
function makePurple()
{
    numberColor.style.color = "purple";
}
var numberValue = 0;
function minusOne()
{
    numberValue = document.getElementById("currNumber").innerHTML = numberValue-1;
}
function plusOne()
{
    numberValue = document.getElementById("currNumber").innerHTML = numberValue+1;
}
function save()
{
    var savedValues = [];
    savedValues.push(numberValue);
    var old = JSON.stringify(savedValues.get(savedValues.length()));
    JSON.parse(old);
}