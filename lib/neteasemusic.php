<?php
class NeteaseMusic{

	/**
	 * 搜索
	 * @param  [type] $word 关键字
	 * @param  [type] $type 类型 1：单曲 10：专辑 100：歌手 1000：歌单 1002：用户
	 * @return [type]       [description]
	 */
	public function music_search($word, $type, $limit=20, $offset=0){
	    $url = "https://music.163.com/weapi/search/suggest/web?csrf_token=";
	    $params = "s=".$word."&offset=".$offset."&limit=".$limit."&type=".$type;
	    $response = $this->http("post",$url,$params);
	    return $result;
	}

	/**
     * CURL访问HTTP请求
     * @param  [必需] String 	method 	请求的方法
     * @param  [必需] String 	url 	请求的地址
     * @param  [可选] Object 	data 	请求的参数
     * @return String 	访问的结果
     */
    function http($method,$url,$data=null,$refer=null){
        //初始化
        $ch = curl_init();
        //设置选项，包括URL
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        //GET请求
        if(strtoupper($method) == 'GET'){
            curl_setopt($ch, CURLOPT_HEADER, 0);
        }
        // POST请求
        if(strtoupper($method) == 'POST'){
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        }
	    $refer = "https://music.163.com/";
	    // $header[] = "Cookie: " . "appver=1.5.2;";
	    $header =array(
	        'Host: music.163.com',
	        'Origin: https://music.163.com',
	        'User-Agent: Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36',
	        'Content-Type: application/x-www-form-urlencoded',
	        'Referer: https://music.163.com/search/',
	    );

	    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
	    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
	    curl_setopt($ch, CURLOPT_REFERER, $refer);
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
}