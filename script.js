function loadList() {
    const list = document.getElementById('dynamic-list');
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

    const actionContainer = document.createElement('div');
    actionContainer.style.display = 'none';
    actionContainer.style.gap = '10px';

    const editButton = document.createElement('span');
    editButton.textContent = '수정';
    editButton.style.cursor = 'pointer';
    editButton.style.color = '#FFA500';
    editButton.onclick = () => {
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
                const savedItems = JSON.parse(localStorage.getItem('savedList')) || [];
                const index = savedItems.indexOf(item);
                if (index !== -1) {
                    savedItems[index] = newValue;
                    localStorage.setItem('savedList', JSON.stringify(savedItems));
                }
            }
            inputBox.remove();
            saveButton.remove();
            cancelButton.remove();
        };

        const cancelButton = document.createElement('span');
        cancelButton.textContent = '취소';
        cancelButton.style.cursor = 'pointer';
        cancelButton.style.color = '#FF0000';
        cancelButton.onclick = () => {
            inputBox.remove();
            saveButton.remove();
            cancelButton.remove();
        };

        itemName.style.display = 'none';
        listItem.insertBefore(inputBox, actionContainer);
        listItem.insertBefore(saveButton, actionContainer);
        listItem.insertBefore(cancelButton, actionContainer);
    };

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

function createInputBox() {
    const list = document.getElementById('dynamic-list');
    const inputContainer = document.getElementById('input-container');
    if (inputContainer) inputContainer.remove();

    const newContainer = document.createElement('div');
    newContainer.id = 'input-container';
    newContainer.className = 'input-container';

    const inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.placeholder = '목록 이름 입력';

    const saveButton = document.createElement('button');
    saveButton.textContent = '저장';
    saveButton.className = 'save';
    saveButton.onclick = () => {
        const inputValue = inputBox.value.trim();
        if (inputValue) {
            createListItem(inputValue);
            const savedItems = JSON.parse(localStorage.getItem('savedList')) || [];
            savedItems.push(inputValue);
            localStorage.setItem('savedList', JSON.stringify(savedItems));
            newContainer.remove();
        }
    };

    const cancelButton = document.createElement('button');
    cancelButton.textContent = '취소';
    cancelButton.className = 'cancel';
    cancelButton.onclick = () => {
        newContainer.remove();
    };

    newContainer.appendChild(inputBox);
    newContainer.appendChild(saveButton);
    newContainer.appendChild(cancelButton);

    list.insertAdjacentElement('beforeend', newContainer); // 목록 아래에 추가
}

function toggleEditMode() {
    const listItems = document.querySelectorAll('#dynamic-list li div');
    listItems.forEach((actionContainer) => {
        actionContainer.style.display = actionContainer.style.display === 'flex' ? 'none' : 'flex';
    });
}

window.onload = () => {
    loadList();
};
