/**
 * script.js – renders career milestones into the timeline.
 * Milestone data lives in milestones.js (edit that file to update the timeline).
 */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("timeline");

  if (!container) return;

  // Build timeline items from the milestones array defined in milestones.js
  if (typeof milestones === "undefined" || !Array.isArray(milestones)) return;

  milestones.forEach((milestone) => {
    const item = document.createElement("div");
    item.className = "timeline-item";

    const tagsHtml =
      milestone.tags && milestone.tags.length
        ? `<div class="tags">${milestone.tags
            .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
            .join("")}</div>`
        : "";

    const companyHtml = milestone.company
      ? `<div class="company">${escapeHtml(milestone.company)}</div>`
      : "";

    item.innerHTML = `
      <div class="card">
        <span class="date">${escapeHtml(milestone.date)}</span>
        <h2>${escapeHtml(milestone.title)}</h2>
        ${companyHtml}
        <p class="description">${escapeHtml(milestone.description)}</p>
        ${tagsHtml}
      </div>
    `;

    container.appendChild(item);
  });

  // Animate items into view as they scroll into the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".timeline-item").forEach((el) => {
    observer.observe(el);
  });
});

/** Escape user-supplied strings before inserting into the DOM. */
function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
