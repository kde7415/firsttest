// 학생 데이터베이스: 학번을 key로 사용
const studentDB = {
  "202301": { name: "김민수", googleId: "kms01@gmail.com", googlePw: "pass1234" },
  "202302": { name: "이서연", googleId: "lsy02@gmail.com", googlePw: "pass2345" },
  "202303": { name: "박지후", googleId: "pjh03@gmail.com", googlePw: "pass3456" },
  "20122341": { name: "홍길동", googleId: "dd@gmail.com", googlePw: "dd123" } // ✅ 추가된 부분
};


// 폼과 결과 영역 요소
const form = document.getElementById('lookupForm');
const googleIdSpan = document.getElementById('googleId');
const googlePwSpan = document.getElementById('googlePw');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // 폼 기본 동작 막기

  const studentId = document.getElementById('studentId').value.trim();
  const studentName = document.getElementById('studentName').value.trim();

  // 해당 학번으로 학생 정보 가져오기
  const student = studentDB[studentId];

  // 이름까지 일치하는지 확인
  if (student && student.name === studentName) {
    googleIdSpan.textContent = student.googleId;
    googlePwSpan.textContent = student.googlePw;
  } else {
    googleIdSpan.textContent = "조회 결과가 없습니다.";
    googlePwSpan.textContent = "조회 결과가 없습니다.";
  }
});
