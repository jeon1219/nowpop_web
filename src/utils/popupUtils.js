export function formatDateRange(start, end) {
  return `${start.replaceAll("-", ".")} ~ ${end.replaceAll("-", ".")}`;
}

export function statusLabel(status) {
  if (status === "ongoing") return "진행중";
  if (status === "upcoming") return "예정";
  return "종료";
}

export function statusTone(status) {
  if (status === "ongoing") return { bg: "#E7F5FF", fg: "#1C7ED6" };
  if (status === "upcoming") return { bg: "#FFF4E6", fg: "#F76707" };
  return { bg: "#F1F3F5", fg: "#495057" };
}
