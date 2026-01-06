import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "24px 16px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gap: 14 }}>
        <div
          style={{
            borderRadius: 22,
            border: "1px solid var(--line)",
            background: "var(--card)",
            padding: 20,
            boxShadow: "var(--shadow)",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 950, lineHeight: 1.15 }}>
            지금 갈 수 있는 팝업,
            <br />
            한 번에 모아보기
          </div>
          <div style={{ marginTop: 10, color: "var(--muted)" }}>
            지역/기간/카테고리로 빠르게 찾아보고 관심 팝업을 저장하세요.
          </div>

          <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link
              to="/popups"
              style={{
                textDecoration: "none",
                padding: "12px 14px",
                borderRadius: 14,
                background: "#111",
                color: "#fff",
                fontWeight: 900,
              }}
            >
              팝업 탐색하기
            </Link>
            <Link
              to="/mypage"
              style={{
                textDecoration: "none",
                padding: "12px 14px",
                borderRadius: 14,
                border: "1px solid rgba(0,0,0,0.12)",
                color: "#111",
                fontWeight: 900,
                background: "#fff",
              }}
            >
              북마크 보기
            </Link>
          </div>
        </div>

        <div style={{ color: "#888", fontSize: 13 }}>
          * 더미 데이터로 UI만 먼저 완성 → 이후 API 붙이면 됩니다.
        </div>
      </div>
    </div>
  );
}
