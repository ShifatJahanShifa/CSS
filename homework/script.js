let one=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three"); 
let redsound=document.getElementById("redsound");
let yellowsound=document.getElementById("yellowsound");
let greensound=document.getElementById("greensound");
let iteration=0;

one.onclick=function()
{
    one.classList.add("pulse");
    two.style.pointerEvents="none";
    three.style.pointerEvents="none";
    two.style.backgroundColor= "#36454F";
    three.style.backgroundColor= "#36454F";
    redsound.play();
}

one.onanimationiteration=function()
{
    iteration++;
    if(iteration===10) 
    {
        one.classList.remove("pulse");
        two.style.pointerEvents="auto";
        three.style.pointerEvents="auto";
        two.style.backgroundColor= "yellow";
        three.style.backgroundColor= "green";
    }
}

two.onclick=function()
{
    iteration=0;
    two.classList.add("pulse");
    one.style.pointerEvents="none";
    three.style.pointerEvents="none";
    one.style.backgroundColor="#36454F";
    three.style.backgroundColor="#36454F";
    yellowsound.play();
}

two.onanimationiteration=function()
{
    iteration++;
    if(iteration===10) 
    {
        two.classList.remove("pulse");
        one.style.pointerEvents="auto";
        three.style.pointerEvents="auto";
        one.style.backgroundColor= "red";
        three.style.backgroundColor= "green";
        
    }
}

three.onclick=function()
{
    iteration=0;
    three.classList.add("pulse");
    one.style.pointerEvents="none";
    two.style.pointerEvents="none";
    one.style.backgroundColor="#36454F";
    two.style.backgroundColor="#36454F";
    greensound.play();
}

three.onanimationiteration=function()
{
    iteration++;
    if(iteration===10) 
    {
        three.classList.remove("pulse");
        one.style.pointerEvents="auto";
        three.style.pointerEvents="auto";
        one.style.backgroundColor= "red";
        two.style.backgroundColor= "yellow";
    }
}