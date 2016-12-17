<?php
    include_once("./lib/init.php");
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
    <link rel="stylesheet" type="text/css" href="./res/css/core.css">
    <link rel="stylesheet" type="text/css" href="./res/css/pt_frame.css">
    <link rel="stylesheet" type="text/css" href="./res/css/pt_search_index.css">
    <link rel="stylesheet" type="text/css" href="./res/css/music.css">
    <link href="//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">
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
                                <div class="item f-cb h-flag" :class="{ even: iseven(index) }">
                                    <div class="td">
                                        <div class="hd">
                                            <a v-on:click="playsong(song)" class="ply" :class="{'ply-z-slt':cuplay==song.id}" title="播放" data-res-copyright="1" data-res-type="18" data-res-id="4038411" data-res-action="play" data-res-from="32" data-res-data="song.name"></a>
                                        </div>
                                    </div>
                                    <div class="td w0">
                                        <div class="sn">
                                            <div class="text">
                                                <a :href="'/song?id='+song.id"> <b title="Coming Home"><span class="s-fc7">{{song.name}}</span></b> 
                                                </a>
                                                <a title="MV" v-on:click="playmv(song)" v-show="song.mv != ''" class="mv" href="javascript:;"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="td">
                                        <div class="opt hshow">
                                            <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true" data-res-copyright="1" data-res-type="18" data-res-id="4038411" data-res-action="addto" data-res-from="32" data-res-data="coming&nbsp;home"></a>
                                            <span data-res-id="NL4038411" data-res-action="fav" data-res-type="18" class="icn icn-fav" title="收藏"></span>
                                            <span data-res-id="NL4038411" data-res-action="share" data-res-type="18" class="icn icn-share" title="分享"></span>
                                            <span data-res-id="4038411" data-indexid="NL4038411" data-res-action="download" data-res-type="18" class="icn icn-dl" title="下载"></span>
                                        </div>
                                    </div>
                                    <div class="td w1">
                                        <div class="text">
                                            <template v-for="artist in song.ar">
                                                <a :href="'/artist'+artist.id">{{artist.name}}</a>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="td w2">
                                        <div class="text">
                                            <a class="s-fc3" :href="'/album?id='+song.al.id" :title="'《'+song.al.name+'》'">
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
    <script src="https://unpkg.com/axios@0.12.0/dist/axios.min.js"></script>
    <script src="https://unpkg.com/lodash@4.13.1/lodash.min.js"></script>
    <script src="/res/vendor/layer/layer.js"></script>

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
                this.searchsong();
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
                playsong: _.debounce(function(song){
                    var vm = this;
                    var hasplay = true;
                    if(aplayer){
                        $(playlist).each(function(index,item){
                            if(song.id == item.id){
                                aplayer.setMusic(index);
                                return false;
                            }
                        })
                        if(!hasplay){
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
                playmv : _.debounce(function(song){
                    var vm = this;
                    var hasplay = true;
                    if(aplayer){
                        aplayer.pause();
                    }
                    var params = {action:"mvinfo",mvid:song.mv};
                    axios.post("/song.php",params)
                        .then(function(response){
                            var mvinfo = response.data;
                            if(!mvinfo){
                                layer.msg("播放失败");
                                return;
                            }
                            console.log(mvinfo);
                            layer.open({
                                type: 2,
                                title: mvinfo.name,
                                area: ['630px', '360px'],
                                shade: 0.8,
                                closeBtn: 0,
                                shadeClose: true,
                                content: mvinfo.url
                            });

                        })
                        .catch(function(error){
                            vm.answer = '访问接口失败' + error
                        })
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
                music: playlist
            })
        }
        function setlocalstorage(key,value){
            if (window.localStorage) {
                localStorage.setItem(key, value);
            } else {
                Cookie.write(key, value);  
            }
        }
        function getlocalstorage(key){
            if (window.localStorage) {
                return localStorage.getItem(key);  
            } else {
                return Cookie.read(key);  
            }
        }
    </script>
</body>
</html>