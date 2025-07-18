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
- Skeleton loaders were added to enhance UX during data fetches, providing visual placeholders while content loads.

## Screenshots

<img width="1920" height="1635" alt="download" src="https://github.com/user-attachments/assets/933f0630-f8c9-4c7a-941d-cfc4b7b1136b" />
<img width="1920" height="1382" alt="download" src="https://github.com/user-attachments/assets/a0e61d56-0300-47e3-a952-cddca814b78f" />
<img width="1920" height="1107" alt="localhost-3000 (1)" src="https://github.com/user-attachments/assets/6df38b04-a743-48a9-8490-60d108d0fba5" />

<p align="center">
  <img src="https://github.com/user-attachments/assets/6417fb99-87b1-4b55-8ab0-5c332081eee3" width="300" />
  <img src="https://github.com/user-attachments/assets/ae88312d-922e-43fb-afa3-f529c712b875" width="300" />
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/4dd88ec3-fbe2-48a0-ac1f-2d7618d48137" width="300" />
  <img src="https://github.com/user-attachments/assets/ab8f88b6-d799-4c82-9372-59b32957214a" width="300" />
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/52886fa6-b83f-461c-b125-9334e43cab77" width="300" />
</p>

<p align="center">
<img width="500"  alt="2388" src="https://github.com/user-attachments/assets/0744ea17-2571-4281-a5e8-384224df1466" />
<img width="500" height="767" alt="1213" src="https://github.com/user-attachments/assets/27fc6ed1-2db7-4b16-9e82-4493d439aca2" />
</p>

For your convenience, I’ve included the environment variables needed to run the project in a file named .env.example.
It contains the actual values used in development, so you can run the project without needing to request API keys or set anything up manually.
If you’d like to run the repository locally:
Duplicate the .env.example file
Rename it to .env


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
