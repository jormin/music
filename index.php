<?php
    include_once("./lib/init.php");
    // $netease = new NeteaseMusicAPI();
    // // $response = $netease->search("ColdPlay");
    // $response = $netease->mv(292165);
    // p($response);die;
    if(session("isauth") != 1){
        redirect("/login.php");
    }
    $user = session('user');
    header("Content-type: text/html; charset=utf-8"); 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>音乐</title>
    <link rel="stylesheet" type="text/css" href="/res/css/core.css">
    <link rel="stylesheet" type="text/css" href="/res/css/pt_frame.css">
    <link rel="stylesheet" type="text/css" href="/res/css/pt_search_index.css">
    <link rel="stylesheet" type="text/css" href="/res/css/music.css">
    <link rel="stylesheet" type="text/css" href="/res/css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="/res/vendor/simple-modal/assets/css/simplemodal.css">
</head>
<body>
    <div class="g-bd" id="music">
        <div class="g-wrap n-srch">
            <div id="logo-wrap">
                <span>{{user.name}}</span>
            </div>
            <div id="search-wrap" class="pgsrch f-pr j-suggest">
                <input type="text" class="srch j-flag" value="" v-model="keyword" v-on:keyup.enter="searchsong">
                <span class="j-flag" style="display:none;">&nbsp;</span>
                <a hidefocus="true" href="javascript:void(0)" class="btn j-flag" title="搜索" v-on:click="searchsong">搜索</a>
                <div class="u-lstlay j-flag" style="display:none;"></div>
            </div>
            <div id="user-wrap">
                <a class="ui small button" href="/logout.php"><span><i class="fa fa-sign-out"></i></span></a>
            </div>
            <div id="m-search">
                <div class="snote s-fc4 ztag">
                    搜索“{{keyword}}”，找到 <em class="s-fc6">{{songCount}}</em>
                    首单曲
                </div>
                <!-- <ul class="m-tabs m-tabs-srch f-cb ztag" data-xname="" style="margin-bottom: auto;">
                    <li class="fst">
                        <a data-type="1" href="javascript:void(0)" v-on:click="typenav(this)"> <em>单曲</em>
                        </a>
                    </li>
                    <li>
                        <a hidefocus="true" data-type="100" href="javascript:void(0)" v-on:click="typenav(this)">
                            <em>歌手</em>
                        </a>
                    </li>
                    <li>
                        <a hidefocus="true" data-type="10" href="javascript:void(0)" v-on:click="typenav(this)">
                            <em>专辑</em>
                        </a>
                    </li>
                    <li>
                        <a hidefocus="true" data-type="1004" href="javascript:void(0)" v-on:click="typenav(this)">
                            <em>MV</em>
                        </a>
                    </li>
                    <li>
                        <a hidefocus="true" data-type="1006" href="javascript:void(0)" v-on:click="typenav(this)">
                            <em>歌词</em>
                        </a>
                    </li>
                    <li>
                        <a hidefocus="true" data-type="1000" href="javascript:void(0)" v-on:click="typenav(this)">
                            <em>歌单</em>
                        </a>
                    </li>
                    <li>
                        <a hidefocus="true" data-type="1009" href="javascript:void(0)" v-on:click="typenav(this)">
                            <em>主播电台</em>
                        </a>
                    </li>
                    <li>
                        <a hidefocus="true" data-type="1002" href="javascript:void(0)" v-on:click="typenav(this)">
                            <em>用户</em>
                        </a>
                    </li>
                </ul> -->
                <div class="ztag j-flag">
                    <div class="n-srchrst">
                        <div class="srchsongst">
                            <template v-for="(song,index,key) in songs">
                                <div class="item f-cb h-flag" :class="{ even: iseven(index),'js-dis':isforbidden(song.privilege.subp)}">
                                    <div class="td">
                                        <div class="hd">
                                            <a v-on:click="playsong(song)" class="ply" :class="{'ply-z-slt':cuplay==song.id}" title="播放" data-res-copyright="1" data-res-type="18" data-res-id="4038411" data-res-action="play" data-res-from="32" data-res-data="song.name"></a>
                                        </div>
                                    </div>
                                    <div class="td w0">
                                        <div class="sn">
                                            <div class="text">
                                                <a href="javascript:;" v-on:click="playsong(song)"> <b title="Coming Home"><span class="s-fc7">{{song.name}}</span></b> 
                                                </a>
                                                <a :title="song.name" v-show="song.mv != ''" class="mv" v-on:click="playmv(song)" target="_blank"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="td">
                                        <div class="opt hshow">
                                            <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true" v-on:click="addtoplaylist(song)"></a>
                                            <span class="icn icn-fav" title="收藏"></span>
                                            <span class="icn icn-share" title="分享"></span>
                                            <span class="icn icn-dl" title="下载"></span>
                                        </div>
                                    </div>
                                    <div class="td w1">
                                        <div class="text">
                                            <template v-for="(artist,index) in song.ar">
                                                <a href="javascript:;" v-on:click="searchartist(artist.id,artist.name)">{{artist.name}}</a><span v-show="isnotlast(index,song)">&nbsp;/&nbsp;</span>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="td w2">
                                        <div class="text">
                                            <a class="s-fc3" href="javascript:;" v-on:click="searchalbum(song.al.id,song.al.name)" :title="'《'+song.al.name+'》'">
                                                《
                                                <span class="s-fc7">{{song.al.name}}</span>
                                                》
                                            </a>
                                        </div>
                                    </div>
                                    <div class="td">{{formatdate(song.dt)}}</div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <div id="loadmore" v-show="hasmore"><a href="javascript:;" v-on:click="searchsong(1)">点击加载更多...</a></div>
                <div class="j-flag"></div>
            </div>
        </div>
        <div id="aplayer" class="aplayer"></div>
    </div>
    <div id="cli_dialog_div"></div>
    <script src="/res/js/jquery.min.js"></script>
    <script src="/res/vendor/aplayer/aplayer.min.js"></script>
    <script src="/res/js/vue.js"></script>
    <script src="/res/js/axios.min.js"></script>
    <script src="/res/js/lodash.min.js"></script>
    <script src="/res/vendor/layer/layer.js"></script>
    <script src="/res/vendor/simple-modal/mootools-core-1.3.1.js"></script>
    <script src="/res/vendor/simple-modal/mootools-more-1.3.1.1.js"></script>
    <script src="/res/vendor/simple-modal/simple-modal.js"></script>

    <script type="text/javascript">
        var playlist = eval(getlocalstorage("playlist"));
        var aplayer ;
        if(playlist == null || typeof(playlist) != "object"){
            playlist = [];
        }else{
            playlist = _.values(playlist);
        }
        if(playlist && typeof(playlist) == "object" && playlist.length > 0){
            // init_aplayer();
        }
        var music = new Vue({
            el : '#music',
            data : {
                keyword : getlocalstorage("keyword"),
                page : 1,
                type : 1,
                songs : '',
                songCount : 0,
                totalpage : 0,
                hasmore : false,
                cuplay:0,
                user:{
                    name:'<?php echo $user['name']?>',
                    avatar:'<?php echo $user['avatar']?>',
                }
            },
            created: function () {
                if(!this.keyword){
                    this.keyword = "周杰伦";
                }
                var albumid = getlocalstorage("albumid");
                if(albumid){
                    this.searchalbum(albumid,this.keyword);
                }else{
                    this.searchsong();
                }
            },
            computed : {
                activenav : function(){
                    return {
                        "z-slt" : true
                    };
                },
            },
            methods : {
                searchsong : _.debounce(function(isappend){
                    var vm = this;
                    if(!vm.keyword){
                        return;
                    }
                    if(isappend != 1){
                        vm.page = 1;   
                    }
                    setlocalstorage("albumid","");
                    var params = {action:"search",keyword:vm.keyword,page:vm.page,type:1};
                    axios.post("/song.php",params)
                        .then(function(response){
                            var songs = response.data.result.songs;
                            if(!songs){
                                return;
                            }
                            vm.page++;
                            if(isappend == 1){
                                vm.songs = vm.songs.concat(songs);
                            }else{
                                vm.songs = songs;
                            }
                            vm.songCount = response.data.result.songCount;
                            vm.totalpage = Math.ceil(vm.songCount/20);
                            if(vm.totalpage == 0 || vm.totalpage == vm.page){
                                vm.hasmore =  false;
                            }else{
                                vm.hasmore =  true;
                            }
                            setlocalstorage("keyword",vm.keyword);
                        })
                        .catch(function(error){
                            vm.answer = '访问接口失败' + error
                        })
                },500),
                searchartist : function(artistid,name){
                    this.keyword = name;
                    this.searchsong();
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
                typenav : function(dom){
                    console.log(dom);
                },
                formatdate : function(time){
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
                iseven : function(index){
                    if(index%2){
                        return false;
                    }else{
                        return true;
                    }
                },
                isnotlast : function(index,data){
                    if(index == data.ar.length-1){
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
                playsong: _.debounce(function(song){
                    var vm = this;
                    if(song.privilege.subp == "0"){
                        layer.msg("粗错咯，网易没这首歌的版权～");
                        return;
                    }
                    var hasplay = false;
                    if(aplayer){
                        $(playlist).each(function(index,item){
                            if(song.id == item.id){
                                aplayer.setMusic(index);
                                hasplay = true;
                                return false;
                            }
                        })
                        if(hasplay){
                            return;
                        }
                    }
                    var params = {action:"songinfo",songid:song.id};
                    axios.post("/song.php",params)
                        .then(function(response){
                            var songinfo = response.data;
                            if(!songinfo){
                                layer.msg("播放失败");
                                return;
                            }
                            var artists = new Array();
                            $(song.ar).each(function(index,artist){
                                artists.push(artist.name)
                            })
                            var songitem = {
                                id:song.id,
                                title: song.name,
                                author: artists.join("/"),
                                url: songinfo.url,
                                pic: 'http://p4.music.126.net/hg3mIdjZnFcBY3vFmD-dew==/109951162819344952.jpg?param=140y140',
                                lrc: songinfo.lrc
                            };
                            playlist.push(songitem);
                            setlocalstorage("playlist",JSON.stringify(playlist));
                            init_aplayer();
                            aplayer.setMusic(playlist.indexOf(songitem));
                            vm.cuplay = song.id;
                        })
                        .catch(function(error){
                            vm.answer = '访问接口失败' + error
                        })
                },500),
                addtoplaylist: function(song){
                    var vm = this;
                    if(song.privilege.subp == "0"){
                        layer.msg("粗错咯，网易没这首歌的版权～");
                        return;
                    }
                    var hasplay = false;
                    $(playlist).each(function(index,item){
                        if(song.id == item.id){
                            layer.msg("已添加到播放列表");
                            hasplay = true;
                            return false;
                        }
                    })
                    if(hasplay){
                        return;
                    }
                    var params = {action:"songinfo",songid:song.id};
                    axios.post("/song.php",params)
                        .then(function(response){
                            var songinfo = response.data;
                            if(!songinfo){
                                layer.msg("播放失败");
                                return;
                            }
                            var artists = new Array();
                            $(song.ar).each(function(index,artist){
                                artists.push(artist.name)
                            })
                            var songitem = {
                                id:song.id,
                                title: song.name,
                                author: artists.join("/"),
                                url: songinfo.url,
                                pic: 'http://p4.music.126.net/hg3mIdjZnFcBY3vFmD-dew==/109951162819344952.jpg?param=140y140',
                                lrc: songinfo.lrc
                            };
                            playlist.push(songitem);
                            setlocalstorage("playlist",JSON.stringify(playlist));
                        })
                        .catch(function(error){
                            vm.answer = '访问接口失败' + error
                        })
                },
                playmv : _.debounce(function(song){
                    var vm = this;
                    var hasplay = true;
                    if(aplayer){
                        aplayer.pause();
                    }
                    init_videoplayer(song);
                },500),
            }
        });

        function init_aplayer(){
            aplayer = new APlayer({
                element: document.getElementById('aplayer'),
                narrow: false,
                autoplay: true,
                showlrc: 1,
                mutex: true,
                theme: '#615754',
                mode: 'circulation',
                listmaxheight: '200px',
                music: playlist
            })
        }
        function init_videoplayer(song){
            var SM = new SimpleModal({"hideFooter":true, "width":710});
            SM.show({
              "title":song.name,
              "model":"modal",
              "contents":'<iframe src="/playmv.php?mvid='+song.mv+'" width="680" height="382" frameborder="0" webkitAllowFullScreen allowFullScreen rel="noreferrer"></iframe>'
            });
            $("#simple-modal").find("a.close").on("click",function(){
                $('#simple-modal-overlay').remove();
                $('#simple-modal').remove();
            });
        }
        function setlocalstorage(key,value){
            key = <?php echo $user['id']?>+"_"+key;
            if (window.localStorage) {
                localStorage.setItem(key, value);
            } else {
                Cookie.write(key, value);  
            }
        }
        function getlocalstorage(key){
            key = <?php echo $user['id']?>+"_"+key;
            if (window.localStorage) {
                return localStorage.getItem(key);  
            } else {
                return Cookie.read(key);  
            }
        }
    </script>
</body>
</html>