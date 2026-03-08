let student = {
  name: "Ly",
  id: "SV001",
  gpa: 2.5,

  introduce: function() {
    console.log("Xin chào, tôi là " + this.name +
                ", mã sinh viên " + this.id +
                ", GPA " + this.gpa);
  }
};

student.introduce();