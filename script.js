function showContent(section) {
    const contentArea = document.getElementById('content-area');

    if (section === 'intro') {
        const password = prompt('비밀번호를 입력하세요:');
        if (password !== '1202') {
            alert('비밀번호가 틀렸습니다.');
            return;
        }
    }

    const sections = {
        intro: `
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

            <div class="career-section">
                <h2>경력 사항</h2>
                <table class="info-table">
                    <tr>
                        <th>회사명</th>
                        <th>입사일</th>
                        <th>재직상태</th>
                    </tr>
                    <tr>
                        <td>TTA (한국정보통신기술협회)</td>
                        <td>2025.03</td>
                        <td>재직중</td>
                    </tr>
                </table>
            </div>

            <div class="education-section">
                <h2>학력 사항</h2>
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
                        <td>AI소프트웨어학과</td>
                        <td>졸업예정</td>
                    </tr>
                </table>
            </div>

            <div class="military-section">
                <h2>병역 사항</h2>
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
        `,

        resume: `
        <div class="resume-section">
        <div class="cover-letter">
            <h2>자기소개서</h2>
            <p>
                서비스의 완성도는 개발이 아닌 검증에서 결정된다고 생각합니다. 저는 사용자 입장에서 문제를 발견하고 
                서비스 품질을 높이는 과정에 흥미를 느껴 QA 직무를 선택하게 되었고, 현재 관련 업무를 수행하며 그 중요성을 직접 경험하고 있습니다.
            </p>
            <p>
                실무에서는 웹 기반 시스템의 기능 검증과 결함 관리를 담당하며 다양한 유형의 오류를 확인해왔습니다. 
                단순히 기능 동작 여부를 확인하는 것을 넘어 실제 사용자 환경을 고려하여 테스트를 진행하였고, 
                그 과정에서 UI와 데이터 불일치, 삭제 후 반영 지연, 권한과 기능 접근이 맞지 않는 문제 등을 발견한 경험이 있습니다.
            </p>
            <p>
                특히 테스트를 수행하면서 예상하지 못한 부분에서 발생하는 결함을 발견할 때 가장 큰 흥미를 느꼈습니다. 
                단순히 테스트 케이스를 수행하는 것이 아니라, 서비스 흐름을 이해하고 다양한 상황을 가정하며 접근할 때 더 많은 문제를 찾을 수 있다는 것을 깨달았습니다. 
                이러한 과정에서 QA는 단순 확인 작업이 아니라 서비스 완성도를 높이는 핵심 역할이라는 확신을 가지게 되었습니다.
            </p>
            <p>
                장비 삭제 이후에도 기존 연결 정보가 유지되는 오류나, 이미지 변경 후 새로고침을 해야 반영되는 UI 문제 역시 사용자 관점에서 발견한 사례입니다. 
                해당 문제들은 사용자에게 혼란을 줄 수 있는 요소라고 판단하여 재현 절차와 영향 범위를 포함한 결함 리포트를 작성하였고, 개발자와의 협업을 통해 개선까지 이어질 수 있도록 했습니다.
            </p>
            <p>
                또한 Postman을 활용한 API 검증과 JMeter를 통한 성능 테스트를 수행하며 기능 테스트를 넘어 시스템 관점에서도 품질을 확인하고자 노력했습니다. 
                테스트 케이스 설계, 입력값 검증, 예외 처리 및 경계값 테스트를 수행하면서 보다 체계적인 QA 방식에 대해 고민하게 되었습니다.
            </p>
            <p>
                이전에는 AI 기반 화재 감지 프로젝트를 진행하며 데이터와 결과의 정확도를 검증하는 경험을 했고, 이를 통해 ‘동작하는 것’과 ‘정확하게 동작하는 것’의 차이를 이해하게 되었습니다. 
                이러한 경험은 현재 QA 업무를 수행하는 데 있어 문제를 더 깊이 있게 바라보는 데 도움이 되고 있습니다.
            </p>
            <p>
                저는 단순히 테스트를 수행하는 QA가 아니라, 예상하지 못한 문제까지 찾아내고 그 원인을 분석하는 QA가 되고자 합니다. 
                앞으로는 기능 테스트를 넘어 성능, 보안, 자동화 테스트까지 역량을 확장하여 서비스 품질을 전반적으로 책임질 수 있는 QA 엔지니어로 성장하겠습니다.
            </p>
        </div>
        
        `,

        portfolio: `
            <div class="portfolio-section">
                <div class="post">
                    <div class="post-text">
                        <h3>
                            <a href="portfolio1.html" target="_blank">AI 모델을 활용한 재난 예방 시스템</a>
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

                <div class="post">
                    <div class="post-text">
                        <h3>
                            <a href="portfolio2.html" target="_blank">S/W QA 품질 검증 프로젝트</a>
                        </h3>
                        <p>
                            <a href="portfolio2.html" target="_blank">
                                웹 서비스 ‘내 프로필 수정 기능’을 대상으로 기능 테스트, 사용성 테스트, 보안 테스트,
                                성능 테스트를 수행한 프로젝트입니다. 테스트 케이스 설계부터 결함 도출, 재검증,
                                회귀 테스트까지 QA 전 과정을 수행하였으며 Invicti, Postman, JMeter를 활용하여
                                보안 및 성능 검증까지 진행하였습니다.
                            </a>
                        </p>
                    </div>
                    <div class="post-image">
                        <a href="portfolio2.html" target="_blank">
                            <img src="images/QA.png" alt="QA 프로젝트">
                        </a>
                    </div>
                </div>
            </div>
        `,

        career: `
            <h2>수상이력</h2>
            <h3 style="font-size: 1.5rem; font-weight: normal; margin-bottom: 10px;">교내대회</h3>
            <div class="career-section">
                <table class="info-table">
                    <tr>
                        <th style="width: 50px;"></th>
                        <th>대회명</th>
                        <th>수상</th>
                    </tr>
                    <tr>
                        <td style="text-align: center;">1</td>
                        <td>AI 재난 상상 아이디어톤</td>
                        <td>대상</td>
                    </tr>
                </table>
            </div>
        `,

        certificates: `
            <h2>자격증</h2>
            <p>정보처리기사</p>
            <p>필기 합격 후, 실기 준비중입니다.</p>
        `,

        skill: `
            <div class="skill-section">
                <div class="post">
                    <div class="post-text">
                        <h3>
                            <a href="Deeplearning.html" target="_blank">Deep Learning</a>
                        </h3>
                        <p>
                            <a href="Deeplearning.html" target="_blank">
                                오늘날 인공지능을 이끄는 첨단 기술중에 하나인 딥러닝에 관해 다룬다.
                                딥러닝의 기본 모델인 인공 신경망부터 심층 신경망, 콘볼루션 신경망, 순환신경망,
                                생성적 적대 모델에 대한 기초 원리를 학습하고 활용하는 것을 목표로 한다.
                                더 나아가 머신러닝에서도 많이 다루었던 분류 및 회귀뿐 아니라,
                                이미지 분석 등의 딥러닝의 활용 예제를 통해 알고리즘의 이해를 높이고,
                                프로그래밍 능력을 함양한다.
                            </a>
                        </p>
                    </div>
                    <div class="post-image">
                        <a href="Deeplearning.html" target="_blank">
                            <img src="images/deeplearning.png" alt="딥러닝 관련 이미지">
                        </a>
                    </div>
                </div>

                <div class="post">
                    <div class="post-text">
                        <h3>
                            <a href="openCV.html" target="_blank">OpenCV</a>
                        </h3>
                        <p>
                            <a href="openCV.html" target="_blank">
                                컴퓨터 비전과 패턴인식은 머신 러닝과 AI에서 가장 활발히 연구되고 있는 분야이며,
                                자율 주행 자동차, 로봇 공학, 증강 현실 등과 같은 많은 산업 분야에 응용 프로그램이 있다.
                                기초적인 컴퓨터 비전을 이해하고 여러 산업 분야에서 컴퓨터 비전 및 패턴인식의
                                다양한 응용에 대해 학습한다.
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
        `
    };

    const sectionContent = sections[section] || '<p>준비 중입니다.</p>';

    contentArea.classList.add('active');
    contentArea.innerHTML = `
        <button class="close-button" onclick="closeContent()">X</button>
        ${sectionContent}
    `;
}

function closeContent() {
    const contentArea = document.getElementById('content-area');
    contentArea.classList.remove('active');
    contentArea.innerHTML = '';
}
