// 중앙 바 내용 업데이트 함수
function updateCenterBox(content) {
    const centerBox = document.querySelector('.center-box');
    centerBox.innerHTML = `
        <button class="close-btn" onclick="closeCenterBox()">닫기</button>
        <p>${content}</p>
    `;
    centerBox.style.display = 'flex'; // 중앙 바 표시
}

// 중앙 바 닫기 함수
function closeCenterBox() {
    const centerBox = document.querySelector('.center-box');
    centerBox.style.display = 'none'; // 중앙 바 숨기기
}

// 각 항목별 내용
const contentMap = {
    '내 정보': '여기에 내 정보에 대한 내용을 입력하세요.',
    '자기소개서': `
        저는 2D 이미지를 PIFuHD로 변환하여 3D 인체 메쉬를 생성하고, OpenCV, OpenPose 및 포즈 추정 모델을 활용해 신체 부위를 인식하고 실제 신체 치수를 계산하는 프로그램을 제작한 경험이 있습니다. 이를 구현하면서 SQLite를 기반으로 데이터를 저장하고 관리하는 기능도 포함시켰습니다. 인공지능, 딥러닝, 머신러닝 등 당시 익숙하지 않았던 기술들을 스스로 학습하여 프로젝트에 적용하였으며, Java와 Python을 활용해 성공적으로 프로젝트를 완수했습니다. 이 경험은 단순한 학습을 넘어 저의 기술적 역량을 증명하는 계기가 되었으며, 이후 수업에서도 큰 도움이 되어 우수한 성적을 받을 수 있었습니다.

        또한, 교내 프로그래밍 대회인 "AI 재난 상상 아이디어톤"에서 대상을 수상한 경험은 저의 대표적인 성과 중 하나입니다. 대회에서는 실시간 위성 데이터와 AI 기술을 활용한 산불 조기 감지 및 확산 예측 솔루션을 제안하여, 독창성과 실용성을 높이 평가받았습니다. 이 과정에서 팀원들과의 협업을 통해 문제를 분석하고 해결책을 제시하며, 기술적 기여뿐만 아니라 리더십과 소통 능력의 중요성을 다시 한번 깨달았습니다.

        현재 저는 정보처리기사 자격증 취득을 준비 중이며, 1차 시험에 합격하였습니다. 이는 지속적인 자기계발과 목표 달성을 위한 노력의 일환이며, 2차 시험 준비에도 철저히 임하고 있습니다. 이를 통해 전문성을 더욱 강화하여 다양한 프로그래밍 언어와 데이터베이스 지식을 활용해 효율적인 솔루션을 제공하는 데 기여하고자 합니다.

        앞으로도 팀원들과의 원활한 협업과 끊임없는 자기 계발을 통해 프로젝트의 성공을 이끌고, 귀사의 성과에 기여하는 인재가 되고자 합니다. 저의 경험과 열정을 바탕으로 귀사에서 더 큰 성장을 이루고 싶습니다. 감사합니다.
    `,
    '경력': '경력에 대한 내용을 여기에 작성하세요.',
    '자격증': '자격증에 대한 내용을 여기에 작성하세요.'
};

// 각 버튼 클릭 이벤트
document.querySelector('.sidebar').addEventListener('click', (e) => {
    const target = e.target.textContent.trim();
    if (contentMap[target]) {
        updateCenterBox(contentMap[target]);
    }
});
