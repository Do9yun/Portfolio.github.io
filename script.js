function loadList() {
    const list = document.getElementById('dynamic-list');
    const savedItems = JSON.parse(localStorage.getItem('savedList')) || [];

    // 로컬 스토리지에 저장된 목록 불러오기
    savedItems.forEach((item) => createListItem(item));
}

function createListItem(item) {
    const list = document.getElementById('dynamic-list');

    const listItem = document.createElement('li');
    listItem.textContent = item;
    listItem.style.display = 'flex';
    listItem.style.justifyContent = 'space-between';
    listItem.style.alignItems = 'center';

    // 수정 | 삭제 버튼 컨테이너
    const actionContainer = document.createElement('div');
    actionContainer.style.display = 'none'; // 기본은 숨김
    actionContainer.style.gap = '10px';

    // 수정 버튼
    const editButton = document.createElement('span');
    editButton.textContent = '수정';
    editButton.style.cursor = 'pointer';
    editButton.style.color = '#00FF00';
    editButton.onclick = () => editListItem(listItem, item);

    // 삭제 버튼
    const deleteButton = document.createElement('span');
    deleteButton.textContent = '삭제';
    deleteButton.style.cursor = 'pointer';
    deleteButton.style.color = '#FF0000';
    deleteButton.onclick = () => deleteListItem(listItem, item);

    actionContainer.appendChild(editButton);
    actionContainer.appendChild(deleteButton);
    listItem.appendChild(actionContainer);

    list.appendChild(listItem);

    // 목록 클릭 시 수정|삭제 표시
    listItem.onclick = () => {
        const isVisible = actionContainer.style.display === 'flex';
        actionContainer.style.display = isVisible ? 'none' : 'flex';
    };
}

function createList() {
    const list = document.getElementById('dynamic-list');

    // 기존에 생성된 텍스트박스와 버튼 제거 (중복 방지)
    const existingInputBox = document.getElementById('input-box');
    if (existingInputBox) {
        existingInputBox.remove();
    }

    const existingActionButtons = document.getElementById('action-buttons');
    if (existingActionButtons) {
        existingActionButtons.remove();
    }

    // 텍스트박스 생성
    const inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.id = 'input-box';
    inputBox.placeholder = '목록 항목 입력';

    // 취소 및 저장 버튼 컨테이너
    const actionButtons = document.createElement('div');
    actionButtons.id = 'action-buttons';
    actionButtons.style.display = 'flex';
    actionButtons.style.gap = '10px';
    actionButtons.style.marginTop = '10px';

    // 취소 버튼 생성
    const cancelButton = document.createElement('span');
    cancelButton.textContent = '취소';
    cancelButton.style.cursor = 'pointer';
    cancelButton.style.color = '#FF0000';
    cancelButton.onclick = () => {
        inputBox.remove();
        actionButtons.remove();
    };

    // 저장 버튼 생성
    const saveButton = document.createElement('span');
    saveButton.textContent = '저장';
    saveButton.style.cursor = 'pointer';
    saveButton.style.color = '#00FF00';
    saveButton.onclick = () => {
        const inputValue = inputBox.value.trim();
        if (inputValue) {
            createListItem(inputValue);

            // 로컬 스토리지에 저장
            const savedItems = JSON.parse(localStorage.getItem('savedList')) || [];
            savedItems.push(inputValue);
            localStorage.setItem('savedList', JSON.stringify(savedItems));
        }

        // 텍스트박스와 버튼 제거
        inputBox.remove();
        actionButtons.remove();
    };

    // 버튼 추가
    actionButtons.appendChild(cancelButton);
    actionButtons.appendChild(saveButton);

    // 사이드바에 텍스트박스와 버튼 추가
    const sidebar = document.querySelector('.sidebar');
    sidebar.appendChild(inputBox);
    sidebar.appendChild(actionButtons);
}

function editListItem(listItem, oldValue) {
    const inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.value = oldValue;

    const saveButton = document.createElement('span');
    saveButton.textContent = '저장';
    saveButton.style.cursor = 'pointer';
    saveButton.style.color = '#00FF00';
    saveButton.onclick = () => {
        const newValue = inputBox.value.trim();
        if (newValue) {
            listItem.firstChild.textContent = newValue;

            // 로컬 스토리지 수정
            const savedItems = JSON.parse(localStorage.getItem('savedList')) || [];
            const index = savedItems.indexOf(oldValue);
            if (index !== -1) {
                savedItems[index] = newValue;
                localStorage.setItem('savedList', JSON.stringify(savedItems));
            }
        }
        inputBox.remove();
        saveButton.remove();
    };

    listItem.firstChild.textContent = '';
    listItem.firstChild.appendChild(inputBox);
    listItem.firstChild.appendChild(saveButton);
}

function deleteListItem(listItem, item) {
    const confirmation = confirm(`"${item}"을(를) 삭제하시겠습니까?`);
    if (confirmation) {
        listItem.remove();

        // 로컬 스토리지에서 삭제
        const savedItems = JSON.parse(localStorage.getItem('savedList')) || [];
        const index = savedItems.indexOf(item);
        if (index !== -1) {
            savedItems.splice(index, 1);
            localStorage.setItem('savedList', JSON.stringify(savedItems));
        }
    }
}

// 페이지 로드 시 기존 목록 불러오기
window.onload = loadList;
