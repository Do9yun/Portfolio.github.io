function showContent(section) {
    const contentArea = document.getElementById('content-area');

    if (section === 'intro') {
        // 비밀번호 입력 창 표시
        const password = prompt('비밀번호를 입력하세요:');
        
        // 올바른 비밀번호 확인
        if (password !== '1202') { // 여기에 원하는 암호를 입력하세요
            alert('비밀번호가 틀렸습니다.');
            return; // 암호가 틀리면 콘텐츠를 표시하지 않음
        }
    }

    // 콘텐츠 영역 활성화
    contentArea.classList.add('active');

    // 닫기 버튼 추가
    contentArea.innerHTML = `
        <button class="close-button" onclick="closeContent()">X</button>
    `;

    // 섹션별 내용
    let sectionContent = '';

    if (section === 'intro') {
        sectionContent = `
            <h2>내 정보</h2>
            <div class="info-section">
                <img class="profile-pic" src="images/증명사진.jpg" alt="증명사진">
                <table class="info-table">
                    <tr>
                        <th rowspan="2">성명</th>
                        <td>김도균</td>
                        <th>생년월일</th>
                        <td>1999-12-02</td>
                    </tr>
                    <tr>
                        <td>KIM DOGYUN</td>
                        <th>이메일</th>
                        <td>dogyun0@naver.com</td>
                    </tr>
                    <tr>
                        <th>연락처</th>
                        <td colspan="3">010-9921-7981</td>
                    </tr>
                    <tr>
                        <th>주소</th>
                        <td colspan="3">서울 은평구 백련산로 37 백련산힐스테이트4차 409동 104호</td>
                    </tr>
                </table>
            </div>
            <div class="education-section">
            <h3>학력 사항</h3>
            <table class="info-table">
                <tr>
                    <th rowspan="3">학력사항</th>
                    <th>졸업일</th>
                    <th>학교명</th>
                    <th>전공</th>
                    <th>졸업여부</th>
                </tr>
                <tr>
                    <td>2018.02</td>
                    <td>선정고등학교</td>
                    <td>-</td>
                    <td>졸업</td>
                </tr>
                <tr>
                    <td>2025.02</td>
                    <td>강원대학교</td>
                    <td>AI소프트웨어학과(미디어전공)</td>
                    <td>졸업예정</td>
                </tr>
            </table>
        </div>
        <div class="military-section">
        <h3>병역 사항</h3>
        <table class="info-table">
        <tr>
        <th>군필여부</th>
        <td colspan="3">군필 (✔), 미필 ( ), 면제 ( ), 기타 ( )</td>
            <th>군별</th>
            <td>육군</td>
        </tr>
        <tr>
            <th>복무기간</th>
            <td colspan="3">2020.06.08 ~ 2021.12.07 (1년 6개월)</td>
            <th>계급</th>
            <td>병장</td>
        </tr>
    </table>
</div>

    `;
    } else if (section === 'resume') {
        sectionContent = `
            <h2>자기소개서</h2>
            <p>
                저는 2D 이미지를 PIFuHD로 변환하여 3D 인체 메쉬를 생성하고, OpenCV, OpenPose 및 포즈 추정 모델을 활용해 신체 부위를 인식하고 실제 신체 치수를 계산하는 프로그램을 제작한 경험이 있습니다.
                이를 구현하면서 SQLite를 기반으로 데이터를 저장하고 관리하는 기능도 포함시켰습니다. 인공지능, 딥러닝, 머신러닝 등 당시 익숙하지 않았던 기술들을 스스로 학습하여 프로젝트에 적용하였으며,
                Java와 Python을 활용해 성공적으로 프로젝트를 완수했습니다. 이 경험은 단순한 학습을 넘어 저의 기술적 역량을 증명하는 계기가 되었으며, 이후 수업에서도 큰 도움이 되어 우수한 성적을 받을 수 있었습니다.
            </p>
            <p>
                또한, 교내 프로그래밍 대회인 "AI 재난 상상 아이디어톤"에서 대상을 수상한 경험은 저의 대표적인 성과 중 하나입니다. 대회에서는 화재 데이터를 기반으로 화재 및 연기를 감지하는 AI 모델을 개발했습니다.
                특히 화재 연기와 비슷한 특성을 가진 구름, 공장 연기 등을 구분할 수 있도록 데이터를 학습시켜, 높은 정확도를 달성했습니다. 이 과정에서 데이터 수집과 모델 학습, 평가에 이르는 전 과정을 주도적으로 수행하며 기술적 성과를 이뤄냈습니다.
                또한, 팀원들과의 긴밀한 협업을 통해 실질적이고 창의적인 해결책을 제안하며 프로젝트를 완성했습니다. 이러한 경험은 저에게 기술적 성장뿐 아니라 문제 해결 능력과 팀워크의 중요성을 깊이 깨닫게 해주었습니다.
            </p>
            <p>
                현재 저는 정보처리기사 자격증 취득을 준비 중이며, 1차 시험에 합격하였습니다. 이는 지속적인 자기계발과 목표 달성을 위한 노력의 일환이며, 2차 시험 준비에도 철저히 임하고 있습니다.
                이를 통해 전문성을 더욱 강화하여 다양한 프로그래밍 언어와 데이터베이스 지식을 활용해 효율적인 솔루션을 제공하는 데 기여하고자 합니다.
            </p>
            <p>
                앞으로도 팀원들과의 원활한 협업과 끊임없는 자기 계발을 통해 프로젝트의 성공을 이끌고, 귀사의 성과에 기여하는 인재가 되고자 합니다. 저의 경험과 열정을 바탕으로 귀사에서 더 큰 성장을 이루고 싶습니다.
                감사합니다.
            </p>
        `;
    } else if (section === 'career') {
    sectionContent = `
        <h2>수상이력</h2>
        <h3 style="font-size: 1.5rem; font-weight: normal; margin-bottom: 10px;">교내대회</h3> <!-- 교내대회 추가 -->
        <div class="career-section">
            <table class="info-table">
                <tr>
                    <th style="width: 50px;"></th> <!-- 번호 열 추가 -->
                    <th>대회명</th>
                    <th>수상</th>
                </tr>
                <tr>
                    <td style="text-align: center;">1</td> <!-- 정사각형 번호 추가 -->
                    <td>AI 재난 상상 아이디어톤</td>
                    <td>대상</td>
                </tr>
            </table>
        </div>
    `;
    } else if (section === 'certificates') {
        sectionContent = `
            <h2>자격증</h2>
            <p>정보처리기사</p>
            <p>필기 합격 후, 실기 준비중입니다.</p>
        `;
    } else if (section === 'portfolio') {
    sectionContent = `
        <div class="portfolio-section">
            <div class="post">
                <div class="post-text">
                    <h3>
                        <a href="https://example.com/article1" target="_blank">
                            AI 모델을 활용한 재난 예방 시스템
                        </a>
                    </h3>
                    <p>
                        <a href="https://example.com/article1" target="_blank" style="color: white; text-decoration: none;">
                            화재 감지 및 예방 시스템에 관한 프로젝트로, 딥러닝 기반의 모델을 훈련시켜
                            화재 연기와 공장 연기를 구분하고 초기 단계에서 화재를 감지할 수 있는 프로그램을 구현했습니다.
                        </a>
                    </p>
                </div>
                <div class="post-image">
                    <a href="https://example.com/article1" target="_blank">
                        <img src="images/화재 감지.png" alt="AI 재난 예방 시스템">
                    </a>
                </div>
            </div>
        </div>
    `;
}




    // 섹션 내용을 콘텐츠 영역에 추가
    contentArea.innerHTML += sectionContent;
}

function closeContent() {
    const contentArea = document.getElementById('content-area');
    contentArea.classList.remove('active'); // 콘텐츠 영역 숨기기
    contentArea.innerHTML = ''; // 내용 초기화
}
