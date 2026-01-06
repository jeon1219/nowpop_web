import { Link } from "react-router-dom";
import Badge from "./Badge";
import { formatDateRange, statusLabel, statusTone } from "../utils/popupUtils";

export default function PopupCard({ popup, isBookmarked, onToggleBookmark }) {
  const tone = statusTone(popup.status);

  return (
    <div
      style={{
        borderRadius: 18,
        overflow: "hidden",
        border: "1px solid var(--line)",
        background: "var(--card)",
        boxShadow: "var(--shadow)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={popup.thumbnailUrl}
          alt={popup.title}
          style={{ width: "100%", height: 180, objectFit: "cover" }}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/fallback.jpg";
          }}
        />


        <div style={{ position: "absolute", top: 12, left: 12 }}>
          <Badge tone={tone}>{statusLabel(popup.status)}</Badge>
        </div>

        <button
          onClick={() => onToggleBookmark(popup.id)}
          title="북마크"
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            borderRadius: 999,
            border: "1px solid rgba(0,0,0,0.12)",
            background: "rgba(255,255,255,0.92)",
            padding: "8px 10px",
            cursor: "pointer",
            fontWeight: 900,
          }}
        >
          {isBookmarked ? "★" : "☆"}
        </button>
      </div>

      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontSize: 16, fontWeight: 900, lineHeight: 1.2 }}>
          {popup.title}
        </div>

        <div style={{ fontSize: 13, color: "var(--muted)" }}>
          {formatDateRange(popup.startDate, popup.endDate)} · {popup.city} {popup.district}
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {popup.categories.map((c) => (
            <Badge key={c}>{c}</Badge>
          ))}
        </div>

        <Link
          to={`/popups/${popup.id}`}
          style={{
            marginTop: 4,
            textDecoration: "none",
            textAlign: "center",
            padding: "10px 12px",
            borderRadius: 12,
            border: "1px solid rgba(0,0,0,0.12)",
            fontWeight: 800,
            color: "#111",
          }}
        >
          상세보기
        </Link>
      </div>
    </div>
  );
}
