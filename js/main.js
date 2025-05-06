import { animateSkillBars } from './skills.js';
import { createPerformanceChart, createContributionsChart } from './charts.js';

document.addEventListener("DOMContentLoaded", () => {
    animateSkillBars();
    createPerformanceChart();
    createContributionsChart();
});
