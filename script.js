const accessKey="XKb-f1TCSjKPd8IRo50eHfYVPjRp-9iviOnsvrfUz7E";
const formE1=document.querySelector('form');
const inputE=document.getElementById("search-input");
const searchREsults= document.querySelector(".search-results");
const showMore=document.getElementById("btn");

let inputData="";
let page=1;

function searchImages(){
    inputData=inputE.value;
}

