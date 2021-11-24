import SkillsChart from "./skills";

const skillsChart = new SkillsChart('svg.skills-chart');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./assets/js/sw.js');
}
else {
    console.log('no service workers');
}