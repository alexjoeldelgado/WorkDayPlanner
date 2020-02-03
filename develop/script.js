// Dynamically updated rows for the planner
var container = $(".container").addClass("col-10 container-fluid");
for (i = 9; i < 18; i++){
    var timeRow = $("<div>").addClass("row col-12").attr("id",i);
    var hourDiv = $("<div>").attr("id", i).text(i+":00").addClass("hour text-center col-1");
    var textArea = $("<textarea>").addClass("col-10").attr("data-value",i).text(localStorage.getItem(i));
    var saveBtn = $("<button>").addClass("saveBtn").attr("data-value", i).append($("<i>").addClass("fas fa-save"));
    timeRow.append(hourDiv,textArea,saveBtn);
    container.append(timeRow);
    currentHour();
    console.log()
};
console.log(moment().format('HH'))

$(".saveBtn").on("click", function(){
    localStorage.setItem($(this).attr("data-value"),($(this).siblings("textarea").val()))
    console.log($(this).siblings("textarea").val());
});

console.log(saveBtn.siblings(textArea).val())

// Color Code future events Green, Current hour red, past events white

function currentHour(){
if (moment().format('HH') < i){
    textArea.css("backgroundColor","green");
} else if ((moment().format('HH') > i)) {
    textArea.css("backgroundColor","silver");
} else {
    textArea.css("backgroundColor","red");
}};
// Create a localstorage input that saves tasks inputted in by user


// Display Current Day
var currentDay = $("#currentDay");
currentDay.text(moment().format('dddd, MMMM Do, YYYY'));