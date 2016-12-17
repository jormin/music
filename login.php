<?php
    include_once("./lib/init.php");
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == "GET"){
        if(session("isauth") == 1){
            redirect("index.php");
        }
    }else{
        $account = trim($_POST['account']);
        $password = trim($_POST['password']);
        if(!$account || !$password){
            die;
        }
        $url = "https://coding.net/api/v2/account/login?account={$account}&password=".sha1($password);
        $cookie = "sid=".guid();
        $response = json_decode(http("post",$url,null,$cookie),true);
        if($response['code'] != 0){
            returnMsg(-1,"用户名或密码错误");
        }
        $user = $response['data'];
        if(substr($user['avatar'],0,4) != "http"){
            $user['avatar'] = "https://coding.net".$user['avatar'];
        }
        session('user',$user);
        $url = "https://coding.net/api/user/banshan/project/music";
        $response = json_decode(http("get",$url,null,$cookie),true);
        if($response['code'] == 0){
            session('isauth',1);
        }
        returnMsg($response['code'],$response['msg']['permission_denied']);
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
                        <div class="account-input dirty" ng-class="{dirty: dirty}">
                            <input autofocus="" ng-model="ret.value" placeholder="邮箱" ng-blur="check()" ng-keyup="check()" name="account" class="ng-valid ng-touched ng-dirty ng-valid-parse"></div>
                    </input-gk-phone-email>
                    <input-password ret="password" show-error="false" class="ng-isolate-scope">
                        <div class="account-input" ng-class="{dirty: dirty}">
                            <input type="password" ng-model="ret.value" placeholder="密码" ng-class="{error: !ret.valid}" ng-blur="check()" ng-keyup="check()" name="password" class="ng-valid ng-dirty ng-valid-parse ng-touched">
                            <span ng-show="!ret.valid" class="error ng-binding ng-hide"></span>
                        </div>
                    </input-password>
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
            var account = $(this).closest('div').find("input[name='account']").val();
            var password = $(this).closest('div').find("input[name='password']").val();
            if(!account || !password){
                return false;
            }
            _this.addClass("loading");
            _this.attr("disabled","disabled");
            var params = {account:account,password:password};
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