// auth.js - Shared Session Guard, Dynamic Logout, and Role-Based Access Control (RBAC)

(function () {
    const user = localStorage.getItem("user");
    const role = localStorage.getItem("role");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // 1. Session Guard (Redirect to login if session missing)
    if (!user && currentPage !== "login.html") {
        alert("Access Denied: Please login first.");
        window.location.href = "login.html";
        return;
    }

    // 2. Page-level Authorization Check (Block direct URL entry)
    let allowed = true;
    if (user && currentPage !== "login.html" && currentPage !== "dashboard.html") {
        if (role === "Dispatcher") {
            if (["vehicle_reg.html", "maintenance.html", "fuel_expenses.html", "settings.html"].includes(currentPage)) {
                allowed = false;
            }
        } else if (role === "Safety Officer") {
            if (["trip_dispatcher.html", "fuel_expenses.html", "report.html", "settings.html"].includes(currentPage)) {
                allowed = false;
            }
        } else if (role === "Financial Analyst") {
            if (["vehicle_reg.html", "drivers_profile.html", "trip_dispatcher.html", "maintenance.html"].includes(currentPage)) {
                allowed = false;
            }
        }
    }

    if (!allowed) {
        alert("Access Denied: Your role (" + role + ") is not authorized to access this page.");
        window.location.href = "dashboard.html";
        return;
    }

    // 3. UI Modifications (Hiding menu buttons & handling page details on load)
    document.addEventListener("DOMContentLoaded", () => {
        applyRBAC();
        setupLogout();
        displayRoleInfo();
    });

    function applyRBAC() {
        if (!role) return;

        const menu = document.querySelector(".menu");
        if (!menu) return;

        const buttons = menu.querySelectorAll("button, a");
        buttons.forEach(btn => {
            const onclickAttr = btn.getAttribute("onclick") || "";
            const hrefAttr = btn.getAttribute("href") || "";
            const actionText = (onclickAttr + hrefAttr).toLowerCase();
            let btnTarget = "";

            if (actionText.includes("dashboard.html")) btnTarget = "dashboard";
            else if (actionText.includes("vehicle_reg.html")) btnTarget = "vehicle";
            else if (actionText.includes("drivers_profile.html")) btnTarget = "driver";
            else if (actionText.includes("trip_dispatcher.html")) btnTarget = "dispatcher";
            else if (actionText.includes("maintenance.html")) btnTarget = "maintenance";
            else if (actionText.includes("fuel_expenses.html")) btnTarget = "fuel";
            else if (actionText.includes("report.html")) btnTarget = "report";
            else if (actionText.includes("settings.html")) btnTarget = "settings";

            let hasAccess = true;

            if (role === "Dispatcher") {
                if (["vehicle", "maintenance", "fuel", "settings"].includes(btnTarget)) {
                    hasAccess = false;
                }
            } else if (role === "Safety Officer") {
                if (["dispatcher", "fuel", "report", "settings"].includes(btnTarget)) {
                    hasAccess = false;
                }
            } else if (role === "Financial Analyst") {
                if (["vehicle", "driver", "dispatcher", "maintenance"].includes(btnTarget)) {
                    hasAccess = false;
                }
            }

            if (!hasAccess) {
                btn.style.display = "none";
            }
        });

        // Hide modify/add buttons from unprivileged roles (Safety Officer and Financial Analyst)
        if (role === "Safety Officer" || role === "Financial Analyst") {
            const actions = document.querySelectorAll(".add, button[onclick^='add']");
            actions.forEach(act => act.style.display = "none");
        }
    }

    function setupLogout() {
        const logoutBtn = document.querySelector(".logout");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", () => {
                localStorage.removeItem("user");
                localStorage.removeItem("role");
                alert("Logging out...");
                window.location.href = "login.html";
            });
        }
    }

    function displayRoleInfo() {
        // Find logo area and append role tag
        const logo = document.querySelector(".logo");
        if (logo && role) {
            const badge = document.createElement("div");
            badge.style.marginTop = "10px";
            badge.style.padding = "6px 12px";
            badge.style.background = "rgba(0, 255, 204, 0.15)";
            badge.style.color = "#00ffcc";
            badge.style.borderRadius = "20px";
            badge.style.fontSize = "12px";
            badge.style.fontWeight = "bold";
            badge.style.textAlign = "center";
            badge.textContent = role;
            logo.appendChild(badge);
        }
    }
})();
