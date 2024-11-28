// 페이지 내용 정의
const pages = {
  main: `
    <div id="orders">
      <button id="orderButton" class="button">인기순</button>
      <div id="orderMenu" class="dropdown-content"></div>
      <button id="locationButton" class="button">지역 전체</button>
      <div id="locationMenu" class="dropdown-content"></div>
    </div>
    <div id="list">
      <div class="card seoul" id="toDetail">
        <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24013619_p.gif" />
        <p class="title">스윙 데이즈_암호명 A</p>
        <p class="location">충무아트센터 대극장</p>
        <p class="date">2024.11.19 ~ 2025.2.9</p>
      </div>
      <div class="card seoul">
        <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24011935_p.gif" />
        <p class="title">광화문연가</p>
        <p class="location">디큐브 링크아트센터</p>
        <p class="date">2024.10.23 ~ 2025.1.5</p>
      </div>
      <div class="card seoul">
        <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24013564_p.gif" />
        <p class="title">틱틱붐</p>
        <p class="location">coex 신한카드 artium</p>
        <p class="date">2024.11.16 ~ 2025.2.2</p>
      </div>
      <div class="card gyeongsang">
        <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24015347_p.gif" />
        <p class="title">시카고 - 부산</p>
        <p class="location">부산시민회관 대극장</p>
        <p class="date">2024.12.14 ~ 12.22</p>
      </div>
      <div class="card seoul">
        <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24010566_p.gif" />
        <p class="title">리지</p>
        <p class="location">두산아트센터 연강홀</p>
        <p class="date">2024.9.14 ~ 12.1</p>
      </div>
      <div class="card seoul">
        <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24006709_p.gif" />
        <p class="title">빨래</p>
        <p class="location">인터파크 유니플렉스 2관</p>
        <p class="date">2024.6.7 ~ 12.29</p>
      </div>
      <div class="card seoul">
        <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24014894_p.gif" />
        <p class="title">킹키부츠</p>
        <p class="location">블루스퀘어 신한카드홀</p>
        <p class="date">2024.9.7 ~ 11.10</p>
      </div>
      <div class="card gyeongsang">
        <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24014894_p.gif" />
        <p class="title">킹키부츠 - 부산</p>
        <p class="location">부산 드림씨어터</p>
        <p class="date">2024.11.23 ~ 12.1</p>
      </div>
      <div class="card seoul">
        <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24014618_p.gif" />
        <p class="title">여신님이 보고 계셔</p>
        <p class="location">인터파크 유니플렉스 1관</p>
        <p class="date">2024.11.26 ~ 2025.3.3</p>
      </div>
      <div class="card seoul">
        <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24013928_p.gif" />
        <p class="title">지킬앤하이드 - 20주년</p>
        <p class="location">블루스퀘어 신한카드홀</p>
        <p class="date">2024.11.29 ~ 2025.5.18</p>
      </div>
      <div class="card seoul">
        <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24014885_p.gif" />
        <p class="title">시라노</p>
        <p class="location">예술의전당 CJ 토월극장</p>
        <p class="date">2024.12.6 ~ 2025.2.23</p>
      </div>
      <div class="card seoul">
        <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24011675_p.gif" />
        <p class="title">부치하난</p>
        <p class="location">홍익대 대학로 아트센터 대극장</p>
        <p class="date">2024.9.17 ~ 11.17</p>
      </div>
      <div class="card seoul">
        <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24013832_p.gif" />
        <p class="title">쿠로이 저택엔 누가 살고 있을까?</p>
        <p class="location">플러스씨어터</p>
        <p class="date">2024.10.29 ~ 2025.1.19</p>
      </div>
      <div class="card seoul">
        <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24012498_p.gif" />
        <p class="title">알라딘</p>
        <p class="location">샤롯데씨어터</p>
        <p class="date">2024.11.22 ~ 2025.6.22</p>
      </div>
      <div class="card seoul">
        <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24014511_p.gif" />
        <p class="title">이프덴</p>
        <p class="location">홍익대 대학로 아트센터 대극장</p>
        <p class="date">2024.12.3 ~ 2025.3.2</p>
      </div>
    </div>
  `,
  detail: `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <div class="about">
      <div>
        <p class="title">스윙 데이즈_암호명 A</p>
        <div style="display: flex">
          <div style="display: flex; flex-direction: column">
            <img class="thumbnail" src="https://ticketimage.interpark.com/Play/image/large/24/24013619_p.gif" />
            <img id="share" src="https://cdn-icons-png.flaticon.com/128/4460/4460552.png" />
          </div>
          <div class="info">
            <div>
              <p class="label">장소</p>
              <p>충무아트센터 대극장</p>
            </div>
            <div>
              <p class="label">공연기간</p>
              <p>2024.11.19 ~ 2025.02.09</p>
            </div>
            <div>
              <p class="label">공연시간</p>
              <p>160분(인터미션 20분 포함)</p>
            </div>
            <div>
              <p class="label">관람연령</p>
              <p>8세 이상 관람 가능</p>
            </div>
            <div>
              <p class="label">가격</p>
              <div style="flex-direction: column">
                <p>VIP석 170,000원</p>
                <p>R석&nbsp;&nbsp; 140,000원</p>
                <p>S석&nbsp;&nbsp; 110,000원</p>
                <p>A석&nbsp;&nbsp; 80,000원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="calendar-wrapper">
        <div id="calendar"></div>
        <div id="show-info">
          <div style="display: flex; flex-direction: row">
            <p class="label">공연 시간</p>
            <p id="show-time"></p>
          </div>
          <div>
            <p class="label">좌석수</p>
            <p id="show-seats"></p>
          </div>
          <div class="divider"></div>
          <div>
            <p class="label">출연진</p>
            <p id="show-casts"></p>
          </div>
        </div>
        <button id="book">예매하기</button>
      </div>
    </div>
  `,
  mypage: `
    <table id="reservationTable" border="1" style="border-collapse: collapse;">
      <thead>
        <tr>
          <th>예약번호</th>
          <th>유저아이디</th>
          <th>뮤지컬제목</th>
          <th>날짜</th>
          <th>좌석정보</th>
          <th>수정</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    <input type="file" id="uploadCSV" accept=".csv">
  `
};

// 현재 페이지를 로드하는 함수
function loadPage(page) {
  document.getElementById("body").innerHTML = pages[page];

  // 페이지 전환 버튼 이벤트 설정
  if (page === 'main') {
    document.getElementById("toDetail").addEventListener("click",
      () => loadPage('detail'));

    // 정렬 순서 드롭다운 메뉴
    const orderButton = document.getElementById("orderButton");
    const orderMenu = document.getElementById("orderMenu");

    const orders = ["인기순", "예매율순", "리뷰 많은순", "최신순"];

    function updateOrderDropdownMenu(selectedOrder) {
      orderMenu.innerHTML = "";

      const options = orders.filter(order => order !== selectedOrder);

      options.forEach(order => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("option");
        optionButton.textContent = order;
        optionButton.dataset.order = order;

        optionButton.addEventListener("click", () => {
          orderButton.textContent = order;
          updateOrderDropdownMenu(order);
          orderMenu.classList.remove("show");
        });

        orderMenu.appendChild(optionButton);
      });
    }

    orderButton.addEventListener("click", () => {
      orderMenu.classList.toggle("show");
    });

    window.addEventListener("click", (event) => {
      if (!orderButton.contains(event.target) && !orderMenu.contains(
        event.target)) {
        orderMenu.classList.remove("show");
      }
    });

    updateOrderDropdownMenu("인기순");

    // 지역 설정 드롭다운 메뉴
    const locationButton = document.getElementById("locationButton");
    const locationMenu = document.getElementById("locationMenu");

    const locations = ["지역 전체", "서울", "경기", "전라", "경상", "충청", "제주"];
    const classMap = {
      "서울": "seoul",
      "경기": "gyeonggi",
      "전라": "jeolla",
      "경상": "gyeongsang",
      "충청": "chungcheong",
      "제주": "jeju",
    };

    function updateLocationDropdownMenu(selectedLocation) {
      locationMenu.innerHTML = "";

      const options = locations.filter(
        location => location !== selectedLocation);

      options.forEach(location => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("option");
        optionButton.textContent = location;
        optionButton.dataset.location = location;

        optionButton.addEventListener("click", () => {
          locationButton.textContent = location;
          updateLocationDropdownMenu(location);
          locationMenu.classList.remove("show");

          filterCardsByLocation(location);
        });

        locationMenu.appendChild(optionButton);
      });
    }

    // 지역에 따른 카드 필터링
    function filterCardsByLocation(location) {
      const cards = document.querySelectorAll(".card");

      cards.forEach(card => {
        if (location === "지역 전체") {
          card.style.display = "block";
        } else {
          const className = classMap[location];
          if (card.classList.contains(className)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        }
      });
    }

    locationButton.addEventListener("click", () => {
      locationMenu.classList.toggle("show");
    });

    window.addEventListener("click", (event) => {
      if (!locationButton.contains(event.target) && !locationMenu.contains(
        event.target)) {
        locationMenu.classList.remove("show");
      }
    });

    updateLocationDropdownMenu("지역 전체");
  } else if (page === 'detail') {
    const showData = [
      {
        time: "15:00",
        seats: [{VIP: 49}, {R: 33}, {S: 123}, {A: 147}],
        casts: ["민우혁", "이창용", "정상훈", "김려원", "장현성", "이지숙", "오진영"]
      },
      {
        time: "19:30",
        seats: [{VIP: 119}, {R: 45}, {S: 107}, {A: 144}],
        casts: ["신성록", "김건우", "정상훈", "이아름솔", "장현성", "이지숙", "유보영"]
      },
      {
        time: "19:30",
        seats: [{VIP: 70}, {R: 25}, {S: 91}, {A: 98}],
        casts: ["유준상", "이창용", "하도권", "이아름솔", "성기윤", "이지숙", "오진영"]
      }
    ];

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/flatpickr";

    script.onload = () => {
      let today = new Date();

      if (today.getDay() === 1) {
        today.setDate(today.getDate() + 1);
      }

      flatpickr("#calendar", {
        inline: true, // 달력 UI만 표시
        dateFormat: "Y-m-d",
        defaultDate: today,
        monthSelectorType: "static",
        minDate: today,
        maxDate: "2025-02-09",
        disable: [
          function (date) {
            return (date.getDay() === 1);
          }
        ],
        locale: {
          firstDayOfWeek: 0,
          weekdays: {
            shorthand: ['일', '월', '화', '수', '목', '금', '토'],
            longhand: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
          },
          months: {
            shorthand: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월',
              '10월', '11월', '12월'],
            longhand: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월',
              '10월', '11월', '12월'],
          },
        },
        onReady: (selectedDates, dateStr, instance) => {
          const calendarWrapper = instance.calendarContainer;

          // '관람일' 제목 추가
          const title = document.createElement('div');
          title.classList.add('calendar-title');
          title.textContent = '관람일';
          calendarWrapper.prepend(title);

          // 상단 날짜 형식 변경 (YYYY.MM)
          const currentMonthYear = calendarWrapper.querySelector(
            '.flatpickr-current-month');

          function updateMonthYear() {
            const year = instance.currentYear; // Flatpickr에서 현재 연도 가져오기
            const month = String(instance.currentMonth + 1).padStart(2, '0'); // 0부터 시작하므로 +1
            currentMonthYear.textContent = `${year}.${month}`;
          }

          updateMonthYear();

          // 월 이동 시 날짜 형식 업데이트
          instance.config.onMonthChange.push(updateMonthYear);
          instance.config.onYearChange.push(updateMonthYear);

          // 연도 화살표 숨기기
          const numInputWrapper = calendarWrapper.querySelector(
            '.numInputWrapper');
          if (numInputWrapper) {
            numInputWrapper.style.display = 'none';
          }

          function styleCalendar() {
            const days = calendarWrapper.querySelectorAll('.flatpickr-day');
            const minDate = instance.config.minDate;
            const maxDate = instance.config.maxDate;

            days.forEach(day => {
              const dayDate = day.dateObj;

              // 일요일이면 빨간색으로 설정
              if (dayDate >= minDate && dayDate <= maxDate && dayDate.getDay()
                === 0) {
                day.style.color = 'red';
              }

              // 현재 달이 아닌 날짜는 숨기기 (추가 요청 사항)
              if (day.dateObj.getMonth() !== instance.currentMonth) {
                day.style.visibility = 'hidden';
              } else {
                day.style.visibility = 'visible';
              }
            });
          }

          styleCalendar();

          // 월 변경 시 다시 스타일 적용
          instance.config.onMonthChange.push(styleCalendar);
          instance.config.onYearChange.push(styleCalendar);

          // 날짜 선택 시 스타일 적용
          instance.config.onChange.push(styleCalendar);

          // 관람일 선택 후 공연 정보 표시
          const showTime = document.getElementById("show-time");
          const showSeats = document.getElementById("show-seats");
          const showCasts = document.getElementById("show-casts");

          // 페이지 로드 시 기본 날짜에 대한 공연 정보 표시
          const defaultDate = instance.selectedDates[0] || new Date(
            "2024-11-19");
          const showIndex = defaultDate.getDate() % 3;  // 날짜 % 3으로 공연 정보 선택

          // 공연 정보 업데이트
          const show = showData[showIndex];
          showTime.textContent = `${show.time}`;
          showSeats.textContent = `VIP석 ${show.seats[0].VIP} / R석 ${show.seats[1].R} / S석 ${show.seats[2].S} / A석 ${show.seats[3].A}`;
          showCasts.textContent = `${show.casts.join(", ")}`;

          instance.config.onChange.push(
            function (selectedDates, dateStr, instance) {
              // 선택한 날짜에 따라 공연 정보 표시
              const selectedDate = selectedDates[0] || new Date("2024-11-19");
              const showIndex = selectedDate.getDate() % 3; // 날짜 % 3으로 공연 정보 선택

              // 공연 정보 업데이트
              const show = showData[showIndex];
              showTime.textContent = `${show.time}`;
              showSeats.textContent = `VIP석 ${show.seats[0].VIP} / R석 ${show.seats[1].R} / S석 ${show.seats[2].S} / A석 ${show.seats[3].A}`;
              showCasts.textContent = `${show.casts.join(", ")}`;
            });
        }
      });
    };
    document.body.appendChild(script);

    // '예매하기' 버튼 클릭 시 팝업창 열기
    document.getElementById('book').addEventListener('click', () => {
      const popupWidth = 1149;
      const popupHeight = 902;
      const left = (window.innerWidth - popupWidth) / 2;
      const top = (window.innerHeight - popupHeight) / 2;

      const selectedDate = document.querySelector("#calendar")._flatpickr.selectedDates[0];
      let formattedDate = '';

      if (selectedDate) {
        // 하루 뒤 날짜 계산
        const nextDay = new Date(selectedDate);
        nextDay.setDate(nextDay.getDate() + 1);

        // YYYY-MM-DD 형식으로 변환
        formattedDate = nextDay.toISOString().split('T')[0];
      }

      // 팝업창 열기
      window.open(
        `seatSelection.html?date=${formattedDate}`,
        '_blank',
        `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes`
      );
    });
  } else if (page === 'mypage') {
    document.getElementById("mypage").addEventListener("click", () => {
      document.getElementById("uploadCSV").click();
    });

    // CSV 파일 업로드 후 예약 데이터를 읽어오는 함수
    document.getElementById("uploadCSV").addEventListener("change",
      readReservationsCSV);

    function readReservationsCSV(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = function (e) {
        const csvData = e.target.result;
        const rows = csvData.split('\n');
        const tableBody = document.querySelector('#reservationTable tbody');
        tableBody.innerHTML = '';

        // CSV 데이터를 테이블에 표시
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i].split(',');
          if (row.length < 5) continue;

          const newRow = tableBody.insertRow();
          row.forEach((cellData, index) => {
            const cell = newRow.insertCell();
            cell.textContent = cellData;
          });

          // 수정 버튼 추가
          const editCell = newRow.insertCell();
          const editButton = document.createElement('button');
          editButton.textContent = '수정';
          editButton.addEventListener('click', () => editReservation(newRow));
          editCell.style.textAlign = 'center';
          editButton.style.cursor = 'pointer';
          editCell.appendChild(editButton);
        }
      };
    }

    // 예약 데이터 수정 함수
    function editReservation(row) {
      const cells = row.querySelectorAll('td');
      for (let i = 1; i < cells.length - 1; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = cells[i].textContent;
        cells[i].textContent = '';
        cells[i].appendChild(input);
      }

      const saveButton = document.createElement('button');
      saveButton.textContent = '저장';
      saveButton.addEventListener('click',
        () => saveReservation(row, saveButton));
      saveButton.style.cursor = 'pointer';
      row.cells[row.cells.length - 1].appendChild(saveButton);
    }

    // 수정된 데이터 저장 함수
    function saveReservation(row, saveButton) {
      const cells = row.querySelectorAll('td input');
      cells.forEach((input, index) => {
        const cell = row.cells[index + 1];
        cell.textContent = input.value;
      });

      // 저장 버튼 제거
      saveButton.remove();

      // 수정된 데이터를 CSV로 저장
      exportTableToCSV('reservations.csv');
    }

    // 테이블 데이터를 CSV 파일로 내보내는 함수
    function exportTableToCSV(filename) {
      const table = document.getElementById('reservationTable');
      let csvContent = '\uFEFF'; // UTF-8 BOM 추가

      // 테이블 헤더
      const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent).join(',');
      csvContent += headers + '\n';

      // 테이블 데이터 행
      const rows = table.querySelectorAll('tbody tr');
      rows.forEach(row => {
        const rowData = Array.from(row.querySelectorAll('td')).map(td => td.textContent);
        csvContent += rowData.join(',') + '\n';
      });

      // CSV 다운로드
      const hiddenElement = document.createElement('a');
      hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);
      hiddenElement.target = '_blank';
      hiddenElement.download = filename;
      hiddenElement.click();
    }
  }
}

// 초기 페이지 로드
loadPage('main');

document.getElementById("logo").addEventListener("click", () => loadPage('main'));
document.getElementById("mypage").addEventListener("click", () => loadPage('mypage'));
