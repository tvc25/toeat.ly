$(function () {
  $.get("/foods").
  done(function (data){
    console.log("RECEIVING RESPONSE");
    console.log("DATA", data);
    $(data).each(function (index, food){
      var $food = $('<div class="food">' + food.name + ' ' + food.yumminess + '<button> DELETE</button></div>');
      $(".foodsCon").append($food);
    });
  });


$('#newFood').on("submit", function (e){
  var $this = $(this);
  var formData = $this.serialize();
  console.log(formData);
  $.post("/foods", formData).
  done(function (data){
        console.log(data);
    var $food = $('<div class="food">' + data.name + ' ' + data.yumminess + '<button> DELETE</button></div>');
      $(".foodsCon").append($food);
    });
  });

$(function deleteFood(){
  $.delete("/foods/:id").
  done(function (data){
    console.log("RECEIVING RESPONSE");
    console.log("DATA", data);

  });
});


$('body').on('click', deleteFood);

});