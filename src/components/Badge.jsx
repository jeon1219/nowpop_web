export default function Badge({ children, tone }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 700,
        background: tone?.bg ?? "#F1F3F5",
        color: tone?.fg ?? "#495057",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {children}
    </span>
  );
}
