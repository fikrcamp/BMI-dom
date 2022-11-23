// console.log("hello");
document.querySelector("#calculate").addEventListener("click", function(){
    let bill=document.querySelector("#input").value
    let tip1=bill*0.15
    let tip2=bill*0.20
    let totall1=bill+tip1
    let totall2=bill+tip2
    if(bill>50 && bill<=300){
        document.querySelector("result").innerText=(`you bill is ${bill} and 
        your tip is ${tip1} and your total is ${totall1}`) 
    }
    else(bill>300){
        document.querySelector("result").innerText=(`you bill is ${bill} and 
        your tip is ${tip2} and your total is ${totall2}`) 
    }
    
})
