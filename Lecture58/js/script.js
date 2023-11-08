// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.txt", 
            function (res) {
              var message = res.firstName + " " + res.lastName
              if(res.likesChineseFood) {
                message += " likes chinese food";
              }
              else {
                message += "doesn't like Chinese food"
              }
              message += " and uses ";
              message += res.numberOfDisplays;
              message += "display for coding.";
              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });
  }
);