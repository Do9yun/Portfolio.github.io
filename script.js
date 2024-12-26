// 중앙 바 업데이트 함수
function updateCenterBox(content) {
    const centerBox = document.querySelector('.center-box');
    centerBox.innerHTML = content; // 중앙 바에 새로운 내용 추가
    centerBox.style.display = 'flex'; // 중앙 바 표시
}

// 각 항목 클릭 시 내용 업데이트
document.querySelectorAll('.sidebar button').forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.textContent) {
            case '내 정보':
                updateCenterBox('<p>여기에 내 정보 내용을 작성하세요.</p>');
                break;
            case '자기소개서':
                updateCenterBox(`
                    <p>저는 2D 이미지를 PIFuHD로 변환하여 3D 인체 메쉬를 생성하고, OpenCV, OpenPose 및 포즈 추정 모델을 활용해 신체 부위를 인식하고 실제 신체 치수를 계산하는 프로그램을 제작한 경험이 있습니다.</p>
                    <p>이를 구현하면서 SQLite를 기반으로 데이터를 저장하고 관리하는 기능도 포함시켰습니다. 인공지능, 딥러닝, 머신러닝 등 당시 익숙하지 않았던 기술들을 스스로 학습하여 프로젝트에 적용하였으며, Java와 Python을 활용해 성공적으로 프로젝트를 완수했습니다. 이 경험은 단순한 학습을 넘어 저의 기술적 역량을 증명하는 계기가 되었으며, 이후 수업에서도 큰 도움이 되어 우수한 성적을 받을 수 있었습니다.</p>
                    <p>또한, 교내 프로그래밍 대회인 "AI 재난 상상 아이디어톤"에서 대상을 수상한 경험은 저의 대표적인 성과 중 하나입니다.</p>
                    <p>현재 저는 정보처리기사 자격증 취득을 준비 중이며, 1차 시험에 합격하였습니다. 이는 지속적인 자기계발과 목표 달성을 위한 노력의 일환이며, 2차 시험 준비에도 철저히 임하고 있습니다.</p>
                `);
                break;
            case '경력':
                updateCenterBox('<p>여기에 경력 내용을 작성하세요.</p>');
                break;
            case '자격증':
                updateCenterBox('<p>여기에 자격증 내용을 작성하세요.</p>');
                break;
        }
    });
});
