
      var public_spreadsheet_url = 
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTzAUVeFq2IQR7aDOuiACxRjmXicRqoJrqak53Gvej-Tb-RQdZI8ZpkflSJOR0XbrR6qrqqvg9pxzgn/pub?gid=1037024612&single=true&output=csv';

      function init() {
        Papa.parse(public_spreadsheet_url, {
          download: true,
          header: true,
          complete: showInfo
        })
      }

      window.addEventListener('DOMContentLoaded', init)

      var mapboxTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 11,});
      //  var mapboxTiles = L.tileLayer.grayscale
      var map = L.map('map')
        .addLayer(mapboxTiles)
        .setView([22.287111, 114.191667], 11);

      layerGroup = L.layerGroup().addTo(map);

      function showInfo(results) {
        var data = results.data
        var dataSet = []
        var i = 0
        // data comes through as a simple array since simpleSheet is turned on
        // alert("Successfully processed " + data.length + " rows!")
        document.getElementById("district").innerHTML = "<strong>District:</strong> " + [ data[0].chi_district, data[0].total_no_of_cases, data[0].lat, data[0].lng ].join(", ");
        
        var districts = data[0].chi_district
        for (i=1; i < data.length; i++ ) {
          districts = districts + "/" + data[i].chi_district
          items = []
          items.push(data[i].chi_district)
          items.push(data[i].total_no_of_cases)
          dataSet.push(items)
          document.getElementById("districts").innerHTML = districts
        }

        for (var i in data) {
          var latlng = L.latLng({ lat: data[i].lat, lng: data[i].lng })
          L.marker( latlng )
              .bindPopup( data[i].chi_district+"<br>"+data[i].total_no_of_cases)
              .addTo(layerGroup);
        }

        var chart = c3.generate({
              data: {
                  columns:dataSet,
                  type : 'bar',
                  labels:true,
                  colors: {
                    radio: '#7FB3D5',
                    computer: '#5499C7',
                    tv: '#2980B9',
                    tablet: '#2471A3'
                    }
                },
              bar: {
                  title: "# of Cases by District:",
                  width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                  }
              },
              tooltip: {
                  show: false,
              },
              axis: {
                x: {
                    label: 'Cases',
                    type: 'category',
                    categories:['','','','']
                    },
                y: {label: '# of Entries'}
              },
              bindto: '#chart1'
        }); // end c3.generate

        var chart = c3.generate({
              data: {
                  columns: dataSet,
                  type : 'donut',
                  colors: {
                    radio: '#7FB3D5',
                    computer: '#5499C7',
                    tv: '#2980B9',
                    tablet: '#2471A3'
                    }
              },
              donut: {
                  title: "Case Distribution by District",
              },
              bindto: '#chart2'
          }); // end c3.generate

        
        console.log(data);
      }

      document.write("The published spreadsheet is located at <a target='_new' href='" + public_spreadsheet_url + "'>" + public_spreadsheet_url + "</a>");        