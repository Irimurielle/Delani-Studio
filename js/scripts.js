$(document).ready(function() {
    $('.design').click(function() {
        $('.design').slideUp();
        $('.des').show();
    });
    $('.des').click(function () {
        $('.design').slideDown();
        $('.des').hide();
    });
    $('.develop').click(function() {
        $('.develop').slideUp();
        $('.devl').show();
    });
    $('.devl').click(function () {
        $('.develop').slideDown();
        $('.devl').hide();
    });
    $('.product').click(function() {
        $('.product').slideUp();
        $('.prod').show();
    });
    $('.prod').click(function () {
        $('.product').slideDown();
        $('.prod').hide();
    });
    $("form#myForm").submit(function(){
        event.preventDefault();
        let name = $("input#name").val();
        let email = $("input#email").val();
        let message = $("textarea#message").val();
        alert("Thank you for reaching out to us, we will soon get back to you");
    });
});