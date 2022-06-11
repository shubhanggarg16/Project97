user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
var msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name1:user_name,
like:0,
message:msg
});
document.getElementById("msg").value="";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}