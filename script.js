


window.onload = function() {
  document.getElementById("currentGrade").focus();
};

function toFinalGrade(){
    document.getElementById("finalGrade").focus();
}

function toFinalWorth(){
    document.getElementById("finalWorth").focus();
}






function calcGrade(){
    
    
    if(document.getElementById('currentGrade').value == ''){
        var currentGrade = 90 / 100;
    } else {
        var currentGrade = document.getElementById('currentGrade').value / 100.0;
    }
    
    if(document.getElementById('finalGrade').value == ''){
        var finalGrade = 95 / 100.0;
    } else {
        var finalGrade = document.getElementById('finalGrade').value / 100.0;
    }
        
    if(document.getElementById('finalWorth').value == ''){
        var finalWorth = 50 / 100.0;
    } else {
        var finalWorth = document.getElementById('finalWorth').value / 100.0;
    }
    
    
    var testScore = (finalGrade - currentGrade * (1 - finalWorth)) / finalWorth;
    
    if(!isNaN(testScore) && isFinite(testScore)){
        var testScore = (Math.round(testScore * 10000) / 100);
        if(testScore > 10000){
            document.getElementById('calculatedGrade').innerHTML = ">10,000%";
        } else {
          document.getElementById('calculatedGrade').innerHTML = testScore + "%";  
        }
    } else {
        document.getElementById('calculatedGrade').innerHTML = '0.00%';
    }
    
}
