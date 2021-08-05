
$("#deleteItem").click(function(){
    $("li").last().remove();
    
    });
    
    $("#clearAll").click(function(){
    $("li").remove();
    
    
    });


let myForm = document.getElementById("myForm")
myForm.addEventListener("submit", function(e) {
e.preventDefault()
})
let myButton =  document.getElementById("myButton")
let myList = document.getElementById("myList")
let myField = document.getElementById("myField")
let deleteItem = document.getElementById("deleteItem")

myButton.addEventListener("click", function myFunction()
{
let addItem = document.createElement("li");
addItem.innerHTML = myField.value
myList.appendChild(addItem);
myField.value = "";
});




