
document.getElementById("btn").addEventListener("click", function(){
    let bill = Number(document.getElementById("input").value)
      
       let tip = 0;
    if(bill >= 50 && bill <= 300){
        tip = 15/100
       let total = bill + (bill * tip)
       document.getElementById("result").innerText = `The bill was ${bill}, the tip was ${tip}, and the total value is ${total}`;
       
    }
      
    else {
        tip = 20/100
         total = bill + (bill * tip)
         document.getElementById("result").innerText = `The bill was ${bill}, the tip was ${tip}, and the total value is ${total}`
         
    }
    
})


