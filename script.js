





document.querySelector("#calc").addEventListener("click", function(){
let bill = document.querySelector("#bill").value;

if (bill > 50 && bill <= 250){
    let tip = bill * 0.15
    document.querySelector("#result").innerText = 
    `your bill is ${bill} and your tip is ${tip} and 
    Total is ${bill + tip}`

}else if (bill > 250){
    let tip = bill * 0.2
document.querySelector("#result").innerText = 
`your bill is ${bill} and your tip is ${tip} and Total 
   is ${bill + tip}`
} 
})