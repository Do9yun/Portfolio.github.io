function createList() {
    const list = document.getElementById('dynamic-list');

    // 기존 내용 삭제
    list.innerHTML = '';

    // 텍스트박스 추가
    const inputContainer = document.createElement('div');
    inputContainer.style.display = 'flex';
    inputContainer.style.alignItems = 'center';
    inputContainer.style.marginBottom = '10px';

    const inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.placeholder = '목록 이름 입력';
    inputBox.style.flex = '1';
    inputBox.style.padding = '5px';
    inputBox.style.border = '1px solid rgba(255, 255, 255, 0.5)';
    inputBox.style.borderRadius = '5px';
    inputBox.style.marginRight = '10px';

    const cancelButton = document.createElement('span');
    cancelButton.textContent = '취소';
    cancelButton.style.color = '#FF4D4D';
    cancelButton.style.cursor = 'pointer';
    cancelButton.style.marginRight = '10px';
    cancelButton.onclick = () => {
        list.innerHTML = ''; // 텍스트박스와 버튼 삭제
    };

    const saveButton = document.createElement('span');
    saveButton.textContent = '저장';
    saveButton.style.color = '#4CAF50';
    saveButton.style.cursor = 'pointer';
    saveButton.onclick = () => {
        const inputValue = inputBox.value.trim();
        if (inputValue) {
            addListItem(inputValue); // 유효한 입력값을 목록에 추가
        } else {
            alert('목록 이름을 입력하세요!');
        }
    };

    inputContainer.appendChild(inputBox);
    inputContainer.appendChild(cancelButton);
    inputContainer.appendChild(saveButton);
    list.appendChild(inputContainer);
}

// 목록 항목 추가 함수
function addListItem(name) {
    const list = document.getElementById('dynamic-list');
    const listItem = document.createElement('li');
    listItem.textContent = name;

    // 스타일 추가
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
    listItem.onclick = () => alert(`"${name}" 클릭됨`);

    list.appendChild(listItem);
}
