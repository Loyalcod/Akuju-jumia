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

// showing the walllinkboxhidden
let wallLinkBoxHidden = document.querySelector('.walllinkboxhidden');
// console.log(wallLinkBoxHidden);
function showWalllinkbox(){
    if(x = 0){
        wallLinkBoxHidden.className = 'walllinkboxhidden';
        x = 1;
    } else{
        wallLinkBoxHidden.className += ' active';
        x = 0
    }
}

function hidWallLinkBox(){
    if(x = 0){
        wallLinkBoxHidden.className = 'walllinkboxhidden';
        x = 1;
    } else{
        wallLinkBoxHidden.className = 'walllinkboxhidden';
        x = 0;
    }
}

let wallLinkAll =[
    {data_icon:"uit:apple-alt", name:"Supermarket", firsthead:"FOOD CUPBOARD", sub:"Grains & Rice", subone:"Pasta", subtwo:"Noodles", subthree:"Breakfast Foods", subfour:"Herbs, Spices & Seasoning", subfive:"Flours & Meals", subsix:"Malt Drinks", subseven:"Coffee", subeight:"Water", subnine:"Cooking Oil", subten:"Juices", subeleven:"Soft Drinks", subtwelve:"Canned & Packaged Foods", subthirteen:"Candy & Chocolate", subfourteen:"Syrups, Sugars & Sweeteners", onmouseover:"showWalllinkbox()", onmouseleave:"hidWallLinkBox1()"},
    {data_icon:"ri:mental-health-line", name:"Health & Beauty", firsthead:"FOOD CUPBOARD", sub:"Grains & Rice", subone:"Pasta", subtwo:"Noodles", subthree:"Breakfast Foods", subfour:"Herbs, Spices & Seasoning", subfive:"Flours & Meals", subsix:"Malt Drinks", subseven:"Coffee", subeight:"Water", subnine:"Cooking Oil", subten:"Juices", subeleven:"Soft Drinks", subtwelve:"Canned & Packaged Foods", subthirteen:"Candy & Chocolate", subfourteen:"Syrups, Sugars & Sweeteners", onmouseover:"showWalllinkbox1()", onmouseleave:"hidWallLinkBox2()"},
    {data_icon:"icomoon-free:office", name:"Home & Office", firsthead:"FOOD CUPBOARD", sub:"Grains & Rice", subone:"Pasta", subtwo:"Noodles", subthree:"Breakfast Foods", subfour:"Herbs, Spices & Seasoning", subfive:"Flours & Meals", subsix:"Malt Drinks", subseven:"Coffee", subeight:"Water", subnine:"Cooking Oil", subten:"Juices", subeleven:"Soft Drinks", subtwelve:"Canned & Packaged Foods", subthirteen:"Candy & Chocolate", subfourteen:"Syrups, Sugars & Sweeteners", onmouseover:"showWalllinkbox2()", onmouseleave:"hidWallLinkBox3()"},
    {data_icon:"et:phone", name:"Phones & Tablets", firsthead:"FOOD CUPBOARD", sub:"Grains & Rice", subone:"Pasta", subtwo:"Noodles", subthree:"Breakfast Foods", subfour:"Herbs, Spices & Seasoning", subfive:"Flours & Meals", subsix:"Malt Drinks", subseven:"Coffee", subeight:"Water", subnine:"Cooking Oil", subten:"Juices", subeleven:"Soft Drinks", subtwelve:"Canned & Packaged Foods", subthirteen:"Candy & Chocolate", subfourteen:"Syrups, Sugars & Sweeteners", onmouseover:"showWalllinkbox3()", onmouseleave:"hidWallLinkBox4()"},
    {data_icon:"clarity:computer-outline-badged", name:"Computing", firsthead:"FOOD CUPBOARD", sub:"Grains & Rice", subone:"Pasta", subtwo:"Noodles", subthree:"Breakfast Foods", subfour:"Herbs, Spices & Seasoning", subfive:"Flours & Meals", subsix:"Malt Drinks", subseven:"Coffee", subeight:"Water", subnine:"Cooking Oil", subten:"Juices", subeleven:"Soft Drinks", subtwelve:"Canned & Packaged Foods", subthirteen:"Candy & Chocolate", subfourteen:"Syrups, Sugars & Sweeteners", onmouseover:"showWalllinkbox4()", onmouseleave:"hidWallLinkBox4()"},
    {data_icon:"iconoir:electronics-transister", name:"Electronics", firsthead:"FOOD CUPBOARD", sub:"Grains & Rice", subone:"Pasta", subtwo:"Noodles", subthree:"Breakfast Foods", subfour:"Herbs, Spices & Seasoning", subfive:"Flours & Meals", subsix:"Malt Drinks", subseven:"Coffee", subeight:"Water", subnine:"Cooking Oil", subten:"Juices", subeleven:"Soft Drinks", subtwelve:"Canned & Packaged Foods", subthirteen:"Candy & Chocolate", subfourteen:"Syrups, Sugars & Sweeteners", onmouseover:"showWalllinkbox5()", onmouseleave:"hidWallLinkBox5()"},
    {data_icon:"mdi-light:diamond", name:"Fashion", firsthead:"FOOD CUPBOARD", sub:"Grains & Rice", subone:"Pasta", subtwo:"Noodles", subthree:"Breakfast Foods", subfour:"Herbs, Spices & Seasoning", subfive:"Flours & Meals", subsix:"Malt Drinks", subseven:"Coffee", subeight:"Water", subnine:"Cooking Oil", subten:"Juices", subeleven:"Soft Drinks", subtwelve:"Canned & Packaged Foods", subthirteen:"Candy & Chocolate", subfourteen:"Syrups, Sugars & Sweeteners", onmouseover:"showWalllinkbox6()", onmouseleave:"hidWallLinkBox6()"},
    {data_icon:"maki:defibrillator", name:"Baby Products", firsthead:"FOOD CUPBOARD", sub:"Grains & Rice", subone:"Pasta", subtwo:"Noodles", subthree:"Breakfast Foods", subfour:"Herbs, Spices & Seasoning", subfive:"Flours & Meals", subsix:"Malt Drinks", subseven:"Coffee", subeight:"Water", subnine:"Cooking Oil", subten:"Juices", subeleven:"Soft Drinks", subtwelve:"Canned & Packaged Foods", subthirteen:"Candy & Chocolate", subfourteen:"Syrups, Sugars & Sweeteners", onmouseover:"showWalllinkbox7()", onmouseleave:"hidWallLinkBox7()"},
    {data_icon:"ph:game-controller-thin", name:"Gaming", firsthead:"FOOD CUPBOARD", sub:"Grains & Rice", subone:"Pasta", subtwo:"Noodles", subthree:"Breakfast Foods", subfour:"Herbs, Spices & Seasoning", subfive:"Flours & Meals", subsix:"Malt Drinks", subseven:"Coffee", subeight:"Water", subnine:"Cooking Oil", subten:"Juices", subeleven:"Soft Drinks", subtwelve:"Canned & Packaged Foods", subthirteen:"Candy & Chocolate", subfourteen:"Syrups, Sugars & Sweeteners", onmouseover:"showWalllinkbox8()", onmouseleave:"hidWallLinkBox8()"},
    {data_icon:"icon-park-outline:sport", name:"Sporting Goods", firsthead:"FOOD CUPBOARD", sub:"Grains & Rice", subone:"Pasta", subtwo:"Noodles", subthree:"Breakfast Foods", subfour:"Herbs, Spices & Seasoning", subfive:"Flours & Meals", subsix:"Malt Drinks", subseven:"Coffee", subeight:"Water", subnine:"Cooking Oil", subten:"Juices", subeleven:"Soft Drinks", subtwelve:"Canned & Packaged Foods", subthirteen:"Candy & Chocolate", subfourteen:"Syrups, Sugars & Sweeteners", onmouseover:"showWalllinkbox9()", onmouseleave:"hidWallLinkBox9()"},
    {data_icon:"clarity:update-line", name:"Automobile", firsthead:"FOOD CUPBOARD", sub:"Grains & Rice", subone:"Pasta", subtwo:"Noodles", subthree:"Breakfast Foods", subfour:"Herbs, Spices & Seasoning", subfive:"Flours & Meals", subsix:"Malt Drinks", subseven:"Coffee", subeight:"Water", subnine:"Cooking Oil", subten:"Juices", subeleven:"Soft Drinks", subtwelve:"Canned & Packaged Foods", subthirteen:"Candy & Chocolate", subfourteen:"Syrups, Sugars & Sweeteners", onmouseover:"showWalllinkbox10()", onmouseleave:"hidWallLinkBox10()"},
    {data_icon:"mdi-light:arrange-bring-forward", name:"Other categories", firsthead:"FOOD CUPBOARD", sub:"Grains & Rice", subone:"Pasta", subtwo:"Noodles", subthree:"Breakfast Foods", subfour:"Herbs, Spices & Seasoning", subfive:"Flours & Meals", subsix:"Malt Drinks", subseven:"Coffee", subeight:"Water", subnine:"Cooking Oil", subten:"Juices", subeleven:"Soft Drinks", subtwelve:"Canned & Packaged Foods", subthirteen:"Candy & Chocolate", subfourteen:"Syrups, Sugars & Sweeteners", onmouseover:"showWalllinkbox11()", onmouseleave:"hidWallLinkBox()"},
    
]

let JumiaMainLink = document.querySelector('.walllink');

for(x in wallLinkAll){

    JumiaMainLink.innerHTML += `
    <div class="walllinkboxhidden" onmouseover="${wallLinkAll[x].onmouseover}" onmouseleave="${wallLinkAll[x].onmouseleave}">
                        <div class="hiddenboxin" >
                            <h1>${wallLinkAll[x].firsthead}</h1>
                            <div class="ashline"></div>
                            <a href="" class="linkforhidenone">${wallLinkAll[x].sub}</a>
                            <a href="" class="linkforhidenone">${wallLinkAll[x].subone}</a>
                            <a href="" class="linkforhidenone">${wallLinkAll[x].subtwo}</a>
                            <a href="" class="linkforhidenone">${wallLinkAll[x].subthree}</a>
                            <a href="" class="linkforhidenone">${wallLinkAll[x].subfour}</a>
                            <a href="" class="linkforhidenone">${wallLinkAll[x].subfive}</a>
                            <a href="" class="linkforhidenone">${wallLinkAll[x].subsix}</a>
                            <a href="" class="linkforhidenone">${wallLinkAll[x].subseven}</a>
                            <a href="" class="linkforhidenone">${wallLinkAll[x].subeight}</a>
                            <a href="" class="linkforhidenone">${wallLinkAll[x].subnine}</a>
                            <a href="" class="linkforhidenone">${wallLinkAll[x].subten}</a>
                            <a href="" class="linkforhidenone">${wallLinkAll[x].subeleven}</a>
                            <a href="" class="linkforhidenone">${wallLinkAll[x].subtwelve}</a>
                            <a href="" class="linkforhidenone">${wallLinkAll[x].subthirteen}</a>
                            <a href="" class="linkforhidenone">${wallLinkAll[x].subfourteen}</a>
                        </div>
                    </div>                   
                    <div class="walllinkonebox" onmouseover="${wallLinkAll[x].onmouseover}" onmouseleave="${wallLinkAll[x].onmouseleave}">
                        <span class="iconify" data-icon="${wallLinkAll[x].data_icon}" data-inline="false"></span>
                        <p class="walllinkclickone">${wallLinkAll[x].name}</p>                        
                    </div>
    
    
    
    `
};
// end of the function




// this is for the first section of the picture
let listOfPickture =[
    {discount:"-16%", picvalue:"/image/1.jpg", nameofphone:"Tecno Camon 17 (CG6)6...", pricename:"$ 75,995", delpart:"$90,000"},
    {discount:"-27%", picvalue:"/image/1 (1).jpg", nameofphone:"Tecno Camon 17 (CG6)6...", pricename:"$ 75,995", delpart:"$90,000"},
    {discount:"-36%", picvalue:"/image/1 (2).jpg", nameofphone:"Tecno Camon 17 (CG6)6...", pricename:"$ 75,995", delpart:"$90,000"},
    {discount:"-65%", picvalue:"/image/1 (3).jpg", nameofphone:"Tecno Camon 17 (CG6)6...", pricename:"$ 75,995", delpart:"$90,000"},
    {discount:"-35%", picvalue:"/image/1 (4).jpg", nameofphone:"Tecno Camon 17 (CG6)6...", pricename:"$ 75,995", delpart:"$90,000"},
    {discount:"-39%", picvalue:"/image/1 (5).jpg", nameofphone:"Tecno Camon 17 (CG6)6...", pricename:"$ 75,995", delpart:"$90,000"}
]

let mainPictureBox = document.querySelector('.mainpicturebox');

for(x in listOfPickture){

    mainPictureBox.innerHTML += `
    
    <div class="mainpictureholder">
                        <div class="discountvalue">
                            <p>${listOfPickture[x].discount}</p>
                        </div>
                        <div class="mainpicturecon">
                            <img src="${listOfPickture[x].picvalue}">
                        </div>
                        <div class="mainpictureprice">
                            <p class="nameofphone">${listOfPickture[x].nameofphone}</p>
                            <p class="actualprice">${listOfPickture[x].pricename}</p>
                            <p class="delpart"><del>${listOfPickture[x].delpart}</del></p>
                        </div>
                    </div> 
    
    
    `
}
// this is the end of the first section of the picture




