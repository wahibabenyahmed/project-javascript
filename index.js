var btnP= document.getElementsByClassName('increment');
var btnM= document.getElementsByClassName('decrement');




for(let ele of btnP){

ele.addEventListener('click',function inc(){
    ele.previousElementSibling.innerText ++;
    totalprix();

})


}

for (let min of btnM){

min.addEventListener('click',function dec(){
    if(min.nextElementSibling.innerText>0){
    min.nextElementSibling.innerText --;
    totalprix();
   

    }
    
})

}

let conter =document.getElementsByClassName('conteur');
let prix = document.getElementsByClassName('prix1');
let total = document.getElementById('totalP');
let like = document.getElementsByClassName('fa-solid fa-heart');

function totalprix(){
    let sum = 0 ;
    for (let i=0 ; i< prix.length ; i++){
      sum+= prix[i].innerText * conter[i].innerText ;
    total.innerText= sum;

    }
}

let clicked=false
for (  let i=0 ; i<like.length;i++){
like[i].addEventListener('click',function(){
    like[i].style.color ="red";
    clicked =! clicked ;

    if(clicked === true){
        like[i].style.color ="black";

    }
  
})
}
let Remove= document.getElementsByClassName('fa-solid fa-trash');

for (let i=0 ; i< Remove.length; i++){

    Remove[i].addEventListener('click',function del(){
  Remove[i].parentElement.parentElement.parentElement.remove();
  totalprix()

    })
}





