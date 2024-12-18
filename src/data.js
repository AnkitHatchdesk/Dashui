Chart.defaults.global.legend.position = "bottom";
Chart.defaults.global.defaultFontSize = 14;

var ctx = document.getElementById("myChart2");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: [
      "Application Details",
      "Interview",
      "Information Validation",
      "Offer Letter",
      "Final Checks",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [16, 41, 12, 20, 10],
        backgroundColor: [
          "#1A932E",
          "#E5AE21",
          "#E97142",
          "#80DEEA",
          "#D9D9D9",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    cutoutPercentage: 75,
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
  },
});


var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "World Wine Production 2018",
    },
  },
});

const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});
