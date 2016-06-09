var getDogs, postDog, putDog, deleteDog, login, getMe, logout;
$(document).ready(function(){
  var dogs;

  getDogs = function() {
    $(".rowDogs").remove();
    $.ajax({
      method: "GET",
      url: "/dogs"
    }).then(function(response){
      dogs = response;
      console.log(dogs);
      for (var i = 0; i < dogs.length; i++) {
        $(".tableDogs").append(`
          <tr class="rowDogs">
          <td><input id='` + i + `name' type="text" value="` + dogs[i].name + `"></td>
          <td><input id='` + i + `breed'  id='` + i + `name'  type="text" value="` + dogs[i].breed + `"></td>
          <td><input id='` + i + `color'  type="text" value="` + dogs[i].color + `"></td>

          <td><button id="putDog" onClick="putDog(value, {
            name: $('#` + i + `name').val(),
            breed: $('#` + i + `breed').val(),
            color: $('#` + i + `color').val()
          });" type="button" value="` + dogs[i]._id + `">PUT</button></td>

          <td><button id="deleteDog" onClick="deleteDog(value);" type="button" value="` + dogs[i]._id + `">DELETE</button></td>
          </tr>`);
      }
    });
  };

  postDog = function(dog) {
    $.ajax({
      method: 'POST',
      url: '/dogs',
      data: dog
    }).then(function(response){
      getDogs();
    });
  };

  putDog = function(id, dog){
    $.ajax({
      method: 'PUT',
      url: '/dogs/' + id,
      data: dog
    }).then(function(response){
      getDogs();
    });
  };

  deleteDog = function(id){
    $.ajax({
      method: 'DELETE',
      url: '/dogs/' + id
    }).then(function(response){
      getDogs();
    });
  };


////////////////////////////////////////////////

//Authorization below

  login = function(loginobj) {
    $.ajax({
      method: "POST",
      url: "/auth",
      data: loginobj
    }).then(function(response){
        console.log(response);
        $(".loginemail").val("");
        $(".loginpassword").val("");
        $(".registeremail").val("");
        $(".registerpassword").val("");
        $(".registerfname").val("");
        $(".registerlname").val("");
        $(".auth").hide();
        $(".logoutbutton").show();
        $('.success').show();
        setTimeout(function(){
          $('.success').fadeOut(1000);
        }, 700);
        getMe();
      }, function(err) {
        console.log(err);
        $('.error').show();
        setTimeout(function(){
          $('.error').fadeOut(1000);
        }, 1200);
      }
    );
  };
  logout = function() {
    $.ajax({
      method: "GET",
      url: "/user/logout"
    }).then(function(response){
      console.log(response);
      $(".intro").remove();
      $(".auth").show();
      $(".logoutbutton").hide();
      $('.logout').show();
      setTimeout(function(){
        $('.logout').fadeOut(1000);
      }, 700);
    })
  }
  getMe = function () {
      $.ajax({
        method: "GET",
        url: '/user/me'
      }).then(function (response) {
        $(".intro").remove();
        $("body").prepend(`<h1 class="intro">Welcome ` + response.fname + `!</h1>`);
      });
    };
  
  $(".pushtoregister").click(function(){
    $(".login").hide();
    $(".register").show();
  })
  
  $(".pushtologin").click(function(){
    $(".register").hide();
    $(".login").show();
  })
  
  $(".loginbutton").click(function(){
    var loginobj = {
      email: $(".loginemail").val(),
      password: $(".loginpassword").val()
    };
    login(loginobj);
  });
// authorization above
////////////////////////////////////////////////
});
