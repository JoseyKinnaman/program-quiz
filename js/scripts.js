$(document).ready(function() {
  $("form#program").submit(function(event) {
    var goals = $("select#goals").val();
    var pref = $("#pref").val();
    var importance = $("#import").val();
    var age = parseInt($("#age").val());
    var favoriteColor = $("#color").val();
    event.preventDefault();

    console.log(goals);
    console.log(pref);
    console.log(importance);
    console.log(age);
    console.log(favoriteColor);

    if (goals === "1") {
      $(".java").show();
      $(".react").hide();
      $(".ruby").hide();
      $(".c-sharp").hide();
    } else if (pref === "1") {
      $(".react").show();
      $(".java").hide();
      $(".ruby").hide();
      $(".c-sharp").hide();
    } else if (importance === "1") {
      $(".ruby").show();
      $(".react").hide();
      $(".java").hide();
      $(".c-sharp").hide();
    } else if (goals === "3" || pref === "2") {
      $(".c-sharp").show();
      $(".react").hide();
      $(".ruby").hide();
      $(".java").hide();
    }
  });
});
