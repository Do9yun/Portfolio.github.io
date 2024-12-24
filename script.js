function createList() {
    const list = document.getElementById('dynamic-list');

    // 기존에 생성된 텍스트박스와 버튼을 제거 (중복 방지)
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
            const listItem = document.createElement('li');
            listItem.textContent = inputValue;
            listItem.onclick = () => alert(`${inputValue} 클릭됨`);
            list.appendChild(listItem);
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
