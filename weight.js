let grams = document.getElementById("grams");
let pound = document.getElementById("pound");
let ounce = document.getElementById("ounce");
let stones = document.getElementById("stones");

grams.addEventListener("input",(e)=>{
    let val = e.target.value;
    pound.value = val*0.0022046;
    ounce.value = val*0.035274;
    stones.value = val*0.00015747;
});

pound.addEventListener("input",(e)=>{
    let val = e.target.value;
    grams.value = val/0.0022046;
    ounce.value = val*16;
    stones.value = val*0.071429;
});

ounce.addEventListener("input",(e)=>{
    let val = e.target.value;
    pound.value = val*0.0625;
    grams.value = val/0.035274;
    stones.value = val*0.0044643;
});

stones.addEventListener("input",(e)=>{
    let val = e.target.value;
    pound.value = val*14;
    ounce.value = val*224;
    grams.value = val/0.00015747;
});