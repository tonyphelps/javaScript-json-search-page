// from data.js
var tableData = data;
var tempArray = data;


var submit = d3.select("#filter-btn");
var clear = d3.select("#clear-btn");
var filterT = d3.select("#sel1")

var results = []


filterT.on("click", function() {
    d3.event.preventDefault();
    var inputFilter = d3.select("#sel1");
    var filterType = inputFilter.property("value");
    console.log(filterType);
});

// tempArray.forEach((ufoSighting) => {
//     var tbody = d3.select("tbody"); 
//     var row = tbody.append("tr");
//     // console.log(tbody);
//      Object.entries(ufoSighting).forEach(([key, value]) => {
        
//         var cell = tbody.append("td");
//         cell.text(value);
        
//       });
      
// });




clear.on("click", function() {
    clearFields();
    var tempArray = data;
    console.log(tempArray);
});

submit.on("click",function() {
    d3.event.preventDefault();
    d3.select("tbody").html("");
    var inputFilter = d3.select("#sel1");
    var filterType = inputFilter.property("value");
    var inputElement = d3.select("#filter1");
    var inputValue = inputElement.property("value");

    if (filterType === "datetime") {
        console.log(filterType);

        var filterDate = tempArray.filter(sighting => sighting.datetime === inputValue);
 

        filterDate.forEach((ufoSighting) => {
            var tbody = d3.select("tbody"); 
            var row = tbody.append("tr");
        
             Object.entries(ufoSighting).forEach(([key, value]) => {
                
                var cell = tbody.append("td");
                cell.text(value);
                
              });
              
        });

    } else if (filterType === "city") {
        console.log(filterType);

        var filterCity = tempArray.filter(sighting => sighting.city === inputValue);

        filterCity.forEach((ufoSighting) => {
            var tbody = d3.select("tbody"); 
            var row = tbody.append("tr");
  
             Object.entries(ufoSighting).forEach(([key, value]) => {
                
                var cell = tbody.append("td");
                cell.text(value);
                
              });
              
        });
    } else if (filterType === "state") {
        console.log(filterType);

        var filterState = tempArray.filter(sighting => sighting.state === inputValue);

        filterState.forEach((ufoSighting) => {
            var tbody = d3.select("tbody"); 
            var row = tbody.append("tr");
  
             Object.entries(ufoSighting).forEach(([key, value]) => {
                
                var cell = tbody.append("td");
                cell.text(value);
                
              });
              
        });
    } else if (filterType === "country") {
        console.log(filterType);

        var filterCountry = tempArray.filter(sighting => sighting.country === inputValue);

        filterCountry.forEach((ufoSighting) => {
            var tbody = d3.select("tbody"); 
            var row = tbody.append("tr");
  
             Object.entries(ufoSighting).forEach(([key, value]) => {
                
                var cell = tbody.append("td");
                cell.text(value);
                
              });
              
        });
    } else {
        console.log(filterType);

        var filterShape = tempArray.filter(sighting => sighting.shape === inputValue);

        filterShape.forEach((ufoSighting) => {
            var tbody = d3.select("tbody"); 
            var row = tbody.append("tr");
  
             Object.entries(ufoSighting).forEach(([key, value]) => {
                
                var cell = tbody.append("td");
                cell.text(value);
                
              });
              
        });
    };

});
        
