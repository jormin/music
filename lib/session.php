<?php
	session_start();

	/**
	 * session处理
	 */
	function session($key,$value=""){
		if($value){
			$_SESSION[$key] = $value;
		}else{
			return $_SESSION[$key];
		}
	}