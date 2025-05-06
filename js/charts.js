export function createPerformanceChart() {
  const ctx = document.getElementById('performanceChart')?.getContext('2d');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Leadership', 'Innovation', 'Collaboration', 'Efficiency', 'Code Quality'],
      datasets: [{
        label: 'Performance',
        data: [85, 90, 80, 88, 92],
        backgroundColor: 'rgba(74, 144, 226, 0.2)',
        borderColor: '#4a90e2',
        borderWidth: 2,
        pointBackgroundColor: '#4a90e2'
      }]
    },
    options: {
      animation: {
        duration: 2000,
        easing: 'easeOutBounce'
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

export function createContributionsChart() {
  const ctx = document.getElementById('contributionsChart')?.getContext('2d');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      datasets: [{
        label: 'Open-Source Projects',
        data: [5, 8, 12, 15, 20, 25, 30, 28, 35, 40, 50],
        borderColor: '#50c878',
        backgroundColor: 'rgba(80, 200, 120, 0.2)',
        fill: true,
        tension: 0.4
      }, {
        label: 'Published Articles',
        data: [2, 3, 5, 7, 10, 12, 15, 18, 20, 22, 25],
        borderColor: '#f4a261',
        backgroundColor: 'rgba(244, 162, 97, 0.2)',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      animation: {
        duration: 2000,
        easing: 'easeOutBounce'
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
