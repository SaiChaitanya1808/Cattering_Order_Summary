document.getElementById("myform").addEventListener("submit",function(e){
e.preventDefault();
document.getElementById('form').classList.remove("active");
document.getElementById('menupage').classList.add("active");
})
