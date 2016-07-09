$(document).ready(function(){
    (function(){
        $("input:password").bind("copy cut paste",function(e){
            return false;
        });
        $("#reg").validate({
            rules:{
                userName:{
                    required: true,
                    rangelength:[5,10],
                    remote : {
                        url:'is_user.php',
                        type : 'POST',
                    }
                },
                email:{
                    required: true,
                    email: true,
                },
                password:{
                    required: true,
                    rangelength:[5,10],
                },
                repeat_password:{
                    required: true,
                    equalTo: "#password"
                },
            },
            messages: {
                userName: {
                    required:"请输入用户名",
                    rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间用户名"),
                    remote:"用户名已经被占用",
                },
                email: {
                    required: "请输入Email地址",
                    email: "请输入正确的email地址"
                },
                password: {
                    required: "请输入密码",
                    rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的密码"),
                },
                repeat_password: {
                    required: "请输入确认密码",
                    minlength: "确认密码不能小于5个字符",
                    equalTo: "两次输入密码不一致"
                }
            },
            errorPlacement: function(error, element) {
                $(element).parent().parent().children(".my_error").append(error);
                //alert($(element).parent().parent().children(".my_error").html());
            },
            submitHandler: function(form)
            {

                    $.post("add-user.php",
                        $('#reg').serialize()
                        ,function(data,status){
                            $.cookie('user',$('#userName').val());
                            $(".user_member,.login_out").show();
                            $(".user_login,.user_reg").hide();
                            $(".user_member").html($('#userName').val());
                            $('#myModal').modal('hide');
                        });

            }
        });
        $(".user_member,.login_out").hide();
        if( $.cookie('user')){
            $(".user_member,.login_out").show();
            $(".user_login,.user_reg").hide();
            $(".user_member").html($.cookie('user'));

        }else{
            $(".user_member,.login_out").hide();
            $(".user_login,.user_reg").show();
        }
        $('.login_out').click(function () {
            $.removeCookie('user');
            window.location.Reload();
        });


    })();




    (function(){




        $("#login_form").validate({
            submitHandler: function(form)
            {

                $.post("login.php",
                    $('#login_form').serialize()
                    ,function(data,status){
                        $.cookie('user',$('#login_user').val());
                        $(".user_member,.login_out").show();
                        $(".user_login,.user_reg").hide();
                        $(".user_member").html($.cookie('user'));
                        $('#myModal2').modal('hide');
                    });
                //$(form).ajaxSubmit({
                //    url : 'login.php',
                //    type : 'POST',
                //    success : function (responseText, statusText) {
                //
                //    }
                //});
            },
            rules:{
                login_user:{
                    required: true,
                    rangelength:[5,10],
                },
                login_pass:{
                    required: true,
                    rangelength:[5,10],
                    remote : {
                        url : 'login.php',
                        type : 'POST',
                        data : {
                            login_user : function () {
                                return $('#login_user').val();
                            },
                        },
                    },
                }
            },
            messages:{
                login_user:{
                    required:"请输入用户名",
                    rangelength: jQuery.validator.format("请输入长度介于 {0} 和 {1} 之间用户名"),
                },
                login_pass:{
                    required: "请输入密码",
                    rangelength: jQuery.validator.format("请输入长度介于 {0} 和 {1} 之间的密码"),
                    remote : '帐号或密码不正确！',
                }
            },
            errorLabelContainer : 'ol.my_error',
            wrapper : 'li',
            //onsubmit:false,
            //onfocusout:false,
            //onkeyup:false,
            //onclick:false,

        });



    })();






});