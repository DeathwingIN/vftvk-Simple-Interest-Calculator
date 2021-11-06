function simple_interest()
{

var a,t,r,si,ny;
a = document.getElementById ("amount").value;
t = document.getElementById ("time").value;
r = document.getElementById ("rate").value;
si = ((a*r*t)/100);
const d = new Date();
let year = d.getFullYear();
ny = (t+year);
document.getElementById ('lamount').innerHTML ="If You Deposit";
document.getElementById ('amountl1').innerHTML =+a;
document.getElementById ('lrate').innerHTML ="At an Interest Rate of";
document.getElementById ('ratel').innerHTML =+r;
document.getElementById ('linterst').innerHTML ="You will Recive an Amount of";
document.getElementById ('interstl').innerHTML =+si;
document.getElementById ('lyear').innerHTML ="In the Year";
document.getElementById ('yearl').innerHTML =+ny;
}