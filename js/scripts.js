$(document).ready(function() {
  $("form#one").submit(function(event) {
    var format = $("select#format").val();
    var size = $("input[name=size]:checked").val();
    var position = $("select#position").val();
    var boolean = $("select#boolean").val();
    var popular = $("input[name=popular]:checked").val();

    if (format === "Yes" && size === "small" && position === "Backend" && boolean === "False" && popular === "specific") {
      var answer = 'Ruby';
    }

    else if (format === "No" && size === "big" && position === "Frontend" && boolean === "True" && popular === "pop") {
      var answer = 'CSS/Design';
    }

    else if (format === "Yes" && size === "small" && position === "Frontend" && boolean === "True" && popular === "pop") {
      var answer = 'Java/Android';
    }

    else if (format === "No" && size === "big" && position === "Backend" && boolean === "False" && popular === "specific") {
      var answer = 'PHP/Drupal';
    }

    else if (format === "No" && size === "big" && position === "Backend" && boolean === "False" && popular === "specific") {
      var answer = 'C#/.NET';
    }

    else {
      var answer = 'CSS Design or Java/Android';
    }

  $("#answer").show();
  $("#result").empty().append(answer);
  $("#result").show();

  event.preventDefault();
  });
});
