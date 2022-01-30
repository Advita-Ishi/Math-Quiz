player_1 = localStorage.getItem("player1_name");
player_2 = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

console.log(player_1);
console.log(player_2);

document.getElementById("player1_name").innerHTML = player_1 + " : ";
document.getElementById("player2_name").innerHTML = player_2;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "<h3> Question Turn - " + player_1;
document.getElementById("player_answer").innerHTML = "<h3> Answer Turn - " + player_2;

function send() {
    get_word_1 = document.getElementById("number1").value;
    get_word_2 = document.getElementById("number2").value;
    answer = parseInt(get_word_1)*parseInt(get_word_2);
    console.log(answer);

    question_word = "<h4> "+get_word_1+" x "+get_word_2+" </h4>";
    input_box = "<br> Answer : <input type='text' id='input_check'>";
    check_button = "<br> <button class='btn btn-info' onclick='check()'> Check </button>"
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

var question_turn = "player_1";
var answer_turn = "player_2;"
function check() {
    get_answer = document.getElementById("input_check").value;
    if(answer == get_answer) {
        if (answer_turn == "player_1") {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML= player1_score;
        }
        else {
            player2_score= player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player_1") {
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_2;
    }
    else {
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_1;
    }

    if(answer_turn == "player_1") {
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2;
    }
    else {
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_1;
    }
    document.getElementById("output").innerHTML = "";
}

