function loadList() {
    const list = document.getElementById('dynamic-list');

    // 로컬 스토리지에서 기존 목록 불러오기
    const savedItems = JSON.parse(localStorage.getItem('savedList')) || [];
    savedItems.forEach((item) => createListItem(item));
}

function createListItem(item) {
    const list = document.getElementById('dynamic-list');

    const listItem = document.createElement('li');
    listItem.style.display = 'flex';
    listItem.style.justifyContent = 'space-between';
    listItem.style.alignItems = 'center';

    const itemName = document.createElement('span');
    itemName.textContent = item;

    // 수정 | 삭제 버튼 컨테이너
    const actionContainer = document.createElement('div');
    actionContainer.style.display = 'none';
    actionContainer.style.gap = '10px';

    // 수정 버튼
    const editButton = document.createElement('span');
    editButton.textContent = '수정';
    editButton.style.cursor = 'pointer';
    editButton.style.color = '#00FF00';
    editButton.onclick = () => {
        // 기존 이름을 입력 박스로 변경
        const inputBox = document.createElement('input');
        inputBox.type = 'text';
        inputBox.value = item;
        inputBox.style.marginRight = '10px';

        const saveButton = document.createElement('span');
        saveButton.textContent = '저장';
        saveButton.style.cursor = 'pointer';
        saveButton.style.color = '#4CAF50';
        saveButton.onclick = () => {
            const newValue = inputBox.value.trim();
            if (newValue) {
                itemName.textContent = newValue;

                // 로컬 스토리지 업데이트
                const savedItems = JSON.parse(localStorage.getItem('savedList')) || [];
                const index = savedItems.indexOf(item);
                if (index !== -1) {
                    savedItems[index] = newValue;
                    localStorage.setItem('savedList', JSON.stringify(savedItems));
                }
            }
            inputBox.remove();
            saveButton.remove();
        };

        itemName.style.display = 'none';
        listItem.insertBefore(inputBox, actionContainer);
        listItem.insertBefore(saveButton, actionContainer);
    };

    // 삭제 버튼
    const deleteButton = document.createElement('span');
    deleteButton.textContent = '삭제';
    deleteButton.style.cursor = 'pointer';
    deleteButton.style.color = '#FF0000';
    deleteButton.onclick = () => {
        if (confirm(`"${item}"을(를) 삭제하시겠습니까?`)) {
            listItem.remove();

            // 로컬 스토리지에서 항목 제거
            const savedItems = JSON.parse(localStorage.getItem('savedList')) || [];
            const index = savedItems.indexOf(item);
            if (index !== -1) {
                savedItems.splice(index, 1);
                localStorage.setItem('savedList', JSON.stringify(savedItems));
            }
        }
    };

    actionContainer.appendChild(editButton);
    actionContainer.appendChild(deleteButton);

    listItem.appendChild(itemName);
    listItem.appendChild(actionContainer);

    list.appendChild(listItem);
}

function toggleEditMode() {
    const listItems = document.querySelectorAll('#dynamic-list li');
    listItems.forEach((listItem) => {
        const actionContainer = listItem.querySelector('div');
        actionContainer.style.display = actionContainer.style.display === 'flex' ? 'none' : 'flex';
    });
}

// 페이지 로드 시 실행
window.onload = () => {
    loadList();

    // 수정 버튼 추가
    const sidebar = document.querySelector('.sidebar');
    const editModeButton = document.createElement('div');
    editModeButton.textContent = '수정';
    editModeButton.style.cursor = 'pointer';
    editModeButton.style.color = '#FFA500';
    editModeButton.style.marginTop = '20px';
    editModeButton.onclick = toggleEditMode;

    sidebar.appendChild(editModeButton);
};
