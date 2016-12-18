<?php
    include_once("./lib/init.php");
    $_params = json_decode(file_get_contents('php://input'),true);
    $action = $_params['action'];
    $netease = new NeteaseMusicAPI();
    switch($action){
    	case 'search':
    		$keyword = trim($_params['keyword']);
    		$limit = 20;
    		$page = intval($_params['page']);
    		if(!$page){
    			$page = 1;
    		}
    		$type = intval($_params['type']);
    		$response = $netease->search($keyword,$limit,$limit*$page,$type);
    		break;
    	case 'songinfo':
    		$songid = trim($_params['songid']);
    		$songinfo = json_decode($netease->url($songid),true);
    		if($songinfo['data'][0]){
    			$song['url'] = $songinfo['data'][0]['url'];
    			$lrcinfo = json_decode($netease->lyric($songid),true);
    			$song['lrc'] = $lrcinfo['lrc']['lyric'];
    		}else{
    			$song = null;
    		}
    		$response = json_encode($song);
    		break;
    	case 'mvinfo':
    		$mvid = trim($_params['mvid']);
    		$mvinfo = json_decode($netease->mv($mvid),true);
    		if($mvinfo['data']){
    			$mv = $mvinfo['data'];
                $parr = array("720","480","240");
                foreach ($parr as $key => $item) {
                    if($mv['brs'][$item]){
                        $mv['url'] = $mv['brs'][$item];
                        break;
                    }
                }
    		}else{
    			$mv = null;
    		}
    		$response = json_encode($mv);
    		break;
        case 'album':
            $albumid = trim($_params['albumid']);
            $response = $netease->album($albumid);
            break;
    }
    die($response);
?>