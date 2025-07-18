# Nuxt 3 Responsive Dashboard

A responsive dashboard built with **Nuxt 3**, **Tailwind CSS**, and **shadcn-vue**. All charts are built using **custom SVG** — no charting libraries used.

---

## Live Demo

[🔗 View Demo](https://xyris-dashboard-task.onrender.com)

---

## Responsive Behavior

- **Desktop**: Sidebar is always visible
- **Tablet/Mobile**: Sidebar becomes a hamburger menu
- **Cards**: Stack vertically on small screens, display in grid on larger ones

---

## Tech Stack

- Nuxt 3 with Composition API
- Tailwind CSS for styling
- shadcn-vue for UI components
- No external charting libraries (pure SVG)

---

## Component Structure

The project uses a simple, modular structure. All components are reusable and grouped by purpose:

- `StatsCard.vue` – Reusable metric card (label, value, icon)
- `ChartPlaceholder.vue` – Combines two charts
- `DonutChart.vue` – SVG-based donut chart with hover interaction
- `TrafficChart.vue` – SVG line chart with animated stroke and tooltip
- `RecentActivity.vue` – Activity list with time formatting and "load more"
- `Sidebar.vue` / `MobileSidebar.vue` – Responsive sidebar
- `Header.vue` – Top nav/header
- `SettingsModal.vue` – Example modal using shadcn-vue

---

## API Integration

Data is fetched from **JSONBin.io** via public API keys (stored in `.env`):

- Donut & traffic chart data
- User stats (auto-increments visits on load)
- Recent activity feed

## Screenshots

<img width="1920" height="1635" alt="download" src="https://github.com/user-attachments/assets/933f0630-f8c9-4c7a-941d-cfc4b7b1136b" />
<img width="1920" height="1382" alt="download" src="https://github.com/user-attachments/assets/a0e61d56-0300-47e3-a952-cddca814b78f" />
![WhatsApp Image 2025-07-18 at 06 10 14_fd2946a8](https://github.com/user-attachments/assets/e5e39ae3-551f-4cdd-99d9-73699cc33ee7)
![WhatsApp Image 2025-07-18 at 06 10 13_ff6eee78](https://github.com/user-attachments/assets/a788edc5-a6a3-4122-b9a2-bcd606d7096b)
![WhatsApp Image 2025-07-18 at 06 10 13_22b4f8b7](https://github.com/user-attachments/assets/e237b9db-6803-45d6-821e-526c12220f08)
![WhatsApp Image 2025-07-18 at 06 10 13_d86e0058](https://github.com/user-attachments/assets/6e9dc909-807f-4923-9cbd-8d2827d2e303)
![WhatsApp Image 2025-07-18 at 06 10 14_5a89810a](https://github.com/user-attachments/assets/e563a348-32b8-4d4f-87d8-0c86b144789d)





---
## Folder Structure

| Path                     | Description                             |
|--------------------------|-----------------------------------------|
| `components/Header/`     | Top navigation bar                      |
| `components/Sidebar/`    | Sidebar and mobile sidebar              |
| `components/Card/`       | Stats cards                             |
| `components/Charts/`     | Donut and traffic charts (SVG-based)    |
| `components/Activity/`   | Recent activity feed                    |
| `components/Modals/`     | Modals like Settings                    |
| `components/ui/`         | UI components from `shadcn-vue`         |
| `layouts/default.vue`    | Main layout with sidebar and header     |
| `pages/Home.vue`         | Main dashboard page                     |
