// gombok beszerzese
const egyGomb = document.getElementById("1");
const kettoGomb = document.getElementById("2");
const haromGomb = document.getElementById("3");
const negyGomb = document.getElementById("4");
const otGomb = document.getElementById("5");
const hatGomb = document.getElementById("6");
const hetGomb = document.getElementById("7");
const nyolcGomb = document.getElementById("8");
const kilencGomb = document.getElementById("9");
const nullaGomb = document.getElementById("0");

const reset = document.getElementById("ac");

const szorzas = document.getElementById("*");
const osztas = document.getElementById("/");
const osszeadas = document.getElementById("+");
const kivonas = document.getElementById("-");

const szamolas = document.getElementById("=");

const kiirofelulet = document.getElementById("szoveg");

tomb = [];
let hibaVanEakijelzon = false;

function kiiratas(ertek)
{
    if (hibaVanEakijelzon)
    {
        return;
    }
    else
    {
        kiirofelulet.textContent += ertek;
    }
}

egyGomb.addEventListener("click", function(){
    kiiratas("1");
});
kettoGomb.addEventListener("click", function(){
    kiiratas("2");
});
haromGomb.addEventListener("click", function(){
    kiiratas("3");
});
negyGomb.addEventListener("click", function(){
    kiiratas("4");
});
otGomb.addEventListener("click", function(){
    kiiratas("5");
});
hatGomb.addEventListener("click", function(){
    kiiratas("6");
});
hetGomb.addEventListener("click", function(){
    kiiratas("7");
});
nyolcGomb.addEventListener("click", function(){
    kiiratas("8");
});
kilencGomb.addEventListener("click", function(){
    kiiratas("9");
});
nullaGomb.addEventListener("click", function(){
    kiiratas("0");
});
szorzas.addEventListener("click", function(){
    kiiratas("*");
});
kivonas.addEventListener("click", function(){
    kiiratas("-");
});
osztas.addEventListener("click", function(){
    kiiratas("/");
});
osszeadas.addEventListener("click", function(){
    kiiratas("+");
});
reset.addEventListener("click", function(){
    kiirofelulet.textContent = "";
    hibaVanEakijelzon = false;
});

function szamolosdi()
{
    try 
    {
        const eredmeny = eval(kiirofelulet.textContent);    
        kiirofelulet.textContent = eredmeny;
    } 
    catch (SyntaxError) 
    {
        kiirofelulet.textContent = "Szintaktikai HIBA";
        hibaVanEakijelzon = true;
    }
}

szamolas.addEventListener("click", szamolosdi);

// menu pont megcsinalasa

