<?php
    /**
     * CURL访问HTTP请求
     * @author 谢乔敏
     * @param  [必需] String 	method 	请求的方法
     * @param  [必需] String 	url 	请求的地址
     * @param  [可选] Object 	data 	请求的参数
     * @return String 	访问的结果
     */
    function http($method,$url,$data=null,$cookie=null){
        //初始化
        $ch = curl_init();
        //设置选项，包括URL
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        //GET请求
        if($method == 'GET' || $method == 'get'){
            curl_setopt($ch, CURLOPT_HEADER, 0);
        }
        // POST请求
        if($method == 'POST' || $method == 'post'){
            curl_setopt($ch, CURLOPT_POST, 1);
            // 参数
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        }
        if($cookie){
            curl_setopt($ch, CURLOPT_COOKIE, $cookie);
        }
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        //执行并获取HTML文档内容
        $output = curl_exec($ch);
        if (curl_errno($ch)) {
            return curl_error($ch);
        }
        //释放curl句柄
        curl_close($ch);
        //返回获得的数据
        return $output;
    }
    
    /**
     * CURL访问HTTPS请求
     * @author 谢乔敏
     * @param  [必需] String 	method 	请求的方法
     * @param  [必需] String 	url 	请求的地址
     * @param  [可选] Object 	data 	请求的参数
     * @return String 	访问的结果
     */
    function https($method,$url,$data){
        //初始化
        $ch = curl_init();
        //设置选项，包括URL
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 0);
        curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        //GET请求
        if($method == 'GET' || $method == 'get'){
          		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
        }
    
        // POST请求
        if($method == 'POST' || $method == 'post'){
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            // 参数
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        }
    
        //执行并获取HTML文档内容
        $output = curl_exec($ch);
        if (curl_errno($ch)) {
            return curl_error($ch);
        }
        //释放curl句柄
        curl_close($ch);
        //返回获得的数据
        return $output;
    }
    
    /**
     * 发送post请求
     * @param  [必需] String  	url 	请求地址
     * @param  [可选] Object 	data 	请求的参数
     * @return String 	访问的结果
     */
    function send_post($url, $data = null) {
        $postdata = http_build_query($data);
        $options = array(
            'http' => array(
                'method' => 'POST',
                'header' => 'Content-type:application/x-www-form-urlencoded',
                'content' => $postdata,
                'timeout' => 15 * 60 // 超时时间（单位:s）
            )
        );
        $context = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        return $result;
    }
    
    /**
     * 获取请求访问的接口名称
     */
    function get_request_api(){
        $request_uri = $_SERVER['REQUEST_URI'];
        $addr = strpos($request_uri,'?');
        if(!$addr){
            $addr = strlen($request_uri);
        }
        $request = substr($request_uri, 0,$addr);
        $apiArray = explode("/",$request);
        $action = $apiArray[count($apiArray)-1];
        // $url = __SELF__;
        // $url_array = explode("/", $url);
        // $action = $url_array[2];
        return $action;
    }