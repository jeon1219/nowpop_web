import { Link, useParams } from "react-router-dom";
import { mockPopups } from "../data/mockPopups";
import Badge from "../components/Badge";
import { formatDateRange, statusLabel, statusTone } from "../utils/popupUtils";

export default function PopupDetail({ bookmarks, toggleBookmark }) {
  const { id } = useParams();
  const popup = mockPopups.find((p) => p.id === id);

  if (!popup) {
    return (
      <div style={{ padding: 24, maxWidth: 1040, margin: "0 auto" }}>
        <div style={{ fontWeight: 950, fontSize: 18 }}>존재하지 않는 팝업입니다.</div>
        <Link to="/popups">목록으로</Link>
      </div>
    );
  }

  const isBookmarked = bookmarks.includes(popup.id);
  const tone = statusTone(popup.status);

  return (
    <div style={{ padding: "18px 16px 32px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gap: 14 }}>
        <Link to="/popups" style={{ textDecoration: "none", color: "#555" }}>
          ← 목록으로
        </Link>

        <div
          style={{
            borderRadius: 22,
            overflow: "hidden",
            border: "1px solid var(--line)",
            background: "var(--card)",
            boxShadow: "var(--shadow)",
          }}
        >
          <img
            src={popup.thumbnailUrl}
            alt={popup.title}
            style={{ width: "100%", height: 320, objectFit: "cover" }}
            onError={(e) => {
              e.currentTarget.src = "/fallback.jpg";
            }}
          />

          <div style={{ padding: 18, display: "grid", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Badge tone={tone}>{statusLabel(popup.status)}</Badge>

              <button
                onClick={() => toggleBookmark(popup.id)}
                style={{
                  borderRadius: 14,
                  border: "1px solid rgba(0,0,0,0.12)",
                  background: "#fff",
                  padding: "10px 12px",
                  cursor: "pointer",
                  fontWeight: 950,
                }}
              >
                {isBookmarked ? "★ 북마크됨" : "☆ 북마크"}
              </button>
            </div>

            <div style={{ fontSize: 22, fontWeight: 950 }}>{popup.title}</div>

            <div style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              <div>기간: {formatDateRange(popup.startDate, popup.endDate)}</div>
              <div>시간: {popup.hours}</div>
              <div>
                위치: {popup.city} {popup.district} · {popup.address}
              </div>
            </div>

            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {popup.categories.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>

            <div style={{ marginTop: 6, lineHeight: 1.6 }}>{popup.description}</div>

            {popup.links?.length > 0 && (
              <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
                <div style={{ fontWeight: 950 }}>관련 링크</div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {popup.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        padding: "10px 12px",
                        borderRadius: 14,
                        border: "1px solid rgba(0,0,0,0.12)",
                        fontWeight: 900,
                        background: "#fff",
                      }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div style={{ marginTop: 10, color: "#888", fontSize: 13 }}>
              * 지도 API 연결 시 이 영역에 카카오/네이버 지도 컴포넌트를 넣으면 됩니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
