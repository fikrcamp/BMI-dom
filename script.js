

document.querySelector("#calculate").addEventListener("click", function(){
  let bill = document.querySelector("#billing").value;
  let tip ;
  if (bill >= 50 && bill <300){
    tip = bill * 0.15;
  }else 
  tip = bill * 0.20;
  
  document.querySelector("#result").innerHTML = `The bill was ${bill} and tip was ${tip} ant the Total value is ${bill + tip}`;
  
})
