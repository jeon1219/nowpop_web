import { Link, NavLink } from "react-router-dom";

const navStyle = ({ isActive }) => ({
  padding: "8px 10px",
  borderRadius: 10,
  textDecoration: "none",
  color: isActive ? "#111" : "#555",
  background: isActive ? "rgba(0,0,0,0.06)" : "transparent",
  fontWeight: 700,
});

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "rgba(255,255,255,0.86)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <div style={{ fontSize: 18, fontWeight: 900 }}>NowPop</div>
            <div style={{ fontSize: 12, color: "#777" }}>팝업 스토어 모아보기</div>
          </div>
        </Link>

        <nav style={{ display: "flex", gap: 8 }}>
          <NavLink to="/popups" style={navStyle}>
            팝업 탐색
          </NavLink>
          <NavLink to="/mypage" style={navStyle}>
            북마크
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
