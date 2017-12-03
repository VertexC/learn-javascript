function submitAnswers() {
    var total = 2;//total number of questions
    var score = 0;
    // get user 
    //var q1 = document.forms["quizForm"].input["q1"].value;
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    // Validation
    for(var i = 1; i <= total; i++){
        if(eval('q'+i) == null || eval('q'+i) == ''){//is same as eval('q' + toString(i))
            alert('You missed question' + i);
            return false;
        }
    }
    // Set Correct Answers
    var answers = ['c','b'];
    // Check Answers
    for(var i = 1; i <= total; i++){
        if(eval('q' + i) == answers[i-1]){
            score++;
        }
    }
    // Display Results
    var results = document.getElementById('results');
    results.innerHTML = '<div> You scored <span style="font-weight:bold">' 
        + score +'</span> out of <span style="font-weight:bold">' + total + '</span></div>';
    results.style.display = "inline-Block";
    
    alert('You scored ' + score)
    return false;
}