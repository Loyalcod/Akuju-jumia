// console.log('am fine')

let onSell = document.querySelector('.onsell');
let x = 0;

function underline(){
    if(x = 0){
        onSell.className = 'onsell';
        x = 1;
    } else{
        onSell.className += ' active';
        x = 0;
    }
}
function underLineOut(){
    if(x = 0){
        onSell.className = 'onsell';
        x = 1;
    } else{
        onSell.className = 'onsell';
        x = 0;
    }
}


let colorPayOne = document.querySelector('.underlinepayOne');
function colorPay(){
    if(x = 0){
        colorPayOne.className = 'underlinepayOne';
        // console.log(colorPayOne.className);
        x = 1;
    } else{
        colorPayOne.className += ' active';
        x = 0;
    } 
}

function colorOut(){
    if(x = 0){
        colorPayOne.className = 'underlinepayOne';
        x = 1;
    } else{
        colorPayOne.className = 'underlinepayOne';
        x = 0;
    }
}

let colorPayOne1 = document.querySelector('.underlinepayOne1');
// console.log(colorPayOne1);
function colorPay1(){
    if(x = 0){
        colorPayOne1.className = 'underlinepayOne1';
        // console.log(colorPayOne.className);
        x = 1;
    } else{
        colorPayOne1.className += ' active';
        x = 0;
    } 
}

function colorOut1(){
    if(x = 0){
        colorPayOne1.className = 'underlinepayOne1';
        x = 1;
    } else{
        colorPayOne1.className = 'underlinepayOne1';
        x = 0;
    }
}


let colorPayOne2 = document.querySelector('.underlinepayOne2');
function colorPay2(){
    if(x = 0){
        colorPayOne2.className = 'underlinepayOne2';
        // console.log(colorPayOne.className);
        x = 1;
    } else{
        colorPayOne2.className += ' active';
        x = 0;
    } 
}

function colorOut2(){
    if(x = 0){
        colorPayOne2.className = 'underlinepayOne2';
        x = 1;
    } else{
        colorPayOne2.className = 'underlinepayOne2';
        x = 0;
    }
}


let colorPayOne3 = document.querySelector('.underlinepayOne3');
function colorPay3(){
    if(x = 0){
        colorPayOne3.className = 'underlinepayOne3';
        // console.log(colorPayOne.className);
        x = 1;
    } else{
        colorPayOne3.className += ' active';
        x = 0;
    } 
}

function colorOut3(){
    if(x = 0){
        colorPayOne3.className = 'underlinepayOne3';
        x = 1;
    } else{
        colorPayOne3.className = 'underlinepayOne3';
        x = 0;
    }
}

let absoOne = document.querySelector('.absoone');
function openHelp(){
    // alert('open')
//    absoOne.style.display="flex";
if(absoOne.style.display == "none"){
    absoOne.style.display = "flex";
    absoTwoon.style.display = "none";
    x = 1;
} else {
    absoOne.style.display = "none";
    x = 0;
}
   
};

let absoTwoon = document.querySelector('.absotwoon');
function openLogin(){
    if(absoTwoon.style.display == "none"){
        absoTwoon.style.display = "flex";
        absoOne.style.display = "none";
        x = 1;
    } else {
        absoTwoon.style.display = "none";
        x = 0;
    }
};
{/* <span class="iconify" data-icon="mdi-light:cancel" data-inline="false"></span> */}

let pic=[
    {imgLink:'../image/NG_NSF_LIVE_BSB_WANT_CHEAPER.jpg', buttonLink:"good"},
    {imgLink:'../image/NG_NSF_LIVE_BSB_PRIME.gif', buttonLink:"good"}
    
]

let wallAdvert = document.querySelector('.walladvert');
let wallAdvertString = "";
for(x in pic){
    // console.log(x);
    wallAdvertString += `
    <div class="walladvertone">
    <img src="${pic[x].imgLink}" class="walladvertpic">
    </div>
    `
}

wallAdvert.innerHTML = wallAdvertString;

// this for the jumia global
let globalMaterial = [
    {imglink:"./image/JumiaGlobal-(1).png", name:"Jumia Global"},
    {imglink:"./image/official-stores.png", name:"Official Stores"},
    {imglink:"./image/jumia-food.png", name:"Jumia Food"},
    {imglink:"./image/jumia-pay.png", name:"Borrow Money"}
]

let jumiaGlob = document.querySelector('.jumiaglob');
for(x in globalMaterial){
    jumiaGlob.innerHTML += `
    <div class="mainglob">
    <img src="${globalMaterial[x].imglink}" class="globimg">
    <p class="globp">${globalMaterial[x].name}</p>
</div>    
    `
}
// this the end of jumia global





