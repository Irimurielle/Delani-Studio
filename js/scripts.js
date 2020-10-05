$(document).ready(function() {
    $('.design').click(function() {
        $('.design').toggle('slow');
        $('.des').toggle('slow');
    });
    $('.des').click(function () {
        $('.design').toggle('slow');
        $('.des').toggle('slow');
    });
    $('.develop').click(function() {
        $('.develop').toggle('slow');
        $('.devl').toggle('slow');
    });
    $('.devl').click(function () {
        $('.develop').toggle('slow');
        $('.devl').toggle('slow');
    });
    $('.product').click(function() {
        $('.product').toggle('slow');
        $('.prod').toggle('slow');
    });
    $('.prod').click(function () {
        $('.product').toggle('slow');
        $('.prod').toggle('slow');
    });
    $('.imageport').hover(function(){
        $('.portinfo',this).slideToggle('slow');
     }, function(){
        $('.port-info',this).slideToggle('slow');
     });
    $("#myForm").submit(function(){
        event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#message").val();
        alert(name + " " + "thank you for reaching out to us, we will soon get back to you");
    });
});