var istatus=document.querySelector("h5")
var btn=document.querySelector("#add")
//var removeFriend=document.querySelector("#remove")
var check=0
btn.addEventListener('click', function(){
    if(check == 0){
    istatus.innerHTML='Friends'
    istatus.style.color='Green'
    btn.innerHTML="Remove Friends"
   
    check=1
    }
    else{
        istatus.innerHTML='Stranger'
        istatus.style.color='red'
         btn.innerHTML="Add Friends"
        check=0
    }
})
/*
removeFriend.addEventListener('click', function(){
 istatus.innerHTML='Stranger'
    istatus.style.color='red'
})*/