console.log("hello");

document.querySelector("#Calculate").addEventListener("click",function(){
    // value bill
    let bill = document.querySelector("#input").value
    // condition (if)
    if(bill >= 50 && bill <= 250){
        let tip1 = bill * 0.15
        document.querySelector("#result").innerHTML = `the bill is ${bill} and tip is ${tip1}`
    }else if(bill >= 300){
        let tip2 = bill * 0.2
        document.querySelector("#result").innerHTML = `the bill is ${bill} and tip is ${tip2}`
    }else{
        document.querySelector("#result").innerHTML= `the bill is ${bill}`
    }
})
