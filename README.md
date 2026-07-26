# 🚍 TransitOps — Fleet & Transit Operations Management System

Welcome to **TransitOps**, a modern, interactive, and comprehensive fleet and smart transit operations management system. Developed for the **Odoo Hackathon 2026**, TransitOps provides transport managers, dispatchers, and drivers with a unified interface to streamline scheduling, tracking, maintenance, and expense auditing.

The application features a premium dark-themed dashboard, responsive structures, interactive state tables, and glassmorphic aesthetics.

---

## 🚀 Key Modules & Features

TransitOps consists of several specialized modules designed to address key areas of fleet management:

1. **📊 Dashboard (`dashboard.html`)**
   * A unified analytics control center highlighting operational metrics (Active Vehicles, Scheduled Trips, Monthly Fuel Expenses, and Pending Maintenance).
   * Displays recent activities in real time.
   
2. **🚍 Vehicle Registry (`vehicle_reg.html`)**
   * Fleet inventory tracker where administrators can add, search, and manage vehicles.
   * Details tracked: Registration number, model, vehicle type (e.g., Bus, Truck), capacity (passengers/cargo weight), fuel type, and current status.
   
3. **👨‍✈️ Driver Profiles (`drivers_profile.html`)**
   * Driver directory to manage licenses, contact numbers, active assignments, and availability statuses.
   
4. **🗺 Trip Dispatcher (`trip_dispatcher.html`)**
   * Operational route coordination center to configure routes, assign vehicles and drivers to active dispatches, and track trip progress.
   
5. **🔧 Maintenance (`maintenance.html`)**
   * Maintenance log tracking service records, mechanical issues, vehicle IDs, repair types, servicing costs, and completion status.
   
6. **⛽ Fuel & Expenses (`fuel_expenses.html`)**
   * Expenditure auditor mapping refueling logs, fuel pricing, driver records, and total financial spendings.
   
7. **📈 Reports (`report.html`)**
   * Detailed data logger compiling overall fleet efficiency and performance summaries.
   
8. **⚙ Settings (`settings.html`)**
   * Configuration portal for customizing profile preferences, system notifications, and admin preferences.
   
9. **🔑 Authentication (`login.html`)**
   * A sleek glassmorphic login gate featuring responsive inputs and secure-looking visual styling.

---

## 🛠 Tech Stack

* **Structure & Semantic Layout**: HTML5
* **Styling & Visual Design**: Vanilla CSS3
  * Sleek dark palette (`#0f172a`, `#111827`, `#1e293b`)
  * Electric accent colors (`#00ffcc`, `#38bdf8`)
  * Modern CSS Flexbox and Grid layouts
  * Responsive tables, glassmorphic inputs, and hover animations
* **Logic & Client-Side Interactivity**: Vanilla JavaScript (ES6+)
  * Interactive operations (add vehicles, drivers, or dispatches on the fly)
  * Dynamic search filtration on tables

---

## 💻 How to Run Locally

Since this is a fully client-side prototype application, you can run it directly without installing any database or backend servers:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/brithvik8/Odoo-hackathon-2026.git
   cd Odoo-hackathon-2026
   ```
2. **Open the App**:
   * Open `login.html` in your browser of choice.
   * You can navigate to all other views via the persistent sidebar menu.
