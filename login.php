<?php
    include_once("./lib/init.php");
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == "GET"){
        if(session("isauth") == 1){
            redirect("index.php");
        }
    }else{
        $_params = json_decode(file_get_contents('php://input'),true);
        $account = trim($_params['account']);
        $password = trim($_params['password']);
        if(!$account || !$password){
            die;
        }
        $url = "https://coding.net/api/v2/account/login?account={$account}&password=".sha1($password);
        $cookie = "sid=".guid();
        $response = json_decode(http("post",$url,null,$cookie),true);
        if($response['code'] != 0){
            returnMsg(-1,"粗错咯，邮箱或者密码不对～");
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
    <link rel="stylesheet" href="/res/css/vendor.css">
    <link rel="stylesheet" href="/res/css/app.css">
</head>
<body class="coding-center coding ng-scope random-background account-background" style="margin: 0px; padding: 0px; height: 100%; background: url(./res/images/login_background.jpg) 50% 50% / cover no-repeat fixed;">
    <div class="wrapper" id="loginwrap">
        <div class="account-flex-container ng-scope">
            <iframe src="about:blank" name="sink" style="display:none"></iframe>
            <div ng-controller="LoginController" class="account-container ng-scope">
                <h2>用户登录</h2>
                <div>
                    <div ret="account" class="ng-isolate-scope">
                        <div class="account-input dirty" ng-class="{dirty: dirty}">
                            <input autofocus="" v-model="account" placeholder="邮箱" v-on:keyup.enter="typepassword"></div>
                    </div>
                    <div ret="password" show-error="false" class="ng-isolate-scope">
                        <div class="account-input" ng-class="{dirty: dirty}">
                            <input type="password" placeholder="密码" name="password" v-model="password" v-on:keyup.enter="login">
                            <span ng-show="!ret.valid" class="error ng-binding ng-hide"></span>
                        </div>
                    </div>
                    <br>
                    <button :class="{loading:islogin}" :disabled="islogin" v-on:click="login">登录</button>
                </div>
            </div>
        </div>
    </div>
    <script src="/res/js/jquery.min.js"></script>
    <script src="/res/js/vue.js"></script>
    <script src="/res/vendor/layer/layer.js"></script>
    <script src="/res/js/axios.min.js"></script>
    <script src="/res/js/lodash.min.js"></script>
    <script type="text/javascript">
        var loginvm = new Vue({
            el : '#loginwrap',
            data : {
                account : '',
                password : '',
                islogin : false
            },
            methods : {
                typepassword : function(){
                    $("#loginwrap").find("input[name=password]").focus();
                },
                login : function(){
                    var vm = this;
                    var _logindom = $("#loginwrap");
                    if(!vm.account){
                        layer.msg("请输入邮箱");
                        return false;
                    }
                    if(!vm.password){
                        layer.msg("请输入密码");
                        return false;
                    }
                    vm.islogin = true;
                    var params = {account:vm.account,password:vm.password};
                    axios.post("/login.php",params)
                        .then(function(response){
                            var msg = response.data;
                            _logindom.removeClass("loading");
                            if(msg.result == 0){
                                window.location.href = "/index.php";
                            }else{
                                vm.islogin = false;
                                layer.msg(msg.description,function(){
                                    _logindom.removeAttr("disabled");
                                })
                            }
                        })
                        .catch(function(error){
                            vm.islogin = false;
                            vm.answer = '访问接口失败' + error
                        })
                }
            }
        });
    </script>
</body>
</html>