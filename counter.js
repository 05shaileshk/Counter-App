
const counterValue= document.getElementById('counter-value')
const btnIncrement= document.getElementById('btn-increment')
const btnDecrement= document.getElementById('btn-decrement')
const btnReset= document.getElementById('btn-reset')

let count=0;
btnIncrement.addEventListener("click",function(){
    count++;
    counterValue.innerText= count;
} );

btnDecrement.addEventListener("click",function(){ if (count>0){
     count--;
    counterValue.innerText= count;
}
} );
btnReset.addEventListener('click',function()
    { count=0
        counterValue.innerText=count;
    });

