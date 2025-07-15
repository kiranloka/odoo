/** @odoo-module **/

import { Component, onMounted } from "@odoo/owl";

export class ChartCard extends Component {
  static props = ["name", "config"];
  static template = "retail.ChartCard";

  setup() {
    onMounted(() => {
      const ctx = document.getElementById(this.canvasId);
      new Chart(ctx, this.props.config);
    });
    this.canvasId = `chart-${this.props.name}`;
  }
}
