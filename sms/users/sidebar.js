$(document).ready(function(){

    // admin add user
    $("#student_reg").click(function(){
        $("#add-user-main").load("add_user/student_reg.html");
    });
    $("#staff_reg").click(function(){
        $("#add-user-main").load("add_user/staff_reg.html");
    });

});