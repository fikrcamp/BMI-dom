 
 
let calculate =document.querySelector("#calculate");

 
calculate.addEventListener("click" ,function(){

    let bill= document.querySelector("#bill").value;
    let result = document.querySelector("#result");

    if(bill >= 50 && bill <=250 ){
      result.innerHTML=  "tip is 15%";
    }
    else if(bill > 300){
        result.innerHTML=  "tip is 20%";
    }
    
 
})

