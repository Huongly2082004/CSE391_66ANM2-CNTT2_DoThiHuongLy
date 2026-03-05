// TODO: Đổi giá trị score và quan sát kết quả
let score = 9;
// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử
if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}
// TODO: Viết hàm tính điểm trung bình 3 môn
function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}
// tinhDiemTrungBinh(8, 7, 9);
console.log(tinhDiemTrungBinh(8,7,9));
// ham xep loai
function xepLoai(avg) {
  if (avg >= 8) {
    return "Giỏi";
  } else if (avg >= 6.5) {
    return "Khá";
  } else if (avg >= 5) {
    return "Trung bình";
  } else {
    return "Yếu";
  }
}
let avg = tinhDiemTrungBinh(8, 7, 9);
let loai = xepLoai(avg);

console.log("Điểm TB:", avg, "- Xếp loại:", loai);
// kiem tra tuoi
function kiemTraTuoi(age) {
  if (age >= 18) {
    console.log("Đủ 18 tuổi");
  } else {
    console.log("Chưa đủ 18 tuổi");
  }
}
kiemTraTuoi(16);
kiemTraTuoi(20);