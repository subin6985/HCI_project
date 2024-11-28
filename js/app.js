document.getElementById("header").innerHTML = `
  <header>
    <div class="left">
      <p id="logo">MuTi</p>
      <input class="search" placeholder="검색어를 입력하세요">
    </div>
    <div class="right">
      <button id="logout">로그아웃</button>
      <button id="mypage">마이페이지</button>
      <button id="languageButton">kor</button><span style="font-size: 10px">▼</span>
      <div id="languageMenu" class="dropdown-content"></div>
    </div>
  </header>
`;

const languageButton = document.getElementById("languageButton");
const languageMenu = document.getElementById("languageMenu");

// 모든 언어 옵션 리스트 (순서 고정)
const languages = ["kor", "eng", "chn", "jpn"];

// 드롭다운 메뉴 업데이트 함수
function updateDropdownMenu(selectedLanguage) {
  // 드롭다운 메뉴 초기화
  languageMenu.innerHTML = "";

  // 선택된 언어를 제외한 나머지 언어 추가
  const options = languages.filter(lang => lang !== selectedLanguage);

  // 언어 옵션을 드롭다운 메뉴에 추가
  options.forEach(lang => {
    const optionButton = document.createElement("button");
    optionButton.classList.add("option");
    optionButton.textContent = lang;
    optionButton.dataset.lang = lang;

    // 언어 옵션 클릭 이벤트
    optionButton.addEventListener("click", () => {
      // 버튼 텍스트 변경
      languageButton.textContent = lang;
      // 드롭다운 메뉴 업데이트
      updateDropdownMenu(lang);
      // 드롭다운 메뉴 닫기
      languageMenu.classList.remove("show");
    });

    languageMenu.appendChild(optionButton);
  });
}

// 드롭다운 버튼 클릭 시 메뉴 토글
languageButton.addEventListener("click", () => {
  languageMenu.classList.toggle("show");
});

// 클릭된 곳이 드롭다운 메뉴 밖이라면 메뉴 숨기기
window.addEventListener("click", (event) => {
  if (!languageButton.contains(event.target) && !languageMenu.contains(event.target)) {
    languageMenu.classList.remove("show");
  }
});

// 초기 드롭다운 메뉴 설정
updateDropdownMenu("kor");


document.getElementById("footer").innerHTML = `
  <footer>
    <div style="height: 127px"></div>
    <p>HCI HW 3</p>
    <p>2020320131 박수빈</p>
    <p>subin6985@korea.ac.kr</p>
  </footer>
`;
