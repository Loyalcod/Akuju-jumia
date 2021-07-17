// console.log('am fine')

let onSell = document.querySelector('.onsell');
let x = 0;
console.log(x);
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