// 학생 데이터 (예시로 몇 명만 작성, 실제로는 서버에서 받아오거나 더 많은 데이터를 넣을 수 있음)
const studentData = [
  { id: "202301", name: "김민수", googleId: "kms01@gmail.com", googlePw: "pass1234" },
  { id: "202302", name: "이서연", googleId: "lsy02@gmail.com", googlePw: "pass2345" },
  { id: "202303", name: "박지후", googleId: "pjh03@gmail.com", googlePw: "pass3789" },  
  { id: "202304", name: "홍길동", googleId: "pjh03@gmail.com", googlePw: "pass3411" },  
  { id: "202305", name: "김철수", googleId: "pjh03@gmail.com", googlePw: "pass3400" },  
  { id: "202306", name: "이영희", googleId: "pjh03@gmail.com", googlePw: "pass3477" },  
  { id: "202307", name: "안철수", googleId: "pjh03@gmail.com", googlePw: "pass3445" },  
];

// 폼과 요소 참조
const form = document.getElementById('lookupForm');
const googleIdSpan = document.getElementById('googleId');
const googlePwSpan = document.getElementById('googlePw');

// 폼 제출 시 실행될 함수
form.addEventListener('submit', function (e) {
  e.preventDefault(); // 기본 폼 제출 방지

  // 입력값 가져오기
  const studentId = document.getElementById('studentId').value.trim();
  const studentName = document.getElementById('studentName').value.trim();

  // 학생 찾기
  const student = studentData.find(s => s.id === studentId && s.name === studentName);

  if (student) {
    // 결과 표시
    googleIdSpan.textContent = student.googleId;
    googlePwSpan.textContent = student.googlePw;

  } else {
    // 조회 실패 메시지
    googleIdSpan.textContent = "조회 결과가 없습니다.";
    googlePwSpan.textContent = "조회 결과가 없습니다.";
  }
});
