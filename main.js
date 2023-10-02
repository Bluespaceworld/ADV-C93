function addUser(){
    username=document.getElementById("user_name_input").value;
    password=document.getElementById("Password_input").value;
    localStorage.setItem("username",username)
    localStorage.setItem("password",password)
}