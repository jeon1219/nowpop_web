import { Link } from "react-router-dom";
import { mockPopups } from "../data/mockPopups";
import PopupCard from "../components/PopupCard";

export default function MyPage({ bookmarks, toggleBookmark }) {
  const items = mockPopups.filter((p) => bookmarks.includes(p.id));

  return (
    <div style={{ padding: "18px 16px 32px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gap: 14 }}>
        <div style={{ fontSize: 20, fontWeight: 950 }}>북마크</div>

        {items.length === 0 ? (
          <div style={{ color: "var(--muted)" }}>
            아직 저장한 팝업이 없어요. <Link to="/popups">팝업 탐색</Link>에서 저장해보세요.
          </div>
        ) : (
          <div
            className="grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 14,
            }}
          >
            {items.map((p) => (
              <PopupCard
                key={p.id}
                popup={p}
                isBookmarked={true}
                onToggleBookmark={toggleBookmark}
              />
            ))}
          </div>
        )}

        <style>{`
          @media (max-width: 980px) {
            .grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          }
          @media (max-width: 640px) {
            .grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </div>
  );
}
