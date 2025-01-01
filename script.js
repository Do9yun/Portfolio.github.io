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
                저는 교내 프로그래밍 대회인 "AI 재난 상상 아이디어톤"에서 대상을 수상한 경험을 통해 기술적 역량과 문제 해결 능력을 증명했습니다. 대회에서 저는 화재 데이터를 기반으로 화재 및 연기를 감지하는 AI 모델을 개발했으며, 특히 화재 연기와 유사한 특성을 가진 구름, 공장 연기 등을 정확히 구분하도록 데이터를 학습시켜 높은 정확도를 달성했습니다. 데이터 수집부터 모델 학습, 평가에 이르는 전 과정을 주도적으로 수행하며, 실질적이고 창의적인 해결책을 제시해 팀원들과 함께 프로젝트를 성공적으로 완성했습니다. 이 경험은 기술적 성과뿐만 아니라 팀워크와 문제 해결 능력의 중요성을 깊이 깨닫게 해주었습니다.
            </p>
            <p>
                이와 함께, 2D 이미지를 PIFuHD로 변환하여 3D 인체 메쉬를 생성하고, OpenCV와 OpenPose를 활용해 신체 부위를 인식하며 실제 신체 치수를 계산하는 프로그램을 제작한 경험도 있습니다. 이 과정에서 Java와 Python을 활용하여 구현했으며, SQLite를 기반으로 데이터를 저장하고 관리하는 기능도 포함시켰습니다. 처음 접했던 인공지능, 딥러닝, 머신러닝 기술을 스스로 학습하여 프로젝트에 적용했고, 이를 통해 기술적 역량을 한층 더 발전시켰습니다. 이러한 경험은 단순한 학습을 넘어 제 기술적 전문성을 입증하는 계기가 되었으며, 이후 수업에서도 큰 도움이 되어 우수한 성적을 받을 수 있었습니다.
            </p>
            <p>
                현재 저는 정보처리기사 자격증 취득을 준비하고 있으며, 1차 시험에 합격하였습니다. 이는 지속적인 자기계발과 목표 달성을 위한 노력의 일환이며, 2차 시험 준비에도 철저히 임하고 있습니다. 이를 통해 전문성을 더욱 강화하여 다양한 프로그래밍 언어와 데이터베이스 지식을 활용해 효율적이고 창의적인 솔루션을 제공하는 데 기여하고자 합니다.
            </p>
            <p>
                앞으로도 팀원들과의 원활한 협업과 끊임없는 자기 계발을 통해 프로젝트의 성공을 이끌고, 귀사의 성과에 기여하는 인재가 되고자 합니다. 저의 경험과 열정을 바탕으로 귀사에서 더 큰 성장을 이루고 싶습니다. 감사합니다.
            </p>
        `;
    } else if (section === 'portfolio') {
    sectionContent = `
        <div class="portfolio-section">
            <div class="post">
                <div class="post-text">
                    <h3>
                        <a href="portfolio1.html" target="_blank">
                            AI 모델을 활용한 재난 예방 시스템
                        </a>
                    </h3>
                    <p>
                        <a href="portfolio1.html" target="_blank">
                        화재 감지 및 예방 시스템에 관한 프로젝트로, 딥러닝 기반의 모델을 훈련시켜
                        화재 연기를 그와 비슷한 다른 연기와 구분하고 초기 단계에서 화재를 감지할 수 있는 프로그램.
                        </a>
                    </p>
                </div>
                <div class="post-image">
                    <a href="portfolio1.html" target="_blank">
                        <img src="images/화재 감지.png" alt="AI 재난 예방 시스템">
                    </a>
                </div>
            </div>
        </div>
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
    } else if (section === 'study') {
    sectionContent = `
        <div class="study-section">
            <div class="post">
                <div class="post-text">
                    <h3>
                        <a href="opencv1.html" target="_blank">
                            OpenCV
                        </a>
                    </h3>
                    <p>
                        <a href="opencv1.html" target="_blank">
                        Python과 OpenCV를 활용한 영상 처리 및 객체지향 프로그래밍 기초 이해.
                        </a>
                    </p>
                </div>
                <div class="post-image">
                    <a href="opencv1.html" target="_blank">
                        <img src="openCV images/openCV 사진.png" alt="OpenCV 관련 이미지">
                    </a>
                </div>
            </div>
            <div class="post">
                <div class="post-text">
                    <h3>
                        <a href="opencv2.html" target="_blank">
                            샘플링과 양자화
                        </a>
                    </h3>
                    <p>
                        <a href="opencv2.html" target="_blank">
                        디지털 이미지를 효율적으로 변환하고 저장하기 위한 핵심 과정인 샘플링과 양자화의 개념과 중요성을 이해.
                        </a>
                    </p>
                </div>
                <div class="post-image">
                    <a href="opencv2.html" target="_blank">
                        <img src="openCV2 images/openCV2.png" alt="샘플링과 양자화 관련 이미지">
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
