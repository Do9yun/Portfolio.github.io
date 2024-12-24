function loadList() {
    const list = document.getElementById('dynamic-list');
    const savedItems = JSON.parse(localStorage.getItem('savedList')) || [];

    // 로컬 스토리지에 저장된 목록 불러오기
    savedItems.forEach((item) => createListItem(item));
}

function createListItem(item) {
    const list = document.getElementById('dynamic-list');

    const listItem = document.createElement('li');

    const itemName = document.createElement('span');
    itemName.textContent = item;

    const actionContainer = document.createElement('div');
    actionContainer.classList.add('edit-container');

    // 수정 버튼
    const editButton = document.createElement('span');
    editButton.textContent = '수정';
    editButton.style.cursor = 'pointer';
    editButton.style.color = '#00FF00';
    editButton.onclick = () => {
        const inputBox = document.createElement('input');
        inputBox.type = 'text';
        inputBox.value = item;

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
        const confirmation = confirm(`"${item}"을(를) 삭제하시겠습니까?`);
        if (confirmation) {
            listItem.remove();

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

function showInputField() {
    const list = document.getElementById('dynamic-list');

    const inputBox = document.createElement('input');
    inputBox.type = 'text';

    const saveButton = document.createElement('span');
    saveButton.textContent = '저장';
    saveButton.style.cursor = 'pointer';
    saveButton.style.color = '#4CAF50';
    saveButton.onclick = () => {
        const value = inputBox.value.trim();
        if (value) {
            createListItem(value);

            // 로컬 스토리지에 추가
            const savedItems = JSON.parse(localStorage.getItem('savedList')) || [];
            savedItems.push(value);
            localStorage.setItem('savedList', JSON.stringify(savedItems));
        }
        inputBox.remove();
        saveButton.remove();
    };

    list.appendChild(inputBox);
    list.appendChild(saveButton);
}

function toggleEditMode() {
    const listItems = document.querySelectorAll('#dynamic-list li .edit-container');
    listItems.forEach((actionContainer) => {
        actionContainer.style.display = actionContainer.style.display === 'flex' ? 'none' : 'flex';
    });
}

window.onload = loadList;
