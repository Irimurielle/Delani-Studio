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
        $('.portinfo',this).slideToggle('slow');
     }, function(){
        $('.port-info',this).slideToggle('slow');
     });
    $("#myForm").submit(function(){
        event.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        alert("Hello, thank you for reaching out to us, we will soon get back to you");
    });
    $("button").on('click', function(){
        $('form').each(function(){
            this.reset();
        });
    });
});