// from data.js
//var tableData = data;

// YOUR CODE HERE!

// Variables
var button = d3.select("#filter-btn");
var inputField1 = d3.select("#datetime");
var inputField2 = d3.select("#city");
var inputField3 = d3.select("#state");
var inputField4 = d3.select("#country");
var inputField5 = d3.select("#shape");
var tbody = d3.select("tbody");
var resettblbtn = d3.select("#reset-tbl-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInut) => {
    dataInut.forEach(ufo_sightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_sightings[column])
        )
    });
}

// Populate Data

//Filter Data
button.on("click", () => {
    d3.event.preventDefault();
    var inputDate = inputField1.property("value").trim();
    var inputCity = inputField2.property("value").toLowerCase().trim();
    var inputState = inputField3.property("value").toLowerCase().trim();
    var inputCountry = inputField4.property("value").toLowerCase().trim();
    var inputShape = inputField5.property("value").toLowerCase().trim();
    // Filter matched data from the full dataset
    var filterDate = data.filter(data => data.datetime === inputDate);
    //Console.log(filterDate);
    //console.log(filterDate);
    var filterCity = data.filter(data => data.city === inputCity);
    //console.log(filterCity);
    var filterState = data.filter(data => data.state === inputState);
    //console.log(filterState);
    var filterCountry = data.filter(data => data.country === inputCountry);
    //console.log(filterCountry);
    var filterShape = data.filter(data => data.shape === inputShape);
    //console.log(filterState);
    var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity 
        && data.state === inputState && data.country === inputCountry && data.shape === inputShape);
    //console.lot(filterData);
    // Add result data to web table. Reset table to blank
    tbody.html("");
    var response = {filterData, filterShape, filterCountry, filterState, filterCity, filterDate};
    if (response.filterData.length !== 0) {
        populate(filterData);
    }
                // double pipe command evaluates the first condition, if not met then evaluate the next command after the pipe and son on

                else if (response.filterData.length === 0 && ((response.filterShape.length !==0 || response.filterCountry.length !==0 || response.filterState.length !==0 ||response.filterCity.length !== 0 || response.filterDate.length !== 0))){
                    populate(filterShape) || populate(filterCountry) || populate(filterState) || populate(filterCity) || populate(filterDate);
                }
                else {
                    tbody.append("tr").append("td").text("No Data Found");
                }
})

resettblbtn.on("click", () => {
    tbody.html("");
    populate(data)
    //console.log("Table reset")
})
