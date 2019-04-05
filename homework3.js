$(document).ready(function() {
    const jeopardyURL = 'http://jservice.io/api/random';
    const getJeopardyQuestion = () => {
        let question;
        let category;
        let difficulty;
        let answer;
        $.ajax({
            type: 'GET',
            url: jeopardyURL,
            dataType: 'json',
            success: (data) => {
                console.log(data);
                console.log(data[0].question);
                question = data[0].question;
                category = data[0].category.title;
                answer = data[0].answer;
                difficulty = data[0].value;
                $("#QUESTION").append(`Clue = ${question} <br> Points = ${difficulty} <br> Category = ${category}`)
            },
            error: (data, error) => {
                console.log(data);
                console.log(error);
            }
        })
        $("#BUTTON").click(function postResults(){
            let input = $("#INPUT").val();
            let isIt;
            if (input === answer){
                isIt = true;
            } else {
                isIt = false;
            }
            $.ajax({
                url: 'https://www.jsonstore.io/144eaadb09b00f2d99963affaa86d8df202ad4a974ef0d7f8f631c81e15f00d5/answers/',
                method: 'POST',
                data: JSON.stringify({ input: input, correct: isIt, answer: answer, question: question}),
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: (data) => {
                    $("#DEFINE").html(`Your Input = ${input} <br> Correct Answer = ${answer} <br> Were You Correct? = ${isIt} <br>`)
                    $.ajax({
                    url: 'https://www.jsonstore.io/144eaadb09b00f2d99963affaa86d8df202ad4a974ef0d7f8f631c81e15f00d5/answers/',
                    method: 'GET',
                    dataType: 'json',
                    
                    })
                }
            })
          
        
        })
    }
    getJeopardyQuestion();
    })