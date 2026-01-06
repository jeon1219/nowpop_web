export const mockPopups = [
  {
    id: "p1",
    title: "캐릭터 굿즈 팝업",
    status: "ongoing", // ongoing | upcoming | ended
    startDate: "2026-01-03",
    endDate: "2026-01-20",
    city: "서울",
    district: "성수",
    address: "서울 성동구 연무장길 00",
    categories: ["캐릭터", "굿즈"],
    thumbnailUrl:
      "https://images.unsplash.com/photo-1520975682031-a1b5c4b13d3c?auto=format&fit=crop&w=1200&q=60",
    description:
      "한정 굿즈와 포토존이 있는 캐릭터 팝업입니다. 주말은 웨이팅이 있을 수 있어요.",
    hours: "11:00 - 20:00",
    links: [{ label: "인스타그램", url: "https://instagram.com" }],
  },
  {
    id: "p2",
    title: "디저트 브랜드 팝업",
    status: "upcoming",
    startDate: "2026-01-10",
    endDate: "2026-02-02",
    city: "서울",
    district: "홍대",
    address: "서울 마포구 와우산로 00",
    categories: ["푸드", "디저트"],
    thumbnailUrl:
      "https://images.unsplash.com/photo-1514516873439-d295ea16d1bb?auto=format&fit=crop&w=1200&q=60",
    description: "시그니처 디저트 시식 + 한정 패키지 판매. 오픈런 주의!",
    hours: "12:00 - 21:00",
    links: [{ label: "공식 페이지", url: "https://example.com" }],
  },
  {
    id: "p3",
    title: "패션 협업 팝업",
    status: "ended",
    startDate: "2025-12-01",
    endDate: "2025-12-20",
    city: "부산",
    district: "해운대",
    address: "부산 해운대구 달맞이길 00",
    categories: ["패션"],
    thumbnailUrl:
      "https://images.unsplash.com/photo-1520975913233-0b68f5b2f85b?auto=format&fit=crop&w=1200&q=60",
    description: "콜라보 라인 체험 및 선착순 사은품 이벤트가 있었습니다.",
    hours: "10:30 - 19:30",
    links: [],
  },
];
