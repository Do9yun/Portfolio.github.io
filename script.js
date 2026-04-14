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
                        <td>졸업</td>
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
                서비스의 품질은 기능 구현 뿐만 아니라 다양한 환경과 조건에서도 안정적으로 동작하는지를 검증하는 과정이 있어야 완성된다고 생각합니다. 
                저는 이러한 관점에서 QA 직무를 선택하였으며, 실제 업무를 수행하며 기능 검증을 넘어 시스템 전반의 품질을 분석하고 개선하는 역할의 중요성을 체감해왔습니다
            </p>
            <p>
                실무에서는 다양한 소프트웨어를 대상으로 기능 검증 및 결함 관리 업무를 수행하고 있습니다. 
                요구사항을 기반으로 테스트 범위를 정의하고, 사용자 시나리오와 시스템 흐름을 고려한 테스트 케이스를 설계하여 정상 동작뿐 아니라 예외 상황, 경계 조건, 상태 변화까지 포함한 검증을 진행했습니다. 
                단순히 기능 실행 여부를 확인하는 것이 아니라, 데이터 흐름과 상태값 변화까지 함께 분석하며 품질을 검증해왔습니다.
            </p>
            <p>
                특히 API 요청·응답 구조를 기반으로 데이터 정합성을 확인하고, 상태값 변화 시점에 따라 발생하는 불일치 문제를 식별하는 과정에서 QA 업무의 핵심 역량을 쌓을 수 있었습니다. 
                또한 JMeter를 활용한 부하 테스트를 통해 정상 환경에서는 드러나지 않던 응답 지연 및 상태 반영 문제를 검증하며, 성능 저하 상황에서의 품질 이슈를 확인한 경험이 있습니다.
            </p>
            <p>
                이러한 검증 과정에서 데이터 정합성 문제, 상태 관리 로직 오류, 권한 제어 미흡, 예외 처리 누락 등 다양한 결함을 식별하였으며, 단순 증상 기록이 아닌 재현 조건, 발생 원인, 영향 범위를 기반으로 결함을 정의하고 개선에 기여했습니다. 
                특히 문제를 단순 오류로 보지 않고 사용자 경험과 데이터 신뢰성 측면에서 분석하는 것을 중요하게 생각하고 있습니다.
            </p>
            <p>
                또한 보안 취약점 분석 도구를 활용한 입력값 검증 및 파일 업로드 구간 점검을 수행하며 기능 테스트를 넘어 보안 관점에서도 품질을 검증했습니다. 
                이와 함께 다양한 OS 및 가상화 환경에서 테스트 환경을 구성하며 실제 서비스 환경과 유사한 조건에서 검증을 수행해왔습니다.
            </p>
            <p>
                이전에는 AI 기반 프로젝트를 통해 결과의 정확성을 검증하며 ‘동작하는 것’과 ‘정확하게 동작하는 것’의 차이를 경험한 바 있으며, 이러한 경험은 현재 QA 업무 수행 시 결과를 보다 구조적으로 분석하는 데 도움이 되고 있습니다.
            </p>
            <p>
                앞으로는 기능 검증에 그치지 않고 성능, 보안, 자동화 테스트까지 역량을 확장하여 시스템 전반의 품질을 관리할 수 있는 QA 엔지니어로 성장하고자 합니다. 
                다양한 조건에서도 안정적으로 동작하는 서비스를 만드는 데 기여하는 QA 엔지니어로서 지속적으로 성장해 나가겠습니다.
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
