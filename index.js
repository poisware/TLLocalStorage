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
const numberValue = 0;
function minusOne()
{
    document.getElementById("currNumber").innerHTML = numberValue-1;
}
function plusOne()
{
    document.getElementById("currNumber").innerHTML = numberValue+1;
}