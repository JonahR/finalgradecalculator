

function calcGrade(){
    
    
    if(document.getElementById('currentGrade').value == ''){
        var currentGrade = 90 / 100;
    } else {
        var currentGrade = document.getElementById('currentGrade').value / 100.0;
    }
    
    if(document.getElementById('finalGrade').value == ''){
        var finalGrade = 95 / 100;
    } else {
        var finalGrade = document.getElementById('finalGrade').value / 100.0;
    }
        
    if(document.getElementById('finalWorth').value == ''){
        var finalWorth = 50 / 100;
    } else {
        var finalWorth = document.getElementById('finalWorth').value / 100.0;
    }
    
    
    var testScore = (finalGrade - currentGrade * (1 - finalWorth)) / finalWorth;
    
    if(!isNaN(testScore) && isFinite(testScore)){
        var testScore = (Math.round(testScore * 10000) / 100);
        document.getElementById('final_grade').innerHTML = testScore + "%";
    } else {
        document.getElementById('final_grade').innerHTML = '0.00%';
    }
    
}