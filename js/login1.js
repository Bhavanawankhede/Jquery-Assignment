$(document).ready(()=>{
    $('button').click(()=>{
        var username=$('input[type="text"]').val();
        var password=$('input[type="password"]').val();
        if(username=='' && password==''){
            alert("Username and Password not entered");
        }
        else{
            $.ajax({
                url:"http://localhost:3000/users",
                type:"GET",
                data:{
                    "username":username,
                    "password":password,
                },
                success:(x)=>{
                    alert(username+" Successfully Login!!");
                    console.log(x);
                    window.location="http://127.0.0.1:5500/html/registeration1.html"
                }
            })
        }
    })
})