
var calculate=document.getElementById("value3");
var x,y,z;
if(calculate){
calculate.addEventListener("click",function(){
  let bill = document.getElementById('value1').value;

 let numpeople = document.getElementById("value2").value;
  let comments = document.getElementById("value4").value;

  
 alert("Your total bill "+ bill
  +" no of people "+numpeople+" "+" service  is "+comments);
});
}


