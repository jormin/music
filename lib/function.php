<?php
    
    /**
     * 浏览器友好的变量输出
     * @param mixed $var 变量
     * @param boolean $echo 是否输出 默认为True 如果为false 则返回输出字符串
     * @param string $label 标签 默认为空
     * @param boolean $strict 是否严谨 默认为true
     * @return void|string
     */
    function obj_dump($var, $echo=true, $label=null, $strict=true) {
        $label = ($label === null) ? '' : rtrim($label) . ' ';
        if (!$strict) {
            if (ini_get('html_errors')) {
                $output = print_r($var, true);
                $output = '<pre>' . $label . htmlspecialchars($output, ENT_QUOTES) . '</pre>';
            } else {
                $output = $label . print_r($var, true);
            }
        } else {
            ob_start();
            var_dump($var);
            $output = ob_get_clean();
            if (!extension_loaded('xdebug')) {
                $output = preg_replace('/\]\=\>\n(\s+)/m', '] => ', $output);
                $output = '<pre>' . $label . htmlspecialchars($output, ENT_QUOTES) . '</pre>';
            }
        }
        if ($echo) {
            echo($output);
            return null;
        }else
            return $output;
    }

    /**
     * 格式化打印
     * @param  [必需] Object  array       要打印的对象
     */
    function p($array){
        obj_dump( $array, 1, '<pre>', 0);
    }

    /**
     * 格式化日期
     * @param  [type] $time [description]
     * @return [type]       [description]
     */
    function format_date($time) {
        $nowtime = time();
        $difference = $nowtime - $time;
        switch ($difference) {
            case $difference <= '60' :
                $msg = '刚刚';
                break;
            case $difference > '60' && $difference <= '3600' :
                $msg = floor($difference / 60) . '分钟前';
                break;
            case $difference > '3600' && $difference <= '86400' :
                $msg = floor($difference / 3600) . '小时前';
                break;
            case $difference > '86400' && $difference <= '2592000' :
                $msg = floor($difference / 86400) . '天前';
                break;
            case $difference > '2592000' &&  $difference <= '7776000':
                $msg = floor($difference / 2592000) . '个月前';
                break;
            case $difference > '7776000':
                $msg = '很久以前';
                break;
        }
        return $msg;
    }

    /**
     * 安全合并数组
     * @param  [type] $args [description]
     * @return [type]       [description]
     */
    function safe_array_merge(){
        $args = func_get_args();
        foreach ($args as $key => $item) {
            if(count($item) == 0){
                continue;
            }
            if($data){  
                $data = array_merge($data,$item);            
            }else{
                $data = $item;
            }
        }
        return $data;
    }

    /**
     * 页面跳转
     */
    function redirect($url){
        Header("Location: $url"); 
    }

    /**
     * 返回数据
     * @author 谢乔敏
     * @param  [必需] String  result          结果码[0:成功  -1:失败]
     * @param  [必需] String  description     结果描述
     * @param  [可选] Object  data            数据对象
     * @param  [可选] Int         type            请求验证类型[0:合法  －1:非法]
     */
    function returnMsg($result,$description,$data=null,$type=0){
        $response = array(
                'data' => $data,
                'result' => $result,
                'description' => $description
            );
        exit(json_encode($response));
    }

    /**
     * 生成GUID
     */
    function guid(){
        if (function_exists('com_create_guid')){
            return strtolower(preg_replace( '/\{(.*)\}/', '',com_create_guid()));
        }else{
            mt_srand((double)microtime()*10000);//optional for php 4.2.0 and up.
            $charid = strtoupper(md5(uniqid(rand(), true)));
            $hyphen = chr(45);// "-"
            $uuid = substr($charid, 0, 8).$hyphen
                .substr($charid, 8, 4).$hyphen
                .substr($charid,12, 4).$hyphen
                .substr($charid,16, 4).$hyphen
                .substr($charid,20,12);
            return strtolower($uuid);
        }
    }