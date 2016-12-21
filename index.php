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
                <input type="text" class="srch j-flag" value="" v-model="keyword" v-on:keyup.enter="search">
                <span class="j-flag" style="display:none;">&nbsp;</span>
                <a hidefocus="true" href="javascript:void(0)" class="btn j-flag" title="搜索" @click="search">搜索</a>
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
                <ul class="m-tabs m-tabs-srch f-cb ztag" data-xname="" style="margin-bottom: auto;">
                    <li class="fst">
                        <a data-type="1" href="javascript:void(0)" @click="typenav($event)" :class="{'z-slt':iscurrentnav(1)}"> <em>单曲</em>
                        </a>
                    </li>
                    <li>
                        <a hidefocus="true" data-type="100" href="javascript:void(0)" @click="typenav($event)" :class="{'z-slt':iscurrentnav(100)}">
                            <em>歌手</em>
                        </a>
                    </li>
                    <li>
                        <a hidefocus="true" data-type="10" href="javascript:void(0)" @click="typenav($event)" :class="{'z-slt':iscurrentnav(10)}">
                            <em>专辑</em>
                        </a>
                    </li>
                    <li>
                        <a hidefocus="true" data-type="1004" href="javascript:void(0)" @click="typenav($event)" :class="{'z-slt':iscurrentnav(1004)}">
                            <em>MV</em>
                        </a>
                    </li>
                    <li>
                        <a hidefocus="true" data-type="1006" href="javascript:void(0)" @click="typenav($event)" :class="{'z-slt':iscurrentnav(1006)}">
                            <em>歌词</em>
                        </a>
                    </li>
                    <li>
                        <a hidefocus="true" data-type="1000" href="javascript:void(0)" @click="typenav($event)" :class="{'z-slt':iscurrentnav(1000)}">
                            <em>歌单</em>
                        </a>
                    </li>
                    <li>
                        <a hidefocus="true" data-type="1009" href="javascript:void(0)" @click="typenav($event)" :class="{'z-slt':iscurrentnav(1009)}">
                            <em>主播电台</em>
                        </a>
                    </li>
                    <li>
                        <a hidefocus="true" data-type="1002" href="javascript:void(0)" @click="typenav($event)" :class="{'z-slt':iscurrentnav(1002)}">
                            <em>用户</em>
                        </a>
                    </li>
                </ul>
                <div class="ztag j-flag">
                    <div class="n-srchrst">
                        <div class="srchsongst" v-if="iscurrentnav(1)">
                            <template v-for="(song,index,key) in songs">
                                <div class="item f-cb h-flag" :class="{ even: iseven(index),'js-dis':isforbidden(song.privilege.subp)}">
                                    <div class="td">
                                        <div class="hd">
                                            <a @click="playsong(song)" class="ply" :class="{'ply-z-slt':cusong.id==song.id}" title="播放"></a>
                                        </div>
                                    </div>
                                    <div class="td w0">
                                        <div class="sn">
                                            <div class="text">
                                                <a href="javascript:;" @click="playsong(song)"> <b title="Coming Home"><span class="s-fc7">{{song.name}}</span></b> 
                                                </a>
                                                <a :title="song.name" v-show="song.mv != ''" class="mv" @click="playmv(song.mv,song.name)" target="_blank"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="td">
                                        <div class="opt hshow">
                                            <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true" @click="addtoplaylist(song)"></a>
                                            <span class="icn icn-fav" title="收藏"></span>
                                            <span class="icn icn-share" title="分享"></span>
                                            <span class="icn icn-dl" title="下载"></span>
                                        </div>
                                    </div>
                                    <div class="td w1">
                                        <div class="text">
                                            <template v-for="(artist,index) in song.ar">
                                                <a href="javascript:;" @click="searchartist(artist.id,artist.name)">{{artist.name}}</a><span v-show="isnotlast(index,song.ar)">&nbsp;/&nbsp;</span>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="td w2">
                                        <div class="text">
                                            <a class="s-fc3" href="javascript:;" @click="searchalbum(song.al.id,song.al.name)" :title="'《'+song.al.name+'》'">
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

                        <ul class="m-mvlist f-cb" v-if="iscurrentnav(1004)">
                            <template v-for="(mv,index,key) in mvs">
                                <li>
                                    <div class="cover f-pr" @click="playmv(mv.id,mv.name)">
                                        <img :src="mv.cover">
                                        <span :title="mv.name" class="msk"></span>
                                        <p class="tr u-msk u-msk-1">
                                            <span class="u-icn2 u-icn2-mv"></span>
                                            {{mv.playCount}}
                                        </p>
                                        <p class="bl u-msk u-msk-2">{{formatdate(mv.duration)}}</p>
                                        <a class="link" href="javascript:;"></a>
                                    </div>
                                    <h4 class="title f-thide">
                                        <a href="javascript:;" class="s-fc0" :title="mv.name" @click="playmv(mv.id,mv.name)">{{mv.name}}</a>
                                    </h4>
                                    <h5 class="name f-thide">
                                        <span class="f-thide" :title="formatarname(mv.artists)">
                                            <template v-for="(artist,index) in mv.artists">
                                                <a href="javascript:;" @click="searchartist(artist.id,artist.name)">{{artist.name}}</a><span v-show="isnotlast(index,mv.artists)">&nbsp;/&nbsp;</span>
                                            </template>
                                        </span>
                                    </h5>
                                </li>
                            </template>
                        </ul>
                    </div>
                </div>
                <div class="u-load s-fc4" v-show="isload"><i class="icn"></i> 加载中...</div>
                <div id="loadmore" v-show="hasmore">
                    <a href="javascript:;" @click="search(1)">点击加载更多...</a>
                </div>
                <div class="j-flag"></div>
            </div>
        </div>
        <div id="aplayer" class="aplayer"></div>
        <div class="g-btmbar">
            <div class="m-playbar m-playbar-lock" style="top: -53px; visibility: visible;">
                <div class="updn">
                    <div class="left f-fl">
                        <a href="javascript:;" class="btn" hidefocus="true" data-action="lock"></a>
                    </div>
                    <div class="right f-fl"></div>
                </div>
                <div class="bg"></div>
                <div class="hand" title="展开播放条"></div>
                <div class="wrap" id="g_player" style="margin-left: -490px;">
                    <div class="btns">
                        <a href="javascript:;" hidefocus="true" @click="playpre()" class="prv" title="上一首(ctrl+←)">上一首</a>
                        <a href="javascript:;" hidefocus="true" @click="playtoggle()" class="ply j-flag" :class="{'pas':!pause}" title="播放/暂停(p)">播放/暂停</a>
                        <a href="javascript:;" hidefocus="true" @click="playnext()" class="nxt" title="下一首(ctrl+→)">下一首</a>
                    </div>
                    <div class="head j-flag">
                        <img :src="cusong.cover">
                        <a href="javascript:;" hidefocus="true" class="mask"></a>
                    </div>
                    <div class="play">
                        <div class="j-flag words">
                            <a hidefocus="true" href="javascript:;" class="f-thide name fc1 f-fl" :title="cusong.name" @click="searchsong(cusong.name)">{{cusong.name}}</a>
                            <span class="by f-thide f-fl">
                                <span :title="formatarname(cusong.ar)">
                                    <template v-for="(artist,index) in cusong.ar">
                                        <a href="javascript:;" hidefocus="true" @click="searchartist(artist.id,artist.name)">{{artist.name}}</a><span v-show="isnotlast(index,cusong.ar)">&nbsp;/&nbsp;</span>
                                    </template>
                                </span>
                            </span>
                        </div>
                        <div class="m-pbar" data-action="noop">
                            <div class="barbg j-flag" id="auto-id-yf9d7ilde7ACtWkm">
                                <div class="rdy" style="width: 100%;"></div>
                                <div class="cur" :style="'width:'+currentpercent+'%'">
                                    <span class="btn f-tdn f-alpha" id="auto-id-AS3UC7TvaWXEMwLr"> <i></i>
                                    </span>
                                </div>
                            </div>
                            <span class="j-flag time"> <em>{{cutime}}</em>
                                / {{formatdate(cusong.dt)}}
                            </span>
                        </div>
                    </div>
                    <div class="oper f-fl">
                        <a href="javascript:;" hidefocus="true" data-action="like" class="icn icn-add j-flag" title="收藏"></a>
                        <a href="javascript:;" hidefocus="true" data-action="share" class="icn icn-share" title="分享"></a>
                    </div>
                    <div class="ctrl f-fl f-pr j-flag">
                        <div class="m-vol" style="visibility:hidden;">
                            <div class="barbg"></div>
                            <div class="vbg j-t" id="auto-id-JKzbg3qIr3RMIwUN">
                                <div class="curr j-t" style="height: 74.4px;"></div>
                                <span class="btn f-alpha j-t" style="top: 16.2px;"></span>
                            </div>
                        </div>
                        <a href="javascript:;" hidefocus="true" data-action="volume" class="icn icn-vol"></a>
                        <a href="javascript:;" hidefocus="true" data-action="mode" class="icn icn-loop" title="循环"></a>
                        <span class="add f-pr">
                            <span class="tip" style="display: none;">已开始播放</span>
                            <a href="javascript:;" title="播放列表" hidefocus="true" @click="isshowpanel=!isshowpanel" class="icn icn-list s-fc3">{{playsongs.length}}</a>
                        </span>
                        <div class="tip tip-1" style="display:none;">循环</div>
                    </div>
                </div>
                <div class="list" id="g_playlist" v-show="isshowpanel">
                    <div class="listhd">
                        <div class="listhdc">
                            <h4>
                                播放列表(
                                <span class="j-flag">{{playsongs.length}}</span>
                                )
                            </h4>
                            <a href="javascript:;" class="clear" @click="clearplaysongs()">
                                <span class="ico icn-del"></span>
                                清除
                            </a>
                            <p class="lytit f-ff0 f-thide j-flag">{{cusong.name}}</p>
                            <span class="close" @click="isshowpanel=false">关闭</span>
                        </div>
                    </div>
                    <div class="listbd">
                        <img class="imgbg j-flag" src="http://music.163.com/api/img/blur/123145302317578" style="top: -360px;">
                        <div class="msk"></div>
                        <div class="listbdc j-flag">
                            <div class="nocnt" v-if="playsongs.length == 0"> 
                                <i class="ico ico-face"></i>
                                你还没有添加任何歌曲
                                <br>                            
                            </div>
                            <ul class="f-cb" v-else>
                                <template v-for="song in playsongs">
                                    <li :class="{'z-sel':(song.id == cusong.id)}" @click="playsong(song)">
                                        <div class="col col-1">
                                            <div class="playicn"></div>
                                        </div>
                                        <div class="col col-2"><a href="javascript:;" @click.stop="searchsong(song.name)">{{song.name}}</a></div>
                                        <div class="col col-3">
                                            <span :title="formatarname(song.ar)">
                                                <template v-for="(artist,index) in song.ar">
                                                    <a href="javascript:;" @click.stop="searchartist(artist.id,artist.name)">{{artist.name}}</a><span v-show="isnotlast(index,song.ar)">&nbsp;/&nbsp;</span>
                                                </template>
                                            </span>
                                        </div>
                                        <div class="col col-4">
                                            <a href="javascript:;" @click.stop="searchalbum(song.al.id,song.al.name)">《{{song.al.name}}》</a>
                                        </div>
                                        <div class="col col-5"></div>
                                        <div class="col col-6">
                                            {{formatdate(song.dt)}}
                                        </div>
                                    </li>
                                </template>
                            </ul>
                        </div>
                        <div class="bline j-flag">
                            <span class="scrol" hidefocus="true" style="height: 68.9796px; display: block; top: 0px;"></span>
                        </div>
                        <div class="msk2"></div>
                        <div class="listlyric j-flag">
                            <template v-for="(item,index) in cusong.lrc">
                                <p class="j-flag" :class="{'z-sel':iscurrentlrc(index)}" :data-time="item.time" v-if="formatlrc(item.lrc)">{{item.lrc}}</p>
                            </template>
                        </div>
                        <div class="bline bline-1 j-flag">
                            <span class="scrol scrol-1 j-flag"  id="lyric-scroll" hidefocus="true" style="height: 84.7321px; display: block; top: 0px;"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="cli_dialog_div"></div>
    <script src="/res/js/jquery.min.js"></script>
    <script src="/res/js/vue.js"></script>
    <script src="/res/js/axios.min.js"></script>
    <script src="/res/js/lodash.min.js"></script>
    <script src="/res/js/ntes.id.js"></script>
    <script src="/res/js/core.js"></script>
    <script src="/res/vendor/layer/layer.js"></script>
    <script src="/res/vendor/simple-modal/mootools-core-1.3.1.js"></script>
    <script src="/res/vendor/simple-modal/mootools-more-1.3.1.1.js"></script>
    <script src="/res/vendor/simple-modal/simple-modal.js"></script>
    <script src="/res/js/audioplayer.js"></script>
    <script type="text/javascript">
        setlocalstorage("playsongs","");
        var music = new Vue({
            el : '#music',
            data : {
                pause:true,
                currentpercent:0,
                keyword : getlocalstorage("keyword"),
                currentnav: 1,
                isload : false,
                page : 1,
                type : 1,
                songs : '',
                playsongs : [],
                mvs : '',
                songCount : 0,
                totalpage : 0,
                cusong:{
                    id : 0,
                    dt : 0
                },
                cutime : "00:00",
                isshowpanel : false,
                keymap : {
                    1:"song",
                    1004:"mv"
                },
                user:{
                    name:'<?php echo $user['name']?>',
                    avatar:'<?php echo $user['avatar']?>',
                },
                aplayer:''
            },
            created: function () {
                var vm = this;
                var playsongs = getlocalstorage("playsongs");
                if(playsongs){
                    vm.playsongs = eval(playsongs);
                }
                vm.aplayer = new AudioPlayer({playsongs:vm.playsongs});
                vm.aplayer.on("playing", function(){
                    var time = parseInt(vm.aplayer.audio.currentTime);
                    var minute = parseInt(time/60);
                    var second = time%60;
                    minute = (minute < 10) ? "0"+minute : minute;
                    second = (second < 10) ? "0"+second : second;
                    vm.cutime = minute+":"+second;
                });
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

                    $(".scrol scrol-1 j-flag");
                    var culrcitem = $("div.listlyric").find("p.z-sel");
                    var container = $("div.listlyric");
                    if(culrcitem.length > 0){
                        var offset = culrcitem.offset().top - container.offset().top + container.scrollTop()/2;
                        container.css("top",-1*offset+"px").css("height","");
                        var index = $("div.listlyric").find("p").index(culrcitem);
                        console.log((index/$("div.listlyric").find("p").length));
                        console.log(parseInt(container.css("height")));
                        var scrolltop = parseInt(container.css("height"))*(index/$("div.listlyric").find("p").length)+"px";
                        console.log(scrolltop);
                        $("#lyric-scroll").css("top",scrolltop);
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
                    var index = vm.aplayer.currentindex-1;
                    var music = vm.songs[index];
                    if(!music){
                        vm.pause = true;
                        vm.aplayer.pause();
                        return;
                    }
                    vm.cusong = music;
                    vm.aplayer.setmusic(index);
                },
                playnext : function(){
                    var vm = this;
                    var index = vm.aplayer.currentindex+1;
                    var music = vm.playsongs[index];
                    if(!music){
                        vm.pause = true;
                        vm.aplayer.pause();
                        vm.cusong = 0;
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
                playsong: _.debounce(function(song){
                    var vm = this;
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
                        })
                        .catch(function(error){
                            vm.answer = '访问接口失败' + error
                        })
                },500),
                initlrc : function(lrc){
                    var vm = this;
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
                    vm.aplayer.audio.pause();
                    vm.pause = true;
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