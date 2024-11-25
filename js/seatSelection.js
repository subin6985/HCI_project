// 좌석 데이터 (0: 예약 가능, 1: 이미 예약됨)
// 좌석 데이터 생성 함수
function generateSeats() {
  const seatData = [];

  // 좌석 생성
  for (let floor = 1; floor <= 3; floor++) {
    let rowCount = (floor === 1) ? 20 : (floor === 2) ? 6 : 8;
    for (let row = 1; row <= rowCount; row++) {
      const rowSeats = Array(34).fill(0);
      for (let i = 0; i < 34; i++) {
        rowSeats[i] = Math.random() > 0.8 ? 1 : 0;
      }
      seatData.push({ floor, row, seats: rowSeats });
    }
  }

  return seatData;
}

// 좌석 데이터 생성
const seatData = generateSeats();
let selectedSeats = [];

// 구역별 잔여 좌석 수 카운트
function countRemainingSeats() {
  const seatCounts = {
    'VIP석 1층 왼쪽 블록 7열 이내': 0,
    'VIP석 1층 중앙 블록 7열 이내': 0,
    'VIP석 1층 오른쪽 블록 7열 이내': 0,
    'VIP석 1층 왼쪽 블록 8~20열': 0,
    'VIP석 1층 중앙 블록 8~20열': 0,
    'VIP석 1층 오른쪽 블록 8~20열': 0,
    'R석 1층 왼쪽 블록 7열 이내': 0,
    'R석 1층 오른쪽 블록 7열 이내': 0,
    'R석 1층 왼쪽 블록 8~20열': 0,
    'R석 1층 오른쪽 블록 8~20열': 0,
    'R석 1층 중앙 블록': 0,
    'R석 2층 왼쪽 블록': 0,
    'R석 2층 중앙 블록': 0,
    'R석 2층 오른쪽 블록': 0,
    'S석 2층 왼쪽 블록': 0,
    'S석 3층 중앙 블록': 0,
    'S석 3층 오른쪽 블록': 0,
    'S석 3층 왼쪽 블록': 0,
    'S석 3층 중앙 블록': 0,
    'S석 3층 오른쪽 블록': 0,
    'A석 3층 왼쪽 블록': 0,
    'A석 2층 중앙 블록': 0,
    'A석 2층 오른쪽 블록': 0
  };

  seatData.forEach(({ floor, row, seats }) => {
    seats.forEach((seat, index) => {
      if (seat === 0) { // 예약 가능한 좌석일 경우
        // 각 좌석 등급에 맞는 조건을 체크
        if (floor === 1 && row <= 7 && index < 9) seatCounts['VIP석 1층 왼쪽 블록 7열 이내']++;
        if (floor === 1 && row <= 7 && index >= 9 && index < 26) seatCounts['VIP석 1층 중앙 블록 7열 이내']++;
        if (floor === 1 && row <= 7 && index >= 26) seatCounts['VIP석 1층 오른쪽 블록 7열 이내']++;
        if (floor === 1 && row > 7 && row <= 20 && index < 9) seatCounts['VIP석 1층 왼쪽 블록 8~20열']++;
        if (floor === 1 && row > 7 && row <= 20 && index >= 9 && index < 26) seatCounts['VIP석 1층 중앙 블록 8~20열']++;
        if (floor === 1 && row > 7 && row <= 20 && index >= 26) seatCounts['VIP석 1층 오른쪽 블록 8~20열']++;
        if (floor === 1 && row <= 7 && index < 9) seatCounts['R석 1층 왼쪽 블록 7열 이내']++;
        if (floor === 1 && row <= 7 && index >= 26) seatCounts['R석 1층 오른쪽 블록 7열 이내']++;
        if (floor === 1 && row > 7 && row <= 20 && index < 9) seatCounts['R석 1층 왼쪽 블록 8~20열']++;
        if (floor === 1 && row > 7 && row <= 20 && index >= 26) seatCounts['R석 1층 오른쪽 블록 8~20열']++;
        if (floor === 1 && row <= 20 && index >= 9 && index < 26) seatCounts['R석 1층 중앙 블록']++;
        if (floor === 2 && row <= 6 && index < 9) seatCounts['R석 2층 왼쪽 블록']++;
        if (floor === 2 && row <= 6 && index >= 9 && index < 26) seatCounts['R석 2층 중앙 블록']++;
        if (floor === 2 && row <= 6 && index >= 26) seatCounts['R석 2층 오른쪽 블록']++;
        if (floor === 2 && row <= 6 && index < 9) seatCounts['S석 2층 왼쪽 블록']++;
        if (floor === 3 && row <= 8 && index < 9) seatCounts['S석 3층 왼쪽 블록']++;
        if (floor === 3 && row <= 8 && index >= 9 && index < 26) seatCounts['S석 3층 중앙 블록']++;
        if (floor === 3 && row <= 8 && index >= 26) seatCounts['S석 3층 오른쪽 블록']++;
        if (floor === 3 && row <= 8 && index < 9) seatCounts['S석 3층 왼쪽 블록']++;
        if (floor === 3 && row <= 8 && index >= 9 && index < 26) seatCounts['S석 3층 중앙 블록']++;
        if (floor === 3 && row <= 8 && index >= 26) seatCounts['S석 3층 오른쪽 블록']++;
        if (floor === 3 && row <= 8 && index < 9) seatCounts['A석 3층 왼쪽 블록']++;
        if (floor === 2 && row <= 6 && index >= 9 && index < 26) seatCounts['A석 2층 중앙 블록']++;
        if (floor === 2 && row <= 6 && index >= 26) seatCounts['A석 2층 오른쪽 블록']++;
      }
    });
  });

  // 사이드 메뉴에 잔여 좌석 수 표시
  const seatCountsDiv = document.getElementById('seat-counts');
  seatCountsDiv.innerHTML = '';
  Object.keys(seatCounts).forEach(key => {
    const countDiv = document.createElement('div');
    countDiv.style.display = 'flex';
    countDiv.style.justifyContent = 'space-between';
    countDiv.style.alignItems = 'center';
    countDiv.style.marginBottom = '5px';
    countDiv.style.cursor = 'pointer';

    // 색상 표시와 좌석 등급 텍스트를 포함할 래퍼 요소
    const labelDiv = document.createElement('div');
    labelDiv.style.display = 'flex';
    labelDiv.style.alignItems = 'center';

    // 정사각형 색상 표시 (좌석 등급별 색상 지정)
    const colorBox = document.createElement('div');
    colorBox.style.width = '15px';
    colorBox.style.height = '15px';
    colorBox.style.marginRight = '5px';

    // 좌석 등급에 따른 색상 설정
    if (key.includes('VIP석')) {
      colorBox.style.backgroundColor = '#8e43e7';
    } else if (key.includes('R석')) {
      colorBox.style.backgroundColor = '#4caf50';
    } else if (key.includes('S석')) {
      colorBox.style.backgroundColor = '#03a9f4';
    } else if (key.includes('A석')) {
      colorBox.style.backgroundColor = '#ff9800';
    }

    // 좌석 등급 텍스트
    const seatKeyDiv = document.createElement('div');
    seatKeyDiv.textContent = key;

    // 잔여 좌석 수 텍스트
    const seatCountDiv = document.createElement('div');
    seatCountDiv.textContent = `${seatCounts[key]}석`;
    seatCountDiv.style.color = 'red';
    seatCountDiv.style.marginLeft = '5px';

    // 색상 표시와 텍스트를 labelDiv에 추가
    labelDiv.appendChild(colorBox);
    labelDiv.appendChild(seatKeyDiv);

    // 요소들을 countDiv에 추가
    countDiv.appendChild(labelDiv);
    countDiv.appendChild(seatCountDiv);

    // 인원 수 조정 UI
    const controlDiv = document.createElement('div');
    controlDiv.style.display = 'none'; // 초기에는 숨김
    controlDiv.style.marginBottom = '5px';
    controlDiv.style.padding = '5px';
    controlDiv.style.justifyContent = 'space-between';
    controlDiv.style.alignItems = 'center';
    controlDiv.style.backgroundColor = '#E5E5E5';

    // 인원 수 조정 버튼과 표시
    const minusButton = document.createElement('button');
    minusButton.textContent = '-';

    const countSpan = document.createElement('span');
    countSpan.textContent = '1'; // 기본 인원 수 1
    countSpan.style.backgroundColor = '#FFFFFF';
    countSpan.style.width = '130px';
    countSpan.style.textAlign = 'center';

    const plusButton = document.createElement('button');
    plusButton.textContent = '+';

    // 자동배정 버튼
    const autoAssignButton = document.createElement('button');
    autoAssignButton.textContent = '자동배정';
    autoAssignButton.style.marginLeft = '10px';
    autoAssignButton.style.border = 'none';
    autoAssignButton.style.backgroundColor = '#C7261F';
    autoAssignButton.style.color = '#FFFFFF';
    autoAssignButton.style.padding = '5px 10px';
    autoAssignButton.classList.add('auto-assign-button');

    // 인원 수 조정 버튼 클릭 이벤트
    minusButton.addEventListener('click', () => {
      let count = parseInt(countSpan.textContent, 10);
      if (count > 1) {
        countSpan.textContent = count - 1;
      }
    });

    plusButton.addEventListener('click', () => {
      let count = parseInt(countSpan.textContent, 10);
      countSpan.textContent = count + 1;
    });

    // 자동배정 버튼 클릭 이벤트
    autoAssignButton.addEventListener('click', () => {
      const selectedArea = key; // 현재 선택된 좌석 구역
      const requiredCount = parseInt(countSpan.textContent, 10); // 필요한 인원 수
      const assignedSeats = [];

      let seatType = '';
      if (selectedArea.includes('vip')) {
        seatType = 'VIP석';
      } else if (selectedArea.includes('r')) {
        seatType = 'R석';
      } else if (selectedArea.includes('s')) {
        seatType = 'S석';
      } else if (selectedArea.includes('a')) {
        seatType = 'A석';
      }

      for(let i = 0; i < requiredCount; i++) {
        assignedSeats.push([seatType, 1, 1, i + 1]);
      }

      // 연석이 모두 배정된 경우 CSV로 저장
      if (assignedSeats.length === requiredCount) {
        alert(`${requiredCount}석이 자동 배정되었습니다.`);

        const reservationId = '12345';
        const userId = 'user01';
        const musical = '스윙 데이즈_암호명 A';
        const date = '2024-12-01';

        let reservationData = [
          ['예약번호', '유저아이디', '뮤지컬제목', '날짜', '좌석정보']
        ];

        assignedSeats.forEach(seat => {
          const seatInfoText = `${seat[0]} ${seat[1]}층 ${seat[2]}열 ${seat[3]}번`;
          reservationData.push([reservationId, userId, musical, date, seatInfoText]);
        });

        writeReservationCSV(reservationData);

        window.close();
      } else {
        alert('연석이 부족합니다. 다른 구역을 선택해 주세요.');
      }
    });

    // 인원 수 조정 UI를 countDiv에 추가
    const countControlDiv = document.createElement('div');
    countControlDiv.style.display = 'flex';
    countControlDiv.style.alignItems = 'center';

    countControlDiv.appendChild(minusButton);
    countControlDiv.appendChild(countSpan);
    countControlDiv.appendChild(plusButton);

    controlDiv.appendChild(countControlDiv);
    controlDiv.appendChild(autoAssignButton);

    // countDiv 클릭 시 인원 조정 UI 토글
    countDiv.addEventListener('click', () => {
      if (controlDiv.style.display === 'none') {
        controlDiv.style.display = 'flex';
        countDiv.style.backgroundColor = '#E5E5E5';
        countDiv.style.marginBottom = '0';
      } else {
        controlDiv.style.display = 'none';
        countDiv.style.backgroundColor = '#FFFFFF';
        countDiv.style.marginBottom = '5px';
      }
    });

    // 전체 countDiv와 controlDiv를 seatCountsDiv에 추가
    seatCountsDiv.appendChild(countDiv);
    seatCountsDiv.appendChild(controlDiv);
  });
}

// 좌석을 클릭했을 때 해당 좌석 정보 표시
function showSelectedSeatInfo(floor, row, index) {
  const seatInfo = document.getElementById('seat-info');
  const seatDiv = document.querySelector(`.seat[data-floor="${floor}"][data-row="${row}"][data-index="${index}"]`);
  const seatClass = seatDiv.classList;
  let seatType = '';

  if (seatClass.contains('vip')) {
    seatType = 'VIP석';
  } else if (seatClass.contains('r')) {
    seatType = 'R석';
  } else if (seatClass.contains('s')) {
    seatType = 'S석';
  } else if (seatClass.contains('a')) {
    seatType = 'A석';
  }

  // 좌석 선택/취소 처리
  if (seatClass.contains('selected')) {
    // 선택 취소: 선택된 좌석을 리스트에서 제거하고 색상 되돌리기
    selectedSeats = selectedSeats.filter(seat => !(seat.floor === floor && seat.row === row && seat.index === index));
    seatClass.remove('selected');
    seatDiv.style.filter = '';  // 색상 되돌리기
  } else {
    // 선택: 리스트에 추가하고 색상 변경
    selectedSeats.push({ seatType, floor, row, index });
    seatClass.add('selected');
    seatDiv.style.filter = 'brightness(0.7)';  // 색상 어둡게 하기
  }

  seatInfo.innerHTML = '';
  selectedSeats.forEach(seat => {
    const seatLabel = document.createElement('div');
    seatLabel.textContent = `${seat.seatType} | ${seat.floor}층 ${seat.row}열 ${seat.index}번`;
    seatInfo.appendChild(seatLabel);
  });
}

function renderSeats() {
  const seatMap = document.getElementById('seat-map');
  seatMap.innerHTML = '';

  let currentFloor = 0;

  seatData.forEach(({ floor, row, seats }) => {
    // 층이 바뀔 때 층수 표시
    if (floor !== currentFloor) {
      const floorHeader = document.createElement('h3');
      floorHeader.textContent = `${floor}층`;
      floorHeader.style.textAlign = 'center';
      seatMap.appendChild(floorHeader);
      currentFloor = floor;
    }

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('seat-row');

    seats.forEach((seat, index) => {
      const seatDiv = document.createElement('div');
      seatDiv.classList.add('seat');
      seatDiv.classList.add(seat === 1 ? 'occupied' : 'available');

      // 좌석 유형에 따라 색상 지정
      if (floor === 1 && (row <= 4 || (row > 4 && row <= 17 && index >= 5 && index < 29))) {
        seatDiv.classList.add('vip');
      } else if (floor === 1 && row > 4 && (index < 5 || index >= 29)) {
        seatDiv.classList.add('r');
      } else if (floor === 1 && row > 17) {
        seatDiv.classList.add('r');
      } else if (floor === 2 && row <= 4) {
        seatDiv.classList.add('r');
      } else if (floor === 2 || (floor === 3 && row <= 3)) {
        seatDiv.classList.add('s');
      } else {
        seatDiv.classList.add('a');
      }

      if (index === 9) {
        seatDiv.classList.add('left-block');
      } else if (index === 26) {
        seatDiv.classList.add('right-block');
      }

      // 좌석에 data-* 속성 추가
      seatDiv.setAttribute('data-floor', floor);
      seatDiv.setAttribute('data-row', row);
      seatDiv.setAttribute('data-index', index);

      seatDiv.addEventListener('click', () => showSelectedSeatInfo(floor, row, index));

      rowDiv.appendChild(seatDiv);
    });

    seatMap.appendChild(rowDiv);
  });

  countRemainingSeats();
}

function writeReservationCSV(data) {
  const BOM = '\uFEFF';

  let csvContent = BOM + data.map(row => row.join(',')).join('\n');
  let hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'reservations.csv';
  hiddenElement.click();
}

document.getElementById("book-complete").addEventListener("click", () => {
  if (selectedSeats.length === 0) {
    alert("선택된 좌석이 없습니다.");
    return;
  }

  // 예시 사용자 데이터
  const reservationId = '12345';
  const userId = 'user01';
  const musicalTitle = '스윙 데이즈_암호명 A';
  const date = '2024-12-01';

  // 좌석 정보를 CSV 데이터로 추가
  let reservationData = [
    ['예약번호', '유저아이디', '뮤지컬제목', '날짜', '좌석정보']
  ];

  // 선택된 모든 좌석 정보를 추가
  selectedSeats.forEach(seat => {
    const seatInfoText = `${seat.seatType} ${seat.floor}층 ${seat.row}열 ${seat.index}번`;
    reservationData.push([reservationId, userId, musicalTitle, date, seatInfoText]);
  });

  // CSV 파일로 저장
  writeReservationCSV(reservationData);

  window.close();
});


document.addEventListener('DOMContentLoaded', renderSeats);


// 보안문자
const reloadButton = document.getElementById('reload-captcha');
const captchaImage = document.getElementById('code-image');

// 새로고침
reloadButton.addEventListener('click', () => {
  captchaImage.src = 'http://127.0.0.1:5000/generate-captcha?' + new Date().getTime(); // 캐시 방지
  document.getElementById('captcha-input').value = '';
});

document.getElementById('captcha-form').onsubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const response = await fetch('http://127.0.0.1:5000/verify-captcha', {
    method: 'POST',
    body: formData,
    mode: 'cors'
  });

  if (response.ok) {
    document.getElementById('secure').style.visibility = 'hidden';
  } else {
    alert("보안문자가 틀렸습니다. 다시 입력해주세요.");
    // 새 보안문자 요청
    captchaImage.src = 'http://127.0.0.1:5000/generate-captcha?' + new Date().getTime();
    document.getElementById('captcha-input').value = '';
  }
};

// 자음 결합 방지
const input = document.getElementById('captcha-input');

const splitConsonants = (str) => {
  // 복합 자음이 들어있는 목록
  const complexConsonants = {
    'ㅀ': ['ㄹ', 'ㅎ'],
    'ㄶ': ['ㄴ', 'ㅎ'],
    'ㄺ': ['ㄹ', 'ㄱ'],
    'ㄻ': ['ㄹ', 'ㅁ'],
    'ㄼ': ['ㄹ', 'ㅂ'],
    'ㄽ': ['ㄹ', 'ㅅ'],
    'ㄾ': ['ㄹ', 'ㅌ'],
    'ㄿ': ['ㄹ', 'ㅍ'],
    'ㅄ': ['ㅂ', 'ㅅ'],
    'ㄵ': ['ㄴ', 'ㅈ'],
    'ㄳ': ['ㄱ', 'ㅅ'],
  };

  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (complexConsonants[char]) {
      // 복합 자음일 경우 각각 분리하여 결과에 추가
      result += complexConsonants[char].join('');
    } else {
      result += char; // 복합 자음이 아니면 그대로 추가
    }
  }

  return result;
};

input.addEventListener('input', (event) => {
  let value = event.target.value;

  // 자음 결합 분리 함수 적용
  event.target.value = splitConsonants(value);
});
