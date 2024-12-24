function createList() {
    const list = document.getElementById('dynamic-list');

    // 기존 목록 삭제
    list.innerHTML = '';

    // 동적으로 목록 생성
    const items = ['목록 1', '목록 2', '목록 3', '목록 4', '목록 5'];
    items.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.onclick = () => alert(`${item} 클릭됨`);
        list.appendChild(listItem);
    });
}
