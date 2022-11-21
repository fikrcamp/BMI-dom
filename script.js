console.log("hello");

document.querySelector("#calculate").addEventListener("click",function(){
let bill = parseInt(document.querySelector("#bill").value)
if (bill > 50 && bill < 250){
    let tip = bill * 0.15
    document.querySelector("#result").innerText = `The bill is ${bill}, the tip is ${tip}, and the total value ${bill+tip}`
} else {
    let tip = bill * 0.2
    document.querySelector("#result").innerText = `The bill is ${bill}, the tip is ${tip}, and the total value ${bill+tip}`
}
})
