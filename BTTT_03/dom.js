const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");
const btnRed = document.getElementById("btnRed");
// Nút chào
btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});
// Nút đổi màu nền
btnRed.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  //document.body.style.color = "white";
});
// Nhập tên và hiện lời chào
nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
});