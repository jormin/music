<?php
    include_once("./lib/init.php");
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == "GET"){
        if(session("uid")){
            redirect("index.php");
        }
    }else{
        $uid = trim($_POST['uid']);
        if(!$uid){
            die;
        }
        session('uid',$uid);
        returnMsg(0,"登录成功");
    }
?>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>用户登录</title>
    <!--[if lte IE 9]>
    <script type="text/javascript">location.href = '/unsupport-browser.html';</script>
    <![endif]-->
    <link rel="stylesheet" href="./res/css/vendor.css">
    <link rel="stylesheet" href="./res/css/app.css">
</head>
<body class="coding-center coding ng-scope random-background account-background" style="margin: 0px; padding: 0px; height: 100%; background: url(./res/images/login_background.jpg) 50% 50% / cover no-repeat fixed;">
    <div class="wrapper ng-scope" ng-view="">
        <div class="account-flex-container ng-scope">
            <iframe src="about:blank" name="sink" style="display:none"></iframe>
            <div ng-controller="LoginController" class="account-container ng-scope">
                <h2>用户登录</h2>
                <div>
                    <input-gk-phone-email ret="account" class="ng-isolate-scope">
                        <div class="account-input dirty">
                            <input autofocus="" ng-model="ret.value" placeholder="网易云音乐ID" name="uid"></div>
                    </input-gk-phone-email>
                    <br>
                    <button id="login-btn">登录</button>
                </div>
            </div>
        </div>
    </div>
    <script src="/res/js/jquery.min.js"></script>
    <script src="/res/js/requestAjax.js"></script>
    <script src="/res/vendor/layer/layer.js"></script>
    <script type="text/javascript">
        $("#login-btn").click(function(){
            var _this = $(this);
            var uid = $(this).closest('div').find("input[name='uid']").val();
            if(!uid){
                layer.msg("请输入网易云音乐ID");
                return false;
            }
            _this.addClass("loading");
            _this.attr("disabled","disabled");
            var params = {uid:uid};
            var callback = function(msg){
                _this.removeClass("loading");
                if(msg.result == 0){
                    window.location.href = "/index.php";
                }else{
                    layer.msg(msg.description,function(){
                        _this.removeAttr("disabled");
                    })
                }
            };
            requestAjax(params, 'post', '/login.php', callback, true);
        });
    </script>
</body>
</html>