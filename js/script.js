$(document).ready(function () {
    $("#tra-loi1").click(function () {
        $("#rep1").toggle();
    });
    $("#tra-loi2").click(function () {
        $("#rep2").toggle();
    });

    $(".continue-js").click(function () {
        $("#create-cv").addClass("d-none");
        $(".form-themcv").addClass("d-block");
    });

    $(".back-js").click(function () {
        $(".form-themcv").removeClass("d-block");
        $("#create-cv").removeClass("d-none");
    });

    ClassicEditor
        .create(document.querySelector('#editor'))
        .catch(error => {
            console.error(error);
        });

   


});