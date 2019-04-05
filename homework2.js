let textThing;
  $.ajax({
      url: 'https://nano-rest-api-1.herokuapp.com/messages',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
            textThing
      }
    });=---------------
    
   let i;
$.ajax({
    url: 'https://nano-rest-api-1.herokuapp.com/messages',
    type: 'POST',
    data: JSON.stringify({ text: "hi"}),
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
})
        
let previousMsg;

const sendInfo = () => {
    $.ajax({
         url: 'https://nano-rest-api-1.herokuapp.com/messages',
         type: 'POST',
         data: JSON.stringify({ text: "loool"}),
         contentType: "application/json; charset=utf-8",
         dataType: 'json',
         
         success: function(data){
            previousMsg = data.id,
            $.ajax({
                url: 'https://nano-rest-api-1.herokuapp.com/messages',
                type: 'GET',
                dataType: 'json',
                success: function(data){
                    console.log(data[previousMsg - 2].text);

                }
         })
            
        }
    })
}
const getInfo = () => {
    $.ajax({
        url: 'https://nano-rest-api-1.herokuapp.com/messages',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            console.log(data);
            console.log(data.length);
            previousMsg = data.length - 2;
            console.log(data[previousMsg].text);
        
        }
        
    })
    
}