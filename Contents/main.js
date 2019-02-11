function barchart(){
    // REDERIZAÇÃO DO BAR CHART
    var ctx = document.getElementById('barchart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        },
        options: {}
    });
}


function linechart(){
    //RENDERIZAÇÃO DO LINE CHART
    var ctx2 = document.getElementById('linechart').getContext('2d');
    var chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgba(255,255, 255, 0) ',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        },
        options: {}
    });
}

function areachart(){
    //RENDERIZAÇÃO DO AREA CHART
    var ctx3 = document.getElementById('areachart').getContext('2d');
    var chart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgb(255,99, 132) ',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        },
        options: {}
    });
}

function combochart(){
    //RENDERIZAÇÃO DO COMBO CHART
    var ctx4 = document.getElementById('combochart').getContext('2d');
    var mixedChart = new Chart(ctx4, {
        type: 'bar',
        data: {
          datasets: [{
                label: 'Bar Dataset',
                backgroundColor: 'rgb(255,99, 132) ',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
              }, {
                label: 'Line Dataset',
                backgroundColor: 'rgb(255,200, 132) ',
                borderColor: 'rgb(255, 150, 132)',
                data: [5, 15, 10, 3, 24, 31, 40],
      
                // Changes this dataset to become a line
                type: 'line'
              }],
          labels: ['January', 'February', 'March', 'April',"May", "June", "July"]
        },
        options: {}
      });
}