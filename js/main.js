var nameInput=document.getElementById("nameInput")
var linkInput=document.getElementById("linkInput")
// console.log(linkInput);
// console.log(nameInput);
var tbody=document.getElementById("tbody")


if (localStorage.getItem("alldata")!==null) {
    var bookContainer= JSON.parse(localStorage.getItem("alldata"))

showData()
}else{
    var bookContainer=[]
}


function validateForm(regex,input){

  if(regex.test(input.value)){

    input.classList.add("is-valid")
    input.classList.remove("is-invalid")
input.nextElementSibling.classList.add("d-none")
return true;


  }else{

    input.classList.add("is-invalid")
    input.classList.remove("is-valid")
input.nextElementSibling.classList.remove("d-none")
return false;

  }
}
 
nameInput.addEventListener("blur",function() {
  validateForm(/^[A-Za-z\s]{3,}$/ , nameInput)
})
linkInput.addEventListener("blur",function(){
  validateForm(/^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/ ,linkInput)
})




function add(){
 

if(
  validateForm(/^[A-Za-z\s]{3,}$/ , nameInput)&&
  validateForm(/^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/ ,linkInput)

){
  var bookMark={
    name:nameInput.value,
    link:linkInput.value,

  }

bookContainer.push(bookMark)
localStorage.setItem("alldata",JSON.stringify(bookContainer))
console.log(bookContainer);
showData();
  
  clear()


}else{
  alert("Site Name or Url is not valid, Please follow the rules")
}


 



 
}

// show data 
function showData() {
    

  var str="";
for(var i=0;i<bookContainer.length;i++){
     str+= `<tr>
    <th scope="row"><p>${i+1}</p></th>
    <td><p>${bookContainer[i].name}</p></td>
    <td><a href="${bookContainer[i].link}" class="btn btn-primary " target="_blank"><i class="fa-solid fa-eye"></i>  Visit</a></td>
         <td><button onclick="deleteBook(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i>  Delete</button></td>
  </tr>`;
  // console.log(str);
}
tbody.innerHTML=str

}


// cleeeeeeeear 
function clear(){
 nameInput.value=""
 linkInput.value=""
}


// daleteeeeeeeeeeee


function deleteBook(index){
bookContainer.splice(index,1)
showData()
localStorage.setItem("alldata",JSON.stringify(bookContainer))
}

