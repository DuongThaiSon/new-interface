$(document).ready(function () {
    // $(".tra-loi").click(function(){
    //     $("#rep1").toggle();
    // });
    // $(".tra-loi").click(function(){
    //     $("#rep2").toggle();
    // });
    document.getElementById("traloi1").onclick = function() {myFunction()};
    function myFunction() {
        document.getElementById("rep1").classList.toggle("show");
    }
});