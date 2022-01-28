document.addEventListener("DOMContentLoaded", function(event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
     
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('fa-times')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
    // Your code to run since DOM is loaded and ready
    });


    // changing content
    $(document).ready(function(){

        // admin
        $("#add-user-admin").click(function(){
            $("#main-content").load("add_user/add_user_admin.html");
        });
        $("#leave-admin").click(function(){
            $("#main-content").load("leave_admin.html");
        });
        $("#attendence-admin").click(function(){
            $("#main-content").load("attendence_admin.html");
        });
        $("#marks-admin").click(function(){
            $("#main-content").load("marks_admin.html");
        });
        $("#notice-admin").click(function(){
            $("#main-content").load("notice_admin.html");
        });

        // staff
        $("#profile-staff").click(function(){
            $("#main-content").load("profile_staff.html");
        });
        $("#classroom-staff").click(function(){
            $("#main-content").load("classroom_staff.html");
        });
        $("#leave-staff").click(function(){
            $("#main-content").load("leave_staff.html");
        });
        $("#notice-staff").click(function(){
            $("#main-content").load("notice_staff.html");
        });

        // student
        $("#profile-student").click(function(){
            $("#main-content").load("profile_student.html");
        });
        $("#classroom-student").click(function(){
            $("#main-content").load("classroom_student.html");
        });
        $("#leave-student").click(function(){
            $("#main-content").load("leave_student.html");
        });
        $("#notice-student").click(function(){
            $("#main-content").load("notice_student.html");
        });

   });