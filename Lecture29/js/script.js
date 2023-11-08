$(function ()  {  // same as document.addEventListener("DOMContentLoaded"...)

//same as document.querySelector("#navbarToggle").addEventListener("blur" ..)
$("#navbarToggle").blur(function (event) {
    var screenWidth  = window.innerWidth;
   if (screenWidth < 768) {
        $("#collapsable-nav").collapse('hide');
   }
});
});
 (function (global) {
     var dc= {};
     var homeHtml = "snippets/home-snippet.html";

     // convience function for inserting innerHTML for 'select'
     var insertHtml = function (selector. Html) {
          var targetElem = document.querySelector(selector);
          targetElem.innerHTML = html;
     };

     // show loading icon inside element identified by 'selector' .
     var showLoading = function (selector) {
          var html = "<div class  = 'text-center'>";
          html += "<img src = 'images/ajax-loader.gif'></div>";
          insertHtml(selector, html);
     };
     // on page load (before images or CSS)

     document.addEventListener("DOMContentLoaded" , function(event) {

          // on first load, show home view
          showLoading("#main-content");
          $ajaxUtils.sendGetRequest(
               homeHtml,
               function (responseText) {
                    document.querySelector("#main-content")
                    .innerHTML = responseText;
               },
               false);
     });
     global.$dc = dc;
 })(window);