function Login(){
  var inputEle = document.createElement("input");
  var submitEle = document.createElement("button");
  var messageBox = document.createElement("div");
  submitEle.innerHTML= "Submit"
  messageBox.innerHTML=" ";
  submitEle.addEventListener("click",function(){
    if(userEle.value=="cool"){
   messageBox.innerHTML="Enter Password";
  }
  });
}

 var userEle = document.createElement("button");
  userEle.innerHTML="Username";
  var passEle = document.createElement("button");
  passEle.innerHTML="Password";
var messageBox = document.createElement("div");
var inputEle = document.createElement("input");
var submitEle = document.createElement("button");
 if(userEle.value=="cool"){
   messageBox.innerHTML="Enter Password"
  }
else{
  messageBox.innerHTML="Try Again"
}
if(passEle.value=="password"){
      messageBox.innerHTML="Successful Login"
    }
  else{ 
    messageBox.innerHTML="Invalid Login";
  };
  document.body.appendChild(inputEle);
  document.body.appendChild(submitEle);
  document.body.appendChild(messageBox);
  inputEle.setAttribute("placeholder", "Username...");
Login();
nav();
function nav(){
  var userEle = document.createElement("button");
  userEle.innerHTML="Username";
  var passEle = document.createElement("button");
  passEle.innerHTML="Password";
  
  userEle.addEventListener("click", function(){
  makeUser();
    passEle.addEventListener("click", function(){
  makePass();
})
})
}