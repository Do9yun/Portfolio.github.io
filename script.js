// 로컬 스토리지에서 목록 불러오기
function loadList() {
    const list = document.getElementById('dynamic-list');
    const savedItems = JSON.parse(localStorage.getItem('savedList')) || [];
    savedItems.forEach(item => createListItem(item));
}

// 동적 목록 항목 생성
function createListItem(item) {
    const list = document.getElementById('dynamic-list');
    const listItem = document.createElement('li');
    
    const itemName = document.createElement('span');
    itemName.textContent = item;

    const actionContainer = document.createElement('div');
    actionContainer.style.display = 'none';

    // 수정 버튼
    const editButton = document.createElement('span');
    editButton.textContent = '수정';
    editButton.style.color = '#00FF00';
    editButton.style.cursor = 'pointer';
    editButton.onclick = () => {
        const inputBox = document.createElement('input');
        inputBox.type = 'text';
        inputBox.value = item;
        const saveButton = document.createElement('span');
        saveButton.textContent = '저장';
        saveButton.style.color = '#4CAF50';
        saveButton.style.cursor = 'pointer';
        saveButton.onclick = () => {
            const newValue = inputBox.value.trim();
            if (newValue) {
                itemName.textContent = newValue;
                updateLocalStorage(item, newValue);
            }
            inputBox.remove();
            saveButton.remove();
        };
        itemName.style.display = 'none';
        listItem.appendChild(inputBox);
        listItem.appendChild(saveButton);
    };

    // 삭제 버튼
    const deleteButton = document.createElement('span');
    deleteButton.textContent = '삭제';
    deleteButton.style.color = '#FF0000';
    deleteButton.style.cursor = 'pointer';
    deleteButton.onclick = () => {
        if (confirm(`${item}을(를) 삭제하시겠습니까?`)) {
            listItem.remove();
            removeFromLocalStorage(item);
        }
    };

    actionContainer.appendChild(editButton);
    actionContainer.appendChild(deleteButton);

    listItem.appendChild(itemName);
    listItem.appendChild(actionContainer);
    list.appendChild(listItem);
}

// 로컬 스토리지 업데이트
function updateLocalStorage(oldValue, newValue) {
    const savedItems = JSON.parse(localStorage.getItem('savedList')) || [];
    const index = savedItems.indexOf(oldValue);
    if (index !== -1) {
        savedItems[index] = newValue;
        localStorage.setItem('savedList', JSON.stringify(savedItems));
    }
}

// 로컬 스토리지에서 항목 삭제
function removeFromLocalStorage(item) {
    const savedItems = JSON.parse(localStorage.getItem('savedList')) || [];
    const index = savedItems.indexOf(item);
    if (index !== -1) {
        savedItems.splice(index, 1);
        localStorage.setItem('savedList', JSON.stringify(savedItems));
    }
}

// "목록 생성" 버튼 클릭 시 텍스트 박스 표시
function showInputBox() {
    const inputContainer = document.getElementById('input-container');
    inputContainer.style.display = 'flex';
}

// 새 항목 추가
function addListItem() {
    const inputBox = document.getElementById('input-box');
    const value = inputBox.value.trim();
    if (value) {
        createListItem(value);

        // 로컬 스토리지에 추가
        const savedItems = JSON.parse(localStorage.getItem('savedList')) || [];
        savedItems.push(value);
        localStorage.setItem('savedList', JSON.stringify(savedItems));

        // 입력 상자 초기화 및 숨기기
        inputBox.value = '';
        document.getElementById('input-container').style.display = 'none';
    }
}

// 수정 모드 토글
function toggleEditMode() {
    const listItems = document.querySelectorAll('#dynamic-list li div');
    listItems.forEach(container => {
        container.style.display = container.style.display === 'none' ? 'flex' : 'none';
    });
}

// 페이지 로드 시 목록 로드
window.onload = loadList;
