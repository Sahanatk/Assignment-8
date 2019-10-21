/*eslint-env browser*/

var $ = function(id) {
    return document.getElementById(id);
}
var count=0;

var addEntry = function () {
    "use strict";
    var name = $("name").value;
    var title = $("title").value;
    var extension = $("extension").value;
     if($("name").value == ""){
        document.getElementById("error").innerHTML=" Name is required field ";
       } else if ($("name").value == name){
              document.getElementById("error").innerHTML=" "; } 
    if ($("title").value == ""){
         document.getElementById("error1").innerHTML=" Title is required field ";
    } else if ($("title").value == title){
        document.getElementById("error1").innerHTML=" ";}
     if ($("extension").value == ""){
         document.getElementById("error2").innerHTML=" extension is required field ";
    } else if ($("extension").value == extension){
        document.getElementById("error2").innerHTML=" ";}
    insertNewRow(name, title, extension);
    count += 1;
    document.getElementById("details").innerHTML =  "Showing " + count + " entries";
};

var delData = function(event){
    window.console.log("Delete function called")
    var element = event.target;
    window.console.log(element.id)
    var rowToBeDeleted = element.parentElement.parentElement;
    window.console.log(rowToBeDeleted.id);
    rowToBeDeleted.parentNode.removeChild(rowToBeDeleted);
    count -= 1;
    document.getElementById("details").innerHTML =  "Showing " + count + " entries";
}

var insertNewRow = function(name, title, extension) {
    var row = document.getElementById("tableEntry"); 
    var table = document.getElementById("tbl"); 
    var clonedRow = row.cloneNode(true); 
    clonedRow.cells[0].innerHTML = name;
    clonedRow.cells[1].innerHTML = title;
    clonedRow.cells[2].innerHTML = extension;
    var deleteButton = clonedRow.cells[3];
    deleteButton.addEventListener("click", delData);
    table.appendChild(clonedRow);
}

window.addEventListener("load",function () {
    "use strict";
    $("name").placeholder="Enter your fullname";
    $("title").placeholder="Enter your title";
    $("extension").placeholder="Enter extension code eg:1234";
    $("name").focus();
    $("btn").addEventListener("click", addEntry);
     $("btnDel").addEventListener("click", delData);
    window.console.log("function called");
    var employees =[
                    ["sam","Sales manager",2123],
                    ["jim","Sales assistant",1234],
                    ["pam","Software engineer",5678],
                    ["andy","regional officer",1789],     
                    ["joseph","sales executive",3478]
                    ];
    count = employees.length;
    window.console.log(employees.length, count);
    document.getElementById("details").innerHTML =  "Showing " + employees.length + " entries";
    for ( var i = 0 ;i<employees.length;i+=1){
        insertNewRow(employees[i][0], employees[i][1], employees[i][2]);
    }
    document.getElementById("tbl").deleteRow(1);
  
});









