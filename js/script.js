const menuData = [
    { "theme": "매운맛", "keywords": ["매운"], "items": [
        { "name": "불닭볶음면", "type": "배달" }, { "name": "마라탕", "type": "배달" },
        { "name": "낙지볶음", "type": "요리" }, { "name": "매운 갈비찜", "type": "요리" },
        { "name": "떡볶이", "type": "배달" }, { "name": "매운 닭발", "type": "배달" },
        { "name": "매운 라면", "type": "배달" }, { "name": "매운 짬뽕", "type": "배달" },
        { "name": "매운 족발", "type": "배달" }, { "name": "매운 오징어볶음", "type": "요리" }
    ]},
    { "theme": "달달", "keywords": ["달콤", "디저트"], "items": [
        { "name": "케이크", "type": "배달" }, { "name": "아이스크림", "type": "배달" },
        { "name": "푸딩", "type": "요리" }, { "name": "마카롱", "type": "배달" },
        { "name": "과일 샐러드", "type": "요리" }, { "name": "타르트", "type": "요리" },
        { "name": "쿠키", "type": "요리" }, { "name": "브라우니", "type": "요리" },
        { "name": "파이", "type": "요리" }, { "name": "젤리", "type": "요리" }
    ]},
    { "theme": "기름", "keywords": ["기름진", "튀김"], "items": [
        { "name": "피자", "type": "배달" }, { "name": "치킨", "type": "배달" },
        { "name": "짜장면", "type": "배달" }, { "name": "햄버거", "type": "배달" },
        { "name": "탕수육", "type": "배달" }, { "name": "감자튀김", "type": "배달" }
    ]},
    { "theme": "담백", "keywords": ["담백", "깔끔"], "items": [
        { "name": "샐러드", "type": "요리" }, { "name": "비빔밥", "type": "요리" },
        { "name": "두부 요리", "type": "요리" }, { "name": "생선구이", "type": "요리" },
        { "name": "닭가슴살", "type": "요리" }
    ]},
    { "theme": "폭식", "keywords": ["푸짐", "든든"], "items": [
        { "name": "보쌈", "type": "배달" }, { "name": "족발", "type": "배달" },
        { "name": "피자", "type": "배달" }, { "name": "치킨", "type": "배달" },
        { "name": "파스타", "type": "요리" }, { "name": "스테이크", "type": "요리" }
    ]},
    { "theme": "적당히", "keywords": ["적당", "가볍"], "items": [
        { "name": "김밥", "type": "요리" }, { "name": "라면", "type": "배달" },
        { "name": "볶음밥", "type": "요리" }, { "name": "샌드위치", "type": "요리" },
        { "name": "샐러드", "type": "요리" }
    ]},
    { "theme": "가볍게", "keywords": ["가볍", "간단"], "items": [
        { "name": "샐러드", "type": "요리" }, { "name": "시리얼", "type": "요리" },
        { "name": "요거트", "type": "요리" }, { "name": "과일", "type": "요리" },
        { "name": "스프", "type": "요리" }
    ]},
    { "theme": "술안주", "keywords": ["술안주"], "items": [
        { "name": "치킨", "type": "배달" }, { "name": "골뱅이 소면", "type": "배달" },
        { "name": "보쌈", "type": "배달" }, { "name": "닭발", "type": "배달" },
        { "name": "감자튀김", "type": "배달" }
    ]},
    { "theme": "고기", "keywords": ["고기", "육"], "items": [
        { "name": "삼겹살", "type": "요리/배달" }, { "name": "스테이크", "type": "요리" },
        { "name": "갈비찜", "type": "요리" }, { "name": "불고기", "type": "요리" },
        { "name": "닭갈비", "type": "요리/배달" }
    ]},
    { "theme": "해산물", "keywords": ["해산물", "생선"], "items": [
        { "name": "회", "type": "배달" }, { "name": "초밥", "type": "배달" },
        { "name": "해물찜", "type": "요리/배달" }, { "name": "조개구이", "type": "요리" },
        { "name": "생선구이", "type": "요리" }
    ]},
    { "theme": "치킨", "keywords": ["치킨"], "items": [
        { "name": "후라이드 치킨", "type": "배달" }, { "name": "양념 치킨", "type": "배달" },
        { "name": "간장 치킨", "type": "배달" }, { "name": "매운 치킨", "type": "배달" },
        { "name": "순살 치킨", "type": "배달" }
    ]},
    { "theme": "채식", "keywords": ["채식", "비건"], "items": [
        { "name": "비빔밥", "type": "요리" }, { "name": "샐러드", "type": "요리" },
        { "name": "두부 요리", "type": "요리" }, { "name": "채소볶음", "type": "요리" },
        { "name": "콩국수", "type": "요리" }
    ]},
    { "theme": "위로", "keywords": ["위로", "따뜻함"], "items": [
        { "name": "죽", "type": "배달/요리" }, { "name": "스프", "type": "요리" },
        { "name": "칼국수", "type": "배달/요리" }, { "name": "곰탕", "type": "배달/요리" },
        { "name": "따뜻한 차", "type": "요리" }
    ]},
    { "theme": "기념", "keywords": ["특별", "고급"], "items": [
        { "name": "스테이크", "type": "요리" }, { "name": "파스타", "type": "요리" },
        { "name": "랍스터", "type": "배달" }, { "name": "초밥", "type": "배달" },
        { "name": "와인", "type": "배달" }
    ]},
    { "theme": "힘", "keywords": ["힘", "활력"], "items": [
        { "name": "삼겹살", "type": "요리/배달" }, { "name": "곱창", "type": "배달" },
        { "name": "장어", "type": "요리/배달" }, { "name": "육회", "type": "배달" },
        { "name": "비빔밥", "type": "요리" }
    ]},
    { "theme": "다이어트", "keywords": ["다이어트", "저칼로리"], "items": [
        { "name": "샐러드", "type": "요리" }, { "name": "닭가슴살", "type": "요리" },
        { "name": "고구마", "type": "요리" }, { "name": "삶은 계란", "type": "요리" },
        { "name": "그린 스무디", "type": "요리" }
    ]},
    { "theme": "한식", "keywords": ["한식"], "items": [
        { "name": "비빔밥", "type": "요리" }, { "name": "김치찌개", "type": "요리" },
        { "name": "된장찌개", "type": "요리" }, { "name": "불고기", "type": "요리" },
        { "name": "갈비찜", "type": "요리" }
    ]},
    { "theme": "이국적", "keywords": ["이국적"], "items": [
        { "name": "파스타", "type": "요리" }, { "name": "스시", "type": "배달" },
        { "name": "팟타이", "type": "요리" }, { "name": "타코", "type": "요리" },
        { "name": "피자", "type": "배달" }
    ]},
    { "theme": "패스트푸드", "keywords": ["패스트푸드"], "items": [
        { "name": "햄버거", "type": "배달" }, { "name": "피자", "type": "배달" },
        { "name": "치킨", "type": "배달" }, { "name": "감자튀김", "type": "배달" },
        { "name": "탄산음료", "type": "배달" }
    ]},
    { "theme": "분식", "keywords": ["분식"], "items": [
        { "name": "떡볶이", "type": "배달" }, { "name": "라면", "type": "배달" },
        { "name": "김밥", "type": "요리" }, { "name": "순대", "type": "배달" },
        { "name": "튀김", "type": "배달" }
    ]},
    { "theme": "국물", "keywords": ["국물", "따뜻"], "items": [
        { "name": "김치찌개", "type": "요리" }, { "name": "된장찌개", "type": "요리" },
        { "name": "라면", "type": "배달" }, { "name": "칼국수", "type": "배달/요리" },
        { "name": "어묵탕", "type": "배달/요리" }
    ]},
    { "theme": "시원", "keywords": ["시원", "차가운"], "items": [
        { "name": "냉면", "type": "배달" }, { "name": "콩국수", "type": "요리" },
        { "name": "팥빙수", "type": "배달" }, { "name": "아이스 아메리카노", "type": "배달" },
        { "name": "수박", "type": "요리" }
    ]},
    { "theme": "볶음밥", "keywords": ["볶음밥"], "items": [
        { "name": "김치볶음밥", "type": "요리" }, { "name": "새우볶음밥", "type": "요리" },
        { "name": "계란볶음밥", "type": "요리" }, { "name": "참치마요 덮밥", "type": "요리" },
        { "name": "불고기 덮밥", "type": "요리" }
    ]},
    { "theme": "샐러드날씨", "keywords": ["상큼", "가벼운"], "items": [
        { "name": "샐러드", "type": "요리" }, { "name": "리코타 치즈 샐러드", "type": "요리" },
        { "name": "닭가슴살 샐러드", "type": "요리" }, { "name": "카프레제 샐러드", "type": "요리" },
        { "name": "과일 샐러드", "type": "요리" }
    ]},
    { "theme": "혼밥", "keywords": ["혼밥", "1인분"], "items": [
        { "name": "김밥", "type": "요리" }, { "name": "컵라면", "type": "배달" },
        { "name": "덮밥", "type": "요리" }, { "name": "볶음밥", "type": "요리" },
        { "name": "토스트", "type": "요리" }
    ]},
    { "theme": "친구", "keywords": ["함께", "여럿이"], "items": [
        { "name": "떡볶이", "type": "배달" }, { "name": "치킨", "type": "배달" },
        { "name": "피자", "type": "배달" }, { "name": "보쌈", "type": "배달" },
        { "name": "파스타", "type": "요리" }
    ]},
    { "theme": "가족", "keywords": ["가족"], "items": [
        { "name": "갈비찜", "type": "요리" }, { "name": "불고기", "type": "요리" },
        { "name": "비빔밥", "type": "요리" }, { "name": "닭볶음탕", "type": "요리" },
        { "name": "월남쌈", "type": "요리" }
    ]},
    { "theme": "데이트", "keywords": ["데이트", "로맨틱"], "items": [
        { "name": "파스타", "type": "요리" }, { "name": "스테이크", "type": "요리" },
        { "name": "초밥", "type": "배달" }, { "name": "와인", "type": "배달" },
        { "name": "분위기 좋은 레스토랑", "type": "외식" }
    ]},
    { "theme": "넉넉", "keywords": ["고급", "다양"], "items": [
        { "name": "랍스터", "type": "배달" }, { "name": "스테이크", "type": "요리" },
        { "name": "스시 오마카세", "type": "외식" }, { "name": "프렌치 코스", "type": "외식" },
        { "name": "킹크랩", "type": "배달" }
    ]},
    { "theme": "적당", "keywords": ["합리적", "일반적"], "items": [
        { "name": "김치찌개", "type": "요리" }, { "name": "파스타", "type": "요리" },
        { "name": "피자", "type": "배달" }, { "name": "치킨", "type": "배달" },
        { "name": "볶음밥", "type": "요리" }
    ]},
    { "theme": "절약", "keywords": ["저렴", "간단"], "items": [
        { "name": "라면", "type": "배달" }, { "name": "김밥", "type": "요리" },
        { "name": "토스트", "type": "요리" }, { "name": "편의점 도시락", "type": "배달" },
        { "name": "주먹밥", "type": "요리" }
    ]},
    { "theme": "가성비", "keywords": ["가성비", "저렴"], "items": [
        { "name": "백반", "type": "외식" }, { "name": "뷔페", "type": "외식" },
        { "name": "국밥", "type": "외식" }, { "name": "스파게티", "type": "요리(저렴재료)" },
          { "name": "짜장면", "type": "배달" }
    ]},
    { "theme": "건강식", "keywords": ["건강", "웰빙"], "items": [
        { "name": "샐러드", "type": "요리" }, { "name": "닭가슴살", "type": "요리" },
        { "name": "두부", "type": "요리" }, { "name": "채소", "type": "요리" },
        { "name": "과일", "type": "요리" }
    ]},
    { "theme": "치팅데이", "keywords": ["치팅데이", "맘껏"], "items": [
        { "name": "피자", "type": "배달" }, { "name": "햄버거", "type": "배달" },
        { "name": "치킨", "type": "배달" }, { "name": "파스타", "type": "요리" },
        { "name": "아이스크림", "type": "배달" }
    ]},
    { "theme": "단백질", "keywords": ["단백질"], "items": [
        { "name": "닭가슴살", "type": "요리" }, { "name": "스테이크", "type": "요리" },
        { "name": "연어", "type": "요리/배달" }, { "name": "계란", "type": "요리" },
        { "name": "콩", "type": "요리" }
    ]},
    { "theme": "소화", "keywords": ["소화", "부드러운"], "items": [
        { "name": "죽", "type": "요리/배달" }, { "name": "스프", "type": "요리" },
        { "name": "미음", "type": "요리" }, { "name": "요거트", "type": "요리" },
        { "name": "과일", "type": "요리" }
    ]},
    { "theme": "저녁", "keywords": ["저녁"], "items": [
        { "name": "김치찌개", "type": "요리" }, { "name": "파스타", "type": "요리" },
        { "name": "삼겹살", "type": "요리/배달" }, { "name": "비빔밥", "type": "요리" },
        { "name": "닭볶음탕", "type": "요리" }
    ]},
    { "theme": "야식", "keywords": ["야식"], "items": [
        { "name": "치킨", "type": "배달" }, { "name": "피자", "type": "배달" },
        { "name": "라면", "type": "배달" }, { "name": "떡볶이", "type": "배달" },
        { "name": "족발", "type": "배달" }
    ]},
    { "theme": "아점", "keywords": ["아점", "브런치"], "items": [
        { "name": "샌드위치", "type": "요리" }, { "name": "토스트", "type": "요리" },
        { "name": "오믈렛", "type": "요리" }, { "name": "샐러드", "type": "요리" },
        { "name": "브런치 세트", "type": "외식" }
    ]},
    { "theme": "간식", "keywords": ["간식"], "items": [
        { "name": "떡볶이", "type": "배달" }, { "name": "튀김", "type": "배달" },
        { "name": "과자", "type": "구매" }, { "name": "빵", "type": "구매" },
        { "name": "아이스크림", "type": "구매" }
    ]}
];

const preferenceButtons = document.querySelectorAll('.preference-section button');
const menuListDiv = document.getElementById('menu-list');
let selectedPreferences = {};

preferenceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const preferenceType = button.closest('.preference-section').id.replace('-preference', '');
        const preferenceValue = button.dataset.preference;

        // 선택된 버튼 스타일 변경 및 다른 버튼 선택 해제 (단일 선택)
        button.parentNode.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');
        selectedPreferences[preferenceType] = preferenceValue;

        recommendMenu();
    });
});

function recommendMenu() {
    menuListDiv.innerHTML = '';
    let matchedMenus = [];

    if (Object.keys(selectedPreferences).length === 0) {
        menuListDiv.innerHTML = '<p>당신의 취향을 알려주세요! 😋</p>';
        return;
    }

    menuData.forEach(menuItem => {
        let match = true;
        for (const prefType in selectedPreferences) {
            if (selectedPreferences.hasOwnProperty(prefType)) {
                const selectedValue = selectedPreferences[prefType];
                if (!menuItem.keywords.includes(selectedValue)) {
                    match = false;
                    break;
                }
            }
        }
        if (match) {
            matchedMenus = matchedMenus.concat(menuItem.items);
        }
    });

    if (matchedMenus.length > 0) {
        const uniqueMenus = [...new Set(matchedMenus.map(m => m.name))];
        uniqueMenus.forEach(menuName => {
            const menuDetail = matchedMenus.find(m => m.name === menuName);
            const p = document.createElement('p');
            p.textContent = `${menuName} (${menuDetail.type === '배달' ? '배달 🛵' : '요리 🍳'})`;
            menuListDiv.appendChild(p);
        });
         // "카카오톡 보내기" 버튼 추가
         const kakaoButton = document.createElement('button');
         kakaoButton.textContent = '😋 이 메뉴 어때? 카톡 보내기';
         kakaoButton.id = 'kakao-share-button';
         kakaoButton.addEventListener('click', shareOnKakao);
         menuListDiv.appendChild(kakaoButton);

    } else {
        menuListDiv.innerHTML = '<p>음... 딱 맞는 메뉴가 없네요. 다른 걸 골라볼까요? 🤔</p>';
    }
}

function shareOnKakao() {
    const selectedMenuText = Array.from(menuListDiv.querySelectorAll('p'))
        .map(p => p.textContent)
        .join(', ');

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: '✨ 맛잘알 가이드가 추천하는 오늘의 저녁 메뉴! ✨',
            description: `오늘 당신에게 딱 맞는 메뉴는 바로바로~!\n\n${selectedMenuText}\n\n이 메뉴 어때요? 😋`,
            imageUrl: 'https://blog.kakaocdn.net/dn/dzWmzX/btsLNAaXJvJ/n2T2tzushSqMFCgqkjnEKK/img.webp',
            link: {
                mobileWebUrl: window.location.href,
                webUrl: window.location.href,
            },
        },
        buttons: [
            {
                title: '나도 추천 받으러 가기',
                link: {
                    mobileWebUrl: window.location.href,
                    webUrl: window.location.href,
                },
            },
        ],
    });
}

// 카카오톡 SDK 초기화 (API 키 필요)
Kakao.init('70a1b0749e2970a8672d26e7193c3f62');

