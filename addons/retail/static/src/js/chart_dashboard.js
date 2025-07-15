/** @odoo-module **/

import { Component, xml, mount } from "@odoo/owl";
import { ChartCard } from "./components/ChartCard";

export class Dashboard extends Component {
  static template = xml`retail.ChartCard`;
  static components = { ChartCard };

  setup() {
    console.log("Mounting Dashboard component!");
    this.chartConfigs = {
      sales: this.getBarConfig(),
      revenue: this.getLineConfig(),
      growth: this.getPieConfig(),
      users: this.getRadarConfig(),
      profit: this.getBarConfig(),
      expenses: this.getLineConfig(),
    };
  }

  getBarConfig() {
    return {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [
          {
            label: "Bar Example",
            data: [12, 19, 3, 5],
            backgroundColor: "rgba(75, 192, 192, 0.5)",
          },
        ],
      },
    };
  }

  getLineConfig() {
    return {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [
          {
            label: "Line Example",
            data: [3, 10, 13, 15],
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 2,
          },
        ],
      },
    };
  }

  getPieConfig() {
    return {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "Pie Example",
            data: [10, 20, 30],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      },
    };
  }

  getRadarConfig() {
    return {
      type: "radar",
      data: {
        labels: ["Speed", "Reliability", "Comfort", "Safety"],
        datasets: [
          {
            label: "Radar Dataset",
            data: [65, 59, 90, 81],
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
          },
        ],
      },
    };
  }
}

// ✅ Mounting safely after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("#chart_dashboard_app");
  if (target) {
    console.log("Mounting Dashboard component...");
    mount(Dashboard, { target });
  } else {
    console.warn("Target DOM element #chart_dashboard_app not found.");
  }
});

// import { Component, xml, mount } from "@odoo/owl";

// class HelloOwl extends Component {
//   static template = "retail.HelloOwl";
// }

// const template = xml`
//   <t t-name="retail.HelloOwl">
//     <div>Hello from Owl</div>
//   </t>
// `;

// // Register the template if not already registered (for standalone usage)
// if (typeof owl !== "undefined" && owl.templates) {
//   owl.templates.addFromString(template);
// }

// // Mount the component to the DOM for demonstration
// document.addEventListener("DOMContentLoaded", () => {
//   const target = document.createElement("div");
//   document.body.appendChild(target);
//   mount(HelloOwl, { target });
// });
