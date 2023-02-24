export function loadTips() {
  return JSON.parse(localStorage.getItem("dicas")) || [];
};