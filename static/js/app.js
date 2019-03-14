// from data.js
var tableData = data;

// var city = [];
// var shape = [];
// var county = [];
// var shape = [];

tbody = d3.select("tbody");
    
tableData.forEach((populate) => 
{
  var row = tbody.append("tr");
  Object.entries(populate).forEach(([key, value]) => 
  {
    // console.log('Hi');
    var cell = tbody.append("td");
    cell.text(value);
  });
});


var submit = d3.select("#filter-btn");

submit.on("click", function() 
{
    
  d3.event.preventDefault();

  var node = document.getElementById("ufo-body");
  while (node.hasChildNodes()) 
  {
    node.removeChild(node.lastChild);
  };

  var inputElement = d3.select(".form-control")

  var inputValue = inputElement.property("value");

  if (inputValue === "")
  {
    var filteredData = tableData;
  }
  else{
    var filteredData = tableData.filter(UFOdate => UFOdate.datetime === inputValue);
  };
      
  var tbody = document.createElement('tbody');

  tbody = d3.select("tbody");
    
  filteredData.forEach((pop1) => 
  {
        
    var row = tbody.append("tr");

    Object.entries(pop1).forEach(([key, value]) => 
    {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });   

});





