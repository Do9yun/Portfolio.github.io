function showInfo(category) {
    const content = document.getElementById('content');
    let info = '';

    switch (category) {
        case '내 정보':
            info = '<h1>내 정보</h1><p>여기에 내 정보를 입력하세요.</p>';
            break;
        case '자기소개서':
            info = '<h1>자기소개서</h1><p>자기소개서 내용을 입력하세요.</p>';
            break;
        case '경력':
            info = '<h1>경력</h1><p>경력 사항을 입력하세요.</p>';
            break;
        case '자격증':
            info = '<h1>자격증</h1><p>자격증 정보를 입력하세요.</p>';
            break;
        default:
            info = '<h1>내용 없음</h1>';
    }

    content.innerHTML = info;
}
