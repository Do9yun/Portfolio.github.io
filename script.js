function createList() {
    const list = document.getElementById('dynamic-list');

    // 기존 목록 삭제
    list.innerHTML = '';

    // 동적으로 목록 생성
    const items = ['목록 1', '목록 2', '목록 3', '목록 4', '목록 5'];
    items.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        // CSS 스타일 추가 (필요할 경우)
        listItem.style.cursor = 'pointer';
        listItem.style.padding = '10px';
        listItem.style.border = '1px solid rgba(255, 255, 255, 0.2)';
        listItem.style.borderRadius = '5px';
        listItem.style.marginBottom = '5px';

        // Hover 효과
        listItem.onmouseover = () => {
            listItem.style.backgroundColor = '#FFA000';
            listItem.style.color = 'black';
        };
        listItem.onmouseout = () => {
            listItem.style.backgroundColor = '';
            listItem.style.color = '';
        };

        // 클릭 이벤트
        listItem.onclick = () => alert(`"${item}" 클릭됨 (Index: ${index})`);

        list.appendChild(listItem);
    });
}
