const AreaInput = document.getElementById("HouseArea");
const ConsumInput = document.getElementById("HouseConsum");
const EmissionsChart = document.getElementById("EmissionsChart");
const CostChart = document.getElementById("CostChart");

let Area = 170;
let Consum = 150

function updateChartData() {
    const newDataEmissions = [
        (Consum / 4 * 0.079) * Area,
        (Consum / 0.85 * 0.032) * Area,
        (Consum / 0.75 * 0.046) * Area,
        (Consum / 1 * 0.079) * Area,
        (Consum / 0.9 * 0.112) * Area,
        (Consum / 0.85 * 0.221) * Area,
        (Consum / 0.85 * 0.324) * Area,
    ];

    EmissionsChartFormat.data.datasets[0].data = newDataEmissions;
    EmissionsChartFormat.update();

    const newDataCost = [
        ((Area * Consum) / 4) * 0.25,
        ((Area * Consum) * 0.85) * 0.09,
        ((Area * Consum) * 0.75) * 0.05,
        ((Area * Consum) * 1) * 0.25,
        ((Area * Consum) * 0.9) * 0.10,
        ((Area * Consum) * 0.85) * 0.11,
        ((Area * Consum) * 0.85) * 0.13,
    ];

    const newDataConsum = [
        (Area * Consum) / 4,
        (Area * Consum) * 0.85,
        (Area * Consum) * 0.75,
        (Area * Consum) * 1,
        (Area * Consum) * 0.9,
        (Area * Consum) * 0.85,
        (Area * Consum) * 0.85,
    ];

    CostChartFormat.data.datasets[0].data = newDataCost;
    CostChartFormat.data.datasets[1].data = newDataConsum;
    CostChartFormat.update();
}

const EmissionsChartFormat = new Chart(EmissionsChart, {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Empreinte carbone en kg',
            data: [
                (Consum / 4 * 0.079) * Area,
                (Consum / 0.85 * 0.032) * Area,
                (Consum / 0.75 * 0.046) * Area,
                (Consum / 1 * 0.079) * Area,
                (Consum / 0.9 * 0.112) * Area,
                (Consum / 0.85 * 0.221) * Area,
                (Consum / 0.85 * 0.324) * Area,
            ],
            yAxisID: "y1",
            backgroundColor: "#042e4db3",
            borderColor: "#042E4D",
        }, {
            type: 'line',
            label: 'Rendement',
            data: [4, 0.85, 0.75, 1, 0.9, 0.85, 0.85],
            backgroundColor: "#83F2A7",
            borderColor: "#83F2A7",
            yAxisID: "y2"
        }],
        labels: ['Pompe à chaleur', 'Poêle à granulés', 'Poêle à bois', 'Chauffage électrique', 'réseau de chaleur', 'Chauffage au gaz', 'Chauffage au fioul']
    },
    options: {
        responsive: true,
        scales: {
            y1: {
                beginAtZero: true
            },
            y2: {
                position: "right",
                beginAtZero: true,
                max: 5
            }
        }
    }
});

const CostChartFormat = new Chart(CostChart, {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Coût annuel en € ',
            data: [
                ((Area * Consum) / 4) * 0.25,
                ((Area * Consum) * 0.85) * 0.09,
                ((Area * Consum) * 0.75) * 0.05,
                ((Area * Consum) * 1) * 0.25,
                ((Area * Consum) * 0.9) * 0.10,
                ((Area * Consum) * 0.85) * 0.11,
                ((Area * Consum) * 0.85) * 0.13,
            ],
            yAxisID: "y1",
            backgroundColor: "#83f2a799",
            borderColor: "#83F2A7",
        }, {
            type: 'line',
            label: 'Consommation annuel en KWh',
            data: [
                (Area * Consum) / 4,
                (Area * Consum) * 0.85,
                (Area * Consum) * 0.75,
                (Area * Consum) * 1,
                (Area * Consum) * 0.9,
                (Area * Consum) * 0.85,
                (Area * Consum) * 0.85,
            ],
            backgroundColor: "#042e4db3",
            borderColor: "#042E4D",
            yAxisID: "y2"
        }],
        labels: ['Pompe à chaleur', 'Poêle à granulés', 'Poêle à bois', 'Chauffage électrique', 'réseau de chaleur', 'Chauffage au gaz', 'Chauffage au fioul']
    },
    options: {
        responsive: true,
        scales: {
            y1: {
                beginAtZero: true
            },
            y2: {
                position: "right",
                beginAtZero: true,
            }
        }
    }
});

AreaInput.addEventListener("input", function (e) {
    Area = e.target.value;
    updateChartData();
});

ConsumInput.addEventListener("input", function (e) {
    Consum = e.target.value;
    updateChartData();
});

