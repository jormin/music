/**
 * 音乐播放器
 * @type {Class}
 */
//myFunction.js
var AudioPlayer = function(options){
	var ap = new Object();
	ap.audio = document.createElement("AUDIO");
	ap.playsongs = [];
    ap.currentindex = 0;
	if(options){
		if(options.playsongs.length > 0){
			ap.playsongs = options.playsongs;
			ap.audio.src = ap.playsongs[0]['url'];
		}
	}

    /**
    * public method setmusic
    * Open Modal
    * @index: 播放指定下标歌曲
    * @return node HTML
    */
    ap.setmusic = function(index){
    	var music = ap.playsongs[index];
    	if(!music){
    		return;
    	}
    	ap.audio.pause();
    	ap.audio.src = music.url;
    	setTimeout(function(){
    		ap.audio.play();
    	},200);
    	ap.currentindex = index;
    },
    
    /**
    * 播放
    */
    ap.play = function(time){
    	if(time){
            if(time > ap.audio.duration){
                return;
            }
            ap.audio.currentTime = time;
            ap.audio.play();
    	}else{
	    	if(ap.audio.paused){
	    		ap.audio.play();
	    	}
    	}
    },
    
    /**
    * 暂停
    */
    ap.pause = function(){
    	if(!ap.audio.paused){
    		ap.audio.pause();
    	}
    },

    /**
     * 播放/暂停
     */
    ap.toggle = function(){
    	if(ap.audio.paused){
    		ap.audio.play();
    	}else{
    		ap.audio.pause();
    	}
    }

    /**
    * 添加到播放列表
    */
    ap.addmusic = function(music){
    	if(music && music.id && music.url && music.artist && music.name){
    		ap.playsongs.push(music);
    	}
    },

    /**
     * 移出播放列表
     */
    ap.delmusic = function(id){
    	$(ap.playsongs).each(function(index,item){
    		if(item.id == id){
    			ap.playsongs.remove(index);
    		}
    	})
    },

    /**
     * 设置音量
     * @param  {[type]} volume [description]
     * @return {[type]}        [description]
     */
    ap.setvolume = function(volume){
    	if(volume < 0 || volume > 1){
    		return;
    	}
    	ap.audio.volume = volume;
    },

    /**
     * 监听事件
     * @param  {[type]} event [description]
     * @param  {[type]} fun   [description]
     * @return {[type]}       [description]
     */
    ap.on = function(type,fn){
    	var cms = ['error','pause',"play","playing","ended"];
    	if(cms.indexOf(type) == -1){
    		return;
    	}
		ap.audio.addEventListener(type, function(){
			if(type == "playing"){
				setInterval(function(){
					fn();
				},1000);
			}else{
                fn();
            }
		}, false);
    },

    /**
     * 销毁播放器
     * @return {[type]} [description]
     */
    ap.remove = function(){
        ap.playsongs = [];
        ap.audio.pause();
        ap.audio.src = null;
    }

	return ap;
}
