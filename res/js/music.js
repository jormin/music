setlocalstorage("playsongs","");
var music = new Vue({
    el : '#music',
    data : {
        pause:true,
        currentpercent:0,
        currentbuffered:0,
        keyword : getlocalstorage("keyword"),
        currentnav: 1,
        isload : false,
        page : 1,
        type : 1,
        songs : '',
        playsongs : [],
        mvs : '',
        albums : '',
        artists : '',
        playlist : '',
        songCount : 0,
        totalpage : 0,
        cusong:{
            id : 0,
            dt : 0
        },
        cutime : "00:00",
        isshowpanel : false,
        blockaplayer : true,
        setvolume : false,
        silence:false,
        audiomode:{
            showmodetip:false,
            currentmode:0,
            currentmodestr:"循环"
        },
        audiotip:{
            showaudiotip:false,
            tip:''
        },
        keymap : {
            1:"song",
            10:"album",
            100:"artist",
            1000:'playlist',
            1004:"mv",
            1006:"song",
        },
        user:user,
        aplayer:'',
        isdrag:false
    },
    created: function () {
        var vm = this;
        var playsongs = getlocalstorage("playsongs");
        if(playsongs){
            vm.playsongs = eval(playsongs);
            vm.cusong = vm.playsongs[0];
        }
        vm.aplayer = new AudioPlayer({playsongs:vm.playsongs});
        vm.aplayer.on("error", function(){
            layer.msg("加载歌曲粗错咯，刷新下页面试试吧～");
        }),
        vm.aplayer.on("playing", function(){
            if(!vm.isdrag){
                var time = parseInt(vm.aplayer.audio.currentTime);
                var minute = parseInt(time/60);
                var second = time%60;
                minute = (minute < 10) ? "0"+minute : minute;
                second = (second < 10) ? "0"+second : second;
                vm.cutime = minute+":"+second;
            }
        })
        vm.aplayer.on("ended",function(){
                vm.playnext();
        });

        if(!vm.keyword){
            vm.keyword = "周杰伦";
        }
        var albumid = getlocalstorage("albumid");
        if(albumid){
            vm.searchalbum(albumid,vm.keyword);
        }else{
            vm.search();
        }
    },
    computed : {
        activenav : function(){
            return {
                "z-slt" : true
            };
        },
        hasmore : function(){
            var vm = this;
            if(vm.isload){
                return false;
            }else{
                if(vm.totalpage == 0 || vm.totalpage == vm.page){
                    return false;
                }else{
                    return true;
                }
            }
        },
    },
    watch : {
        cutime : function(){
            var vm = this;
            var cutimearr = vm.cutime.split(":");
            var cutimeint = parseInt(cutimearr[0]*60)+parseInt(cutimearr[1]);
            var totalint = parseInt(vm.cusong.dt/1000); 
            vm.currentpercent = (parseFloat(cutimeint/totalint)*100).toFixed(2);
            var audio = vm.aplayer.audio;
            audio.readyState == 4 && (vm.currentbuffered = (audio.buffered.end(0)/audio.duration)*100);
        },
        'audiomode.currentmode' : function(){
            var vm = this;
            vm.aplayer.on("ended",function(){
                if(vm.aplayer.currentindex == undefined){
                    vm.aplayer.currentindex = 0;
                }
                switch(vm.audiomode.currentmode){
                    case 0:
                        vm.aplayer.audio.loop = false;
                        vm.playnext();
                        break;
                    case 1:
                        vm.aplayer.audio.loop = false;
                        var index = Math.floor(Math.random()*vm.playsongs.length)+0;
                        vm.cusong = vm.playsongs[index];
                        vm.aplayer.setmusic(index);
                        break;
                    case 2:
                        vm.aplayer.audio.loop = true;
                        break;
                }
            });
        },
        cusong : function(){
            var vm = this;
            if(vm.cusong){
                $('#timepoint').draggable({
                    containment: $("#timeline"),axis:'x',cursor:'pointer'
                }).bind('dragstart',function(event){
                    vm.isdrag = true;
                }).bind('drag',function(){
                    var rate = parseFloat(parseInt($(this).css("left"))/parseInt($("#timeline").css("width")));
                    var time = parseInt(rate*vm.cusong.dt);
                    vm.cutime = vm.formatdate(time);
                }).bind('dragstop',function(){
                    vm.aplayer.play(vm.srctotime(vm.cutime));
                    var _dom = $(this);
                    setTimeout(function(){
                        _dom.css("left","");
                        vm.isdrag = false;
                    },1000);
                });
                $('#volumepoint').draggable({
                    containment: $("#volumeline").parent(),axis:'y',cursor:'pointer'
                }).bind('drag',function(){
                    var _dom = $(this);
                    var voheight = 90.6-parseInt(_dom.css("top"));
                    _dom.prev().css("height",voheight+"px");
                    var rate = 1-parseFloat(parseInt(_dom.css("top"))/86).toFixed(1);
                    if(rate > 1){
                        rate = 1;
                    }
                    if(rate == 0){
                        vm.silence = true;
                    }else{
                        vm.silence = false;
                    }
                    vm.aplayer.audio.volume = rate;
                });
            }else{
                $('#timepoint').draggable("disable");
            }
        }
    },
    methods : {
        search : _.debounce(function(isappend){
            var vm = this;
            if(!vm.keyword){
                return;
            }
            vm.isload = true;
            var type = $(this.$el).find(".z-slt").data("type");
            var key = vm.keymap[type];
            if(isappend != 1){
                vm.page = 1;
                vm[key+"s"] = [];
                vm[key+"Count"] = 0;
                vm.totalpage = 0;
            }
            setlocalstorage("albumid","");
            var params = {action:"search",keyword:vm.keyword,page:vm.page,type:type};
            axios.post("/song.php",params)
                .then(function(response){
                    vm.isload = false;
                    var data = response.data.result[key+"s"];
                    if(!data){
                        return;
                    }
                    vm.page++;
                    if(isappend == 1){
                        vm[key+"s"] = vm[key+"s"].concat(data);
                    }else{
                        vm[key+"s"] = data;
                    }
                    vm[key+"Count"] = response.data.result[key+"Count"];
                    vm.totalpage = Math.ceil(vm[key+"Count"]/20);
                    setlocalstorage("keyword",vm.keyword);
                })
                .catch(function(error){
                    vm.isload = false;
                    vm.answer = '访问接口失败' + error
                })
        },500),
        searchsong : function(songanme){
            this.keyword = songanme;
            this.search();
        },
        searchartist : function(artistid,name){
            this.keyword = name;
            this.search();
        },
        searchalbum : function(albumid,name){
            var vm = this;
            var params = {action:"album",albumid:albumid};
            axios.post("/song.php",params)
                .then(function(response){
                    var songs = response.data.songs;
                    if(!songs){
                        return;
                    }
                    vm.hasmore =  false;
                    vm.page = 1;
                    vm.songs = songs;
                    vm.keyword = name;
                    vm.songCount = songs.length;
                    setlocalstorage("albumid",albumid);
                    setlocalstorage("keyword",vm.keyword);
                })
                .catch(function(error){
                    vm.answer = '访问接口失败' + error
                })
        },
        typenav : function(e){
            var type = $(e.currentTarget).data("type");
            this.songCount = 0;
            this.totalpage = 0;
            this.currentnav = type;
            this.search();
        },
        formatdate : function(time){
            if(!time || time == 0){
                return "00:00";
            }
            var minutes = parseInt(time/(1000*60));
            if(minutes < 10){
                minutes = "0"+minutes;
            }
            var seconds = parseInt(time%(1000*60)/1000);
            if(seconds < 10){
                seconds = "0"+seconds;
            }
            return minutes+":"+seconds;
        },
        getlrctime : function(lrc){
            if(lrc.substr(0,1) != "["){
                return;
            }
            var timestr = lrc.substr(1,lrc.lastIndexOf("]"));
            return this.srctotime(timestr);
        },
        srctotime : function(str){
            var timearr = str.split(":");
            if(timearr.length == 1){
                return 0;
            }
            var time = parseInt(timearr[0]*60) + parseInt(timearr[1].substr(0,2));
            return time;
        },
        playtoggle : function(){
            var vm = this;
            if(vm.pause && !vm.cusong.id && vm.playsongs.length == 0){
                return;
            }
            if(!vm.cusong.id){
                vm.cusong = vm.playsongs[0];
                vm.aplayer.setmusic(0);
            }
            vm.pause = !vm.pause;
            vm.aplayer.toggle();
        },
        playpre : function(){
            var vm = this;
            if(vm.aplayer.currentindex == undefined){
                vm.aplayer.currentindex = 0;
            }
            var index = vm.aplayer.currentindex;
            switch(vm.audiomode.currentmode){
                case 0:
                case 2:
                    if(index == 0){
                        index = vm.playsongs.length-1;
                    }else{
                        index--;
                    }
                    break;
                case 1:
                    index = Math.floor(Math.random()*vm.playsongs.length)+0;
                    break;
            }
            var music = vm.playsongs[index];
            if(!music){
                layer.msg("前面没有歌曲咯～");
                return;
            }
            vm.cusong = music;
            vm.aplayer.setmusic(index);
        },
        playnext : function(){
            var vm = this;
            if(vm.aplayer.currentindex == undefined){
                vm.aplayer.currentindex = 0;
            }
            var index = vm.aplayer.currentindex;
            switch(vm.audiomode.currentmode){
                case 0:
                case 2:
                    if(index == vm.playsongs.length-1){
                        index = 0;
                    }else{
                        index++;
                    }
                    break;
                case 1:
                    index = Math.floor(Math.random()*vm.playsongs.length)+0;
                    break;
            }
            var music = vm.playsongs[index];
            if(!music){
                layer.msg("后面没有歌曲咯～");
                return;
            }
            vm.cusong = music;
            vm.aplayer.setmusic(index);
        },
        iscurrentlrc : function(index,e){
            var vm = this;
            var lrc = vm.cusong.lrc[index];
            var nextlrc = vm.cusong.lrc[index+1];
            var cutime = vm.srctotime(vm.cutime);
            var lrctime = lrc.time;
            var nextlrctime;
            if(!nextlrc){
                nextlrctime = cutime + 1;
            }else{
                nextlrctime = nextlrc.time;
            }
            if(lrctime < cutime && nextlrctime > cutime){
                if(!vm.isdrag){
                    var culrcitem = $("div.listlyric").find("p:eq("+index+")");
                    var container = $("div.listlyric");
                    if(culrcitem.length > 0){
                        var offset = index*parseInt(culrcitem.css("height")) - 100;
                        if(offset > container.scrollTop() ){
                            container.animate({
                                scrollTop: offset
                            });
                        }
                    }
                }
                return true;
            }else{
                return false;
            }
        },
        formatlrc : function(lrc){
            return lrc.substr(lrc.lastIndexOf("]")+1);
        },
        iscurrentnav : function(nav){
            return this.currentnav == nav;
        },
        iseven : function(index){
            if(index%2){
                return false;
            }else{
                return true;
            }
        },
        isnotlast : function(index,data){
            if(index == data.length-1){
                return false;
            }else{
                return true;
            }
        },
        isforbidden : function(subp){
            if(subp == "0"){
                return true;
            }else{
                return false;
            }
        },
        playsong: _.debounce(function(song,showtip){
            var vm = this;
            vm.pause = false;
            if(song.privilege.subp == "0"){
                layer.msg("粗错咯，网易没这首歌的版权～");
                return;
            }
            var hasplay = false;
            $(vm.playsongs).each(function(index,item){
                if(song.id == item.id){
                    vm.aplayer.setmusic(index);
                    vm.cusong = vm.playsongs[index];
                    hasplay = true;
                    return false;
                }
            })
            if(hasplay){
                return;
            }
            var params = {action:"songinfo",songid:song.id,albumid:song.al.id};
            axios.post("/song.php",params)
                .then(function(response){
                    var songinfo = response.data;
                    if(!songinfo){
                        layer.msg("播放失败");
                        return;
                    }
                    song.artist = vm.formatarname(song.ar);
                    song.url = songinfo.url;
                    song.cover = songinfo.cover;
                    song.lrc = vm.initlrc(songinfo.lrc);
                    vm.playsongs.push(song);
                    setlocalstorage("playsongs",JSON.stringify(vm.playsongs));
                    var index = vm.playsongs.indexOf(song);
                    vm.aplayer.addmusic(song);
                    vm.aplayer.setmusic(index);
                    vm.cusong = song;
                    vm.pause = false;
                    if(showtip == 1){
                        vm.audiotip.tip = "已开始播放";
                        vm.audiotip.showaudiotip = true;
                        setTimeout(function(){
                            vm.audiotip.showaudiotip = false;
                        },2500);
                    }
                })
                .catch(function(error){
                    vm.answer = '访问接口失败' + error
                })
        },500),
        initlrc : function(lrc){
            var vm = this;
            if(!lrc){
                return new Array;
            }
            var lrcarrs = lrc.split("\n");
            var newlrcs = [];
            $(lrcarrs).each(function(index,item){
                var lrc = item.substr(item.lastIndexOf("]")+1);
                var timearr = item.substr(1,item.lastIndexOf("]")-1).split("][");
                $(timearr).each(function(subindex,timestr){
                    if(!timestr){
                        return true;
                    }
                    var time = vm.srctotime(timestr);
                    newlrcs.push({time:time,lrc:lrc});
                });
            });
            newlrcs.sort(function(x,y){return x.time-y.time})
            return newlrcs;
        },
        addtoplaylist: function(song){
            var vm = this;
            if(song.privilege.subp == "0"){
                layer.msg("粗错咯，网易没这首歌的版权～");
                return;
            }
            var hasplay = false;
            $(vm.playsongs).each(function(index,item){
                if(song.id == item.id){
                    layer.msg("已添加到播放列表");
                    hasplay = true;
                    return false;
                }
            })
            if(hasplay){
                return;
            }
            var params = {action:"songinfo",songid:song.id,albumid:song.al.id};
            axios.post("/song.php",params)
                .then(function(response){
                    var songinfo = response.data;
                    if(!songinfo){
                        layer.msg("添加列表失败");
                        return;
                    }
                    song.artist = vm.formatarname(song.ar);
                    song.url = songinfo.url;
                    song.cover = songinfo.cover;
                    song.lrc = vm.initlrc(songinfo.lrc);
                    vm.playsongs.push(song);
                    vm.aplayer.addmusic(song);
                    setlocalstorage("playsongs",JSON.stringify(vm.playsongs));
                    vm.audiotip.tip = "已添加到播放列表";
                    vm.audiotip.showaudiotip = true;
                    setTimeout(function(){
                        vm.audiotip.showaudiotip = false;
                    },2500);
                })
                .catch(function(error){
                    vm.answer = '访问接口失败' + error
                })
        },
        playmv : _.debounce(function(mvid,name){
            var vm = this;
            var hasplay = true;
            vm.aplayer.pause();
            init_videoplayer(mvid,name);
        },500),
        formatarname : function(ars){
            var artists = new Array();
            $(ars).each(function(index,artist){
                artists.push(artist.name)
            })
            return artists.join("/");
        },
        clearplaysongs : function(){
            var vm = this;
            vm.playsongs = [];
            vm.cusong = '';
            vm.aplayer.remove();
            vm.pause = true;
        },
        removesong : function(index){
            var vm = this;
            var song = vm.aplayer.playsongs[index];
            if(!song){
                return;
            }
            vm.playsongs.splice(index,1);
            vm.aplayer.playsongs.splice[index,1];
            if(song.id == vm.cusong.id){
                var nextsong = vm.playsongs[index];
                if(nextsong){
                    vm.aplayer.setmusic(index);
                    vm.cusong = vm.playsongs[index];
                }else{
                    vm.cusong = '';
                    vm.pause = true;
                    vm.aplayer.pause();
                }
            }
        },
        enteraplayer : function(){
            var vm = this;
            $("#aplayer").animate({"bottom":0});
        },
        leaveaplayer : function(){
            var vm = this;
            if(vm.blockaplayer){
                return;
            }
            $("#aplayer").animate({"bottom":"-47px"});
        },
        setaudiomode : function(){
            var vm = this;
            var modes = ['循环','随机','单曲循环'];
            if(vm.audiomode.currentmode == 2){
                vm.audiomode.currentmode = 0;
            }else{
                vm.audiomode.currentmode++;
            }
            vm.audiomode.currentmodestr = modes[vm.audiomode.currentmode];
            vm.audiomode.showmodetip = true;
            setTimeout(function(){
                vm.audiomode.showmodetip = false;
            },2500);
        },
        formatbykeyword : function(str){
            var vm = this;
            return str.replace(vm.keyword,'<span class="s-fc7">'+vm.keyword+'</span>');
        },
        formatnum : function(num){
            if(num < 10000){
                return num;
            }else{
                return parseInt(num/10000)+"万";
            }
        }
    }
});
function init_videoplayer(mvid,name){
    var vlayer = new SimpleModal({"hideFooter":true, "width":710});
    vlayer.show({
      "title":name,
      "model":"modal",
      "contents":'<iframe src="/playmv.php?mvid='+mvid+'" width="680" height="382" frameborder="0" webkitAllowFullScreen allowFullScreen rel="noreferrer"></iframe>'
    });
    $("#simple-modal").find("a.close").on("click",function(){
        $('#simple-modal-overlay').remove();
        $('#simple-modal').remove();
    });
}
function setlocalstorage(key,value){
    key = user.id+"_"+key;
    if (window.localStorage) {
        localStorage.setItem(key, value);
    } else {
        Cookie.write(key, value);  
    }
}
function getlocalstorage(key){
    key = user.id+"_"+key;
    if (window.localStorage) {
        return localStorage.getItem(key);  
    } else {
        return Cookie.read(key);  
    }
}
