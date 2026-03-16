// Mảng lưu danh sách sinh viên
let students = [];

// Lấy phần tử HTML
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("tableBody");
const stats = document.getElementById("stats");

// Hàm xếp loại
function getRank(score) {
    if (score >= 8.5) return "Giỏi";
    if (score >= 7) return "Khá";
    if (score >= 5) return "Trung bình";
    return "Yếu";
}

// Hàm vẽ lại bảng
function renderTable() {

    tableBody.innerHTML = "";

    students.forEach((student, index) => {

        let rank = getRank(student.score);

        let row = `
        <tr class="${student.score < 5 ? 'low-score' : ''}">
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.score}</td>
            <td>${rank}</td>
            <td>
                <button class="deleteBtn" data-index="${index}">Xóa</button>
            </td>
        </tr>
        `;

        tableBody.innerHTML += row;
    });

    updateStats();
}

// Hàm cập nhật thống kê
function updateStats() {

    let total = students.length;

    let sum = 0;

    students.forEach(student => {
        sum += student.score;
    });

    let avg = total ? (sum / total).toFixed(2) : 0;

    stats.innerText =
        `Tổng sinh viên: ${total} | Điểm trung bình: ${avg}`;
}

// Hàm thêm sinh viên
function addStudent() {

    let name = nameInput.value.trim();
    let score = parseFloat(scoreInput.value);

    // kiểm tra dữ liệu
    if (name === "") {
        alert("Họ tên không được trống");
        return;
    }

    if (isNaN(score) || score < 0 || score > 10) {
        alert("Điểm phải từ 0 đến 10");
        return;
    }

    // thêm vào mảng
    students.push({
        name: name,
        score: score
    });

    // render lại bảng
    renderTable();

    // xóa input
    nameInput.value = "";
    scoreInput.value = "";

    // focus lại ô họ tên
    nameInput.focus();
}

// Sự kiện nút thêm
addBtn.addEventListener("click", addStudent);

// Nhấn Enter ở ô điểm để thêm
scoreInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addStudent();
    }
});

// Event Delegation để xóa
tableBody.addEventListener("click", function (e) {

    if (e.target.classList.contains("deleteBtn")) {

        let index = e.target.dataset.index;

        students.splice(index, 1);

        renderTable();
    }

});