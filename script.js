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
                <img class="profile-pic" src="images/취업사진.jpg" alt="취업사진">
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
             저는 끊임없는 도전과 학습을 통해 성장하는 것을 중요하게 생각합니다. 대학 생활 동안 시행착오를 겪으며 저의 강점과 약점을 파악하고, 목표를 설정하며 발전해왔습니다. 특히, 인공지능(AI) 분야에 관심을 가지게 되면서 스스로 공부하고 프로젝트를 진행하며 실력을 쌓아왔습니다.         
            </p>
            <p>
             하지만 처음부터 순탄했던 것은 아니었습니다. 1, 2학년 때는 학업에 충분히 집중하지 못해 좋은 성적을 받지 못했습니다. 하지만 시간이 지날수록 미래에 대한 고민과 책임감을 느끼기 시작했고, 3학년이 되면서 학업에 대한 태도를 완전히 바꾸었습니다. 스스로 목표를 설정하고 체계적으로 공부를 진행하면서 학업에 대한 열정을 되찾았고, 그 결과 4학년 2학기에는 전공 과목에서 4.5점 만점을 기록하며 최고의 성과를 달성할 수 있었습니다. 늦게 시작했지만, 끈기와 성실함으로 목표를 향해 노력하면 좋은 결과를 만들어낼 수 있다는 것을 직접 경험하였고, 이를 통해 어떤 환경에서도 포기하지 않고 도전하는 자세를 갖추게 되었습니다.            
            </p>
            <p>
             이러한 태도는 단순히 학업뿐만 아니라 실제 프로젝트 수행 과정에서도 발휘되었습니다. 저는 AI 기반 화재 감지 및 환경 분석 시스템을 개발하는 프로젝트를 수행하였으며, 실시간 데이터 분석과 머신러닝 모델 최적화 과정을 경험하였습니다. 특히, YOLOv8을 활용한 화재 감지 모델을 구축하고, 위성 및 실시간 CCTV 영상을 분석하여 화재 발생 가능성을 탐지하는 기능을 개발하였습니다. 데이터를 수집하고 전처리하는 과정에서 RoboFlow API와 Google Colab을 활용하였으며, 모델의 성능을 향상시키기 위해 혼동 행렬(Confusion Matrix) 분석을 수행하고 지속적인 모델 개선 작업을 진행하였습니다.            
            </p>
            <p>
             또한, 이미지 피라미드(Image Pyramid) 기법을 적용하여 작은 객체 탐지 성능을 개선하고, 기상 데이터와 연계한 화재 확산 예측 기능을 추가하는 과정에서 다양한 시도를 통해 문제를 해결하는 경험을 하였습니다. 프로젝트를 진행하며 기술적 난관에 부딪힐 때마다 해결 방법을 찾기 위해 끊임없이 연구하고 팀원들과 논의하였으며, 결과적으로 프로젝트를 성공적으로 완수할 수 있었습니다.            
            </p>
            <p>
             그 결과, 해당 프로젝트로 참가한 AI 재난 상상아이디어톤에서 대상이라는 최고의 성과를 달성하였습니다. 이 과정에서 문제 해결 능력과 협업의 중요성을 깊이 깨닫게 되었으며, 실제 AI 기술이 재난 예방과 같은 사회적 문제 해결에 기여할 수 있음을 경험하였습니다. 대회에서 수상한 것은 단순한 성과가 아니라, 끊임없는 연구와 협업, 도전하는 자세가 만들어낸 결과였습니다.
            </p>
            <p>
             입사 후에도 저는 이러한 태도를 바탕으로 빠르게 적응하고 업무 역량을 키우기 위해 끊임없이 배우고 노력할 것이며, 맡은 바 업무에서 최고의 결과를 만들어내기 위해 최선을 다할 것입니다. 특히, 데이터 구축과 AI 모델 학습을 위한 효율적인 데이터 관리 체계를 연구하고, 데이터 품질을 향상시키는 방안을 지속적으로 고민하며 발전하는 자세를 유지하겠습니다.
            </p>
            <p>
             저는 단순히 주어진 일을 수행하는 것이 아니라, 스스로 문제를 발견하고 해결하는 능력을 갖춘 인재가 되고 싶습니다. 빠르게 변화하는 AI 기술과 데이터 환경 속에서 지속적으로 학습하고 성장하며, 데이터 기반 AI 서비스 발전에 기여할 수 있도록 최선을 다하겠습니다.
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
    } else if (section === 'skill') {
    sectionContent = `
        <div class="skill-section">
        <!-- Deep Learning 섹션 -->
            <div class="post">
                <div class="post-text">
                    <h3>
                        <a href="Deeplearning.html" target="_blank">Deep Learning</a>
                    </h3>
                    <p>
                        <a href="Deeplearning.html" target="_blank">
                        오늘날 인공지능을 이끄는 첨단 기술중에 하나인 딥러닝에 관해 다룬다. 딥러닝의 기본 모델인 인공 신경망부터 심층 신경망, 콘볼루션 신경망, 순환신경망, 생성적 적대 모델에 대한 기초 원리를 학습하고 활용하는 것을 목표로 한다. 
                        더 나아가 머신러닝에서도 많이 다루었던 분류 및 회귀뿐 아니라, 이미지 분석 등의 딥러닝의 활용 예제를 통해 알고리즘의 이해를 높이고, 프로그래밍 능력을 함양한다.
                        </a>
                    </p>
                </div>
                <div class="post-image">
                    <a href="Deeplearning.html" target="_blank">
                        <img src="images/deeplearning.png" alt="딥러닝 관련 이미지">
                    </a>
                </div>
            </div>
            
            <!-- OpenCV 섹션 -->
            <div class="post">
                <div class="post-text">
                    <h3>
                        <a href="openCV.html" target="_blank">OpenCV</a>
                    </h3>
                    <p>
                        <a href="openCV.html" target="_blank">
                        컴퓨터 비전과 패턴인식은 머신 러닝과 AI에서 가장 활발히 연구되고 있는 분야이며, 자율 주행 자동차, 로봇 공학, 증강 현실 등과 같은 많은 산업 분야에 응용 프로그램이 있다. 
                        기초적인 컴퓨터 비전을 이해하고 여러 산업 분야에서 컴퓨터 비전 및 패턴인식의 다양한 응용에 대해 학습한다.
                        </a>
                    </p>
                </div>
                <div class="post-image">
                    <a href="openCV.html" target="_blank">
                        <img src="images/opencv.png" alt="OpenCV 관련 이미지">
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
