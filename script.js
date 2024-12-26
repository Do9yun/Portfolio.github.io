// 항목별 내용 정의
const contentMap = {
    '내 정보': '내 정보 내용: 여기에 내 정보를 입력하세요.',
    '자기소개서': '자기소개서 내용: 여기에 자기소개서를 입력하세요.',
    '경력': '경력 내용: 여기에 경력을 입력하세요.',
    '자격증': '자격증 내용: 여기에 자격증 정보를 입력하세요.',
};

// 중앙 바 열기 및 내용 변경
function showCenterBox(key) {
    const centerBox = document.getElementById('center-box');
    const centerContent = document.getElementById('center-content');

    // 클릭된 항목에 해당하는 내용 설정
    centerContent.textContent = contentMap[key];

    // 중앙 바 보이기
    centerBox.style.display = 'flex';
}

// 중앙 바 닫기
function hideCenterBox() {
    const centerBox = document.getElementById('center-box');
    centerBox.style.display = 'none';
}
