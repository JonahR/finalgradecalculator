function calcGrade(){
    var currentGrade = document.getElementById('currentGrade').value / 100;
    var finalGrade = document.getElementById('finalGrade').value / 100;
    var finalWorth = document.getElementById('finalWorth').value / 100;
    var testScore = (finalGrade - currentGrade * (1 - finalWorth)) / finalWorth;
    
    if(isNaN(testScore)){
        alert("Something went wrong. Type numbers again.")
    } else {
        // Rounds to two decimel places. Solution found from http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places
        var testScore = +(Math.round(testScore + "e+4")  + "e-4") * 100 + "%";
        alert(testScore);
    }
}