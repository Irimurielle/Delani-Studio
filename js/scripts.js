$(document).ready(function() {
    $('.design').click(function() {
        $('.design').toggle();
        $('.des').toggle();
    });
    $('.des').click(function () {
        $('.design').toggle();
        $('.des').toggle();
    });
    $('.develop').click(function() {
        $('.develop').toggle();
        $('.devl').toggle();
    });
    $('.devl').click(function () {
        $('.develop').toggle();
        $('.devl').toggle();
    });
    $('.product').click(function() {
        $('.product').toggle();
        $('.prod').toggle();
    });
    $('.prod').click(function () {
        $('.product').toggle();
        $('.prod').toggle();
    });
    $('.imageport').hover(function(){
        $('.portinfo',this).slideToggle();
     }, function(){
        $('.port-info',this).slideToggle();
     });
    $("#myForm").submit(function(){
        event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#message").val();
        alert("Thank you for reaching out to us, we will soon get back to you");
    });
});