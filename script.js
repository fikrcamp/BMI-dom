

//javascript 
document.querySelector("#button").addEventListener("click", function () {
    //making varibale to hold the value 
    const bill = document.querySelector("#input").value
    //declaring variabe holding my total value 
    let tip1 = bill * 0.15
    let tip2 = bill * 0.20
    let total1 = bill * 0.15 / 0.15 + bill * 0.15
    let total2 = bill * 0.20 / 0.20 + bill * 0.20
    // if (bill >= 50 && bill <= 300) {
    if (bill >= 50 && bill <= 300) {
        //this below paraghraph will text inside my result p element with the that line
        document.querySelector("#output").innerText =
            (`Result is : "your bill was ${bill} and the tip was ${tip1} and the total is ${total1}"`)
    } else {
        document.querySelector("#output").innerText =
            (` Result is = "your bill was ${bill} and the tip was ${tip2} and finally your total is ${total2}"`)
    }

})

