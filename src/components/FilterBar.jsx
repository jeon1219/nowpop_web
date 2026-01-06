export default function FilterBar({
  query, setQuery,
  status, setStatus,
  city, setCity,
  category, setCategory,
}) {
  const base = {
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(0,0,0,0.12)",
    outline: "none",
    background: "#fff",
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.4fr 0.6fr 0.6fr 0.8fr",
        gap: 10,
        padding: 12,
        borderRadius: 16,
        border: "1px solid var(--line)",
        background: "var(--card)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
      }}
    >
     <div
  style={{
    position: "relative",
    width: "100%",
  }}
>
      {/* 돋보기 아이콘 */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#555"              // 색 명확하게
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          position: "absolute",
          left: 12,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,                // ⭐ 핵심
          pointerEvents: "none",
        }}
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      {/* 검색 input */}
      <input
        style={{
          ...base,
          width: "100%",
          paddingLeft: 44,          // ⭐ 아이콘 공간 확보
          position: "relative",
          zIndex: 1,
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="팝업명/지역/태그 검색"
      />
    </div>



      <select style={base} value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="all">상태(전체)</option>
        <option value="ongoing">진행중</option>
        <option value="upcoming">예정</option>
        <option value="ended">종료</option>
      </select>

      <select style={base} value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="all">지역(전체)</option>
        <option value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="대구">대구</option>
        <option value="인천">인천</option>
      </select>

      <select style={base} value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">카테고리(전체)</option>
        <option value="캐릭터">캐릭터</option>
        <option value="굿즈">굿즈</option>
        <option value="푸드">푸드</option>
        <option value="디저트">디저트</option>
        <option value="패션">패션</option>
        <option value="전시">전시</option>
      </select>
    </div>
  );
}
