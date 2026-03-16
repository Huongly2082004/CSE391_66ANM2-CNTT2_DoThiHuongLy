const steps = document.querySelectorAll(".step");
const progressBar = document.getElementById("progressBar");

let current = 0;

function showStep(index){
steps.forEach(step => step.classList.remove("active"));
steps[index].classList.add("active");

progressBar.style.width = ((index+1)/steps.length)*100 + "%";
}


// ===== VALIDATE STEP 1 =====
function validateStep1(){

let name = document.getElementById("fullname").value.trim();
let birth = document.getElementById("birth").value;
let gender = document.querySelector('input[name="gender"]:checked');

let valid = true;

if(name===""){
document.getElementById("nameError").innerText="Nhập họ tên";
valid=false;
}else{
document.getElementById("nameError").innerText="";
}

if(!birth){
document.getElementById("birthError").innerText="Chọn ngày sinh";
valid=false;
}else{
document.getElementById("birthError").innerText="";
}

if(!gender){
document.getElementById("genderError").innerText="Chọn giới tính";
valid=false;
}else{
document.getElementById("genderError").innerText="";
}

return valid;
}


// ===== VALIDATE STEP 2 =====
function validateStep2(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirm = document.getElementById("confirmPassword").value;

let valid = true;

if(!email.includes("@")){
document.getElementById("emailError").innerText="Email không hợp lệ";
valid=false;
}else{
document.getElementById("emailError").innerText="";
}

if(password.length<6){
document.getElementById("passwordError").innerText="Mật khẩu ≥6 ký tự";
valid=false;
}else{
document.getElementById("passwordError").innerText="";
}

if(password!==confirm){
document.getElementById("confirmError").innerText="Mật khẩu không khớp";
valid=false;
}else{
document.getElementById("confirmError").innerText="";
}

return valid;
}


// ===== BUTTON NEXT =====
document.getElementById("next1").onclick=function(){

if(validateStep1()){
current=1;
showStep(current);
}

}

document.getElementById("next2").onclick=function(){

if(validateStep2()){

let name = document.getElementById("fullname").value;
let birth = document.getElementById("birth").value;
let gender = document.querySelector('input[name="gender"]:checked').value;
let email = document.getElementById("email").value;

document.getElementById("summary").innerHTML=
`
<p><b>Họ tên:</b> ${name}</p>
<p><b>Ngày sinh:</b> ${birth}</p>
<p><b>Giới tính:</b> ${gender}</p>
<p><b>Email:</b> ${email}</p>
`;

current=2;
showStep(current);

}

}


// ===== BUTTON BACK =====
document.getElementById("back1").onclick=function(){
current=0;
showStep(current);
}

document.getElementById("back2").onclick=function(){
current=1;
showStep(current);
}


// ===== SUBMIT =====
document.getElementById("multiForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Đăng ký thành công 🎉");

});

showStep(current);