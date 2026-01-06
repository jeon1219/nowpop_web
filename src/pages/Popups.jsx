import { useMemo, useState } from "react";
import { mockPopups } from "../data/mockPopups";
import FilterBar from "../components/FilterBar";
import PopupCard from "../components/PopupCard";

const norm = (s) => (s ?? "").toLowerCase().trim();

export default function Popups({ bookmarks, toggleBookmark }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [city, setCity] = useState("all");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    const q = norm(query);
    return mockPopups
      .filter((p) => (status === "all" ? true : p.status === status))
      .filter((p) => (city === "all" ? true : p.city === city))
      .filter((p) => (category === "all" ? true : p.categories.includes(category)))
      .filter((p) => {
        if (!q) return true;
        const hay = norm(
          `${p.title} ${p.city} ${p.district} ${p.address} ${p.categories.join(" ")}`
        );
        return hay.includes(q);
      });
  }, [query, status, city, category]);

  return (
    <div style={{ padding: "18px 16px 32px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <div style={{ fontSize: 20, fontWeight: 950 }}>팝업 탐색</div>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>결과: {filtered.length}개</div>
        </div>

        <FilterBar
          query={query} setQuery={setQuery}
          status={status} setStatus={setStatus}
          city={city} setCity={setCity}
          category={category} setCategory={setCategory}
        />

        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 14,
          }}
        >
          {filtered.map((p) => (
            <PopupCard
              key={p.id}
              popup={p}
              isBookmarked={bookmarks.includes(p.id)}
              onToggleBookmark={toggleBookmark}
            />
          ))}
        </div>

        {/* 반응형 */}
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
