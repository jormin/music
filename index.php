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
    <link rel="shortcut icon" type="image/ico" href="/favicon.ico">
    <style type="text/css">
        [v-cloak]{
            display:none;
        }
    </style>
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
                <span v-cloak>{{user.name}}</span>
            </div>
            <div id="search-wrap" class="pgsrch f-pr j-suggest">
                <input type="text" class="srch j-flag" v-cloak v-cloak value="" v-model="keyword" v-on:keyup.enter="search">
                <span class="j-flag" style="display:none;">&nbsp;</span>
                <a hidefocus="true" href="javascript:void(0)" class="btn j-flag" title="搜索" @click="search">搜索</a>
                <div class="u-lstlay j-flag" style="display:none;"></div>
            </div>
            <div id="user-wrap">
                <a class="ui small button" href="/logout.php"><span><i class="fa fa-sign-out"></i></span></a>
            </div>
            <div id="m-search">
                <div class="snote s-fc4 ztag" v-cloak>
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
                </ul>
                <div class="ztag j-flag">
                    <div class="n-srchrst">
                        <div class="srchsongst" v-if="iscurrentnav(1) || iscurrentnav(1006)">
                            <template v-for="(song,index,key) in songs">
                                <div class="item f-cb h-flag" :class="{ even: iseven(index),'js-dis':isforbidden(song.privilege.subp)}">
                                    <div class="td">
                                        <div class="hd">
                                            <a @click="playsong(song,1)" class="ply" :class="{'ply-z-slt':cusong.id==song.id}" title="播放"></a>
                                        </div>
                                    </div>
                                    <div class="td w0">
                                        <div class="sn">
                                            <div class="text">
                                                <a href="javascript:;" @click="playsong(song,1)"> <b title="Coming Home"><span class="s-fc7">{{song.name}}</span></b> 
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
                                                <span v-cloak class="s-fc7">{{song.al.name}}</span>
                                                》
                                            </a>
                                        </div>
                                    </div>
                                    <div v-cloak class="td">{{formatdate(song.dt)}}</div>
                                </div>
                            </template>
                        </div>
                        
                        <div class="m-sgerlist m-sgerlist-1" v-if="iscurrentnav(100)">
                            <ul class="m-cvrlst m-cvrlst-5 f-cb">
                                <template v-for="(artist,index,key) in artists">
                                    <li>
                                        <div class="u-cover u-cover-5">
                                            <a href="javascript:;">
                                                <img :src="artist.picUrl">
                                                <span :title="artist.name" class="msk"></span>
                                            </a>
                                        </div>
                                        <p>
                                            <a class="nm f-thide s-fc0" href="/artist?id=1015425" :title="artist.name" v-html="formatbykeyword(artist.name)">
                                            </a>
                                        </p>
                                    </li>
                                </template>
                            </ul>
                        </div>

                        <ul class="m-cvrlst m-cvrlst-alb3 f-cb" v-if="iscurrentnav(10)">
                            <template v-for="(album,index,key) in albums">
                                <li>
                                    <div class="u-cover u-cover-alb2">
                                        <a href="javascript:;">
                                            <img :src="album.picUrl">
                                            <span :title="album.name" class="msk"></span>
                                        </a>
                                        <a title="播放" class="icon-play f-alpha f-fr " href="javascript:void(0)"></a>
                                    </div>
                                    <p class="dec">
                                        <a href="/album?id=3280169" class="tit f-thide s-fc0" :title="album.nam" v-html="formatbykeyword(album.name)">
                                        </a>
                                    </p>
                                    <p>
                                        <span class="nm f-thide" :title="album.artist.name">
                                            <a href="/artist?id=104700" class="s-fc3">album.artist.name</a>
                                        </span>
                                    </p>
                                </li>
                            </template>
                        </ul>

                        <ul class="m-mvlist f-cb" v-if="iscurrentnav(1004)">
                            <template v-cloak v-for="(mv,index,key) in mvs">
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
                                            <template v-cloak v-for="(artist,index) in mv.artists">
                                                <a href="javascript:;" @click="searchartist(artist.id,artist.name)">{{artist.name}}</a><span v-show="isnotlast(index,mv.artists)">&nbsp;/&nbsp;</span>
                                            </template>
                                        </span>
                                    </h5>
                                </li>
                            </template>
                        </ul>

                        <table cellspacing="0" cellpadding="0" class="m-table m-table-2 m-table-2-cover" v-if="iscurrentnav(1000)">
                            <tbody>
                                <template v-cloak v-for="(playlist,index,key) in playlists">
                                    <tr class="h-flag" id="auto-id-NipwAUdNTi1co4mC">
                                        <td class="first w0">
                                            <div class="hd"><span class="ply " title="播放" data-res-type="13" data-res-id="401446697" data-res-action="play"></span></div>
                                        </td>
                                        <td class="w7">
                                            <div class="u-cover u-cover-3">
                                                <a href="/playlist?id=401446697"><img :src="playlist.coverImgUrl"><span :title="playlist.name" class="msk"></span></a>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="f-cb">
                                                <div class="opt hshow" style="display: none;">
                                                    <a class="u-icn u-icn-81" href="javascript:;" title="添加到播放列表" hidefocus="true" data-res-type="13" data-res-id="401446697" data-res-action="addto"></a><span data-res-id="401446697" data-res-action="fav" data-res-type="13" class="icn icn-fav " title="收藏">收藏</span><span data-res-id="401446697" data-res-action="share" class="icn icn-share" data-res-type="13" title="分享">分享</span></div>
                                                <div class="tt">
                                                    <div class="ttc"><span class="txt"><a href="/playlist?id=401446697" :title="playlist.name" v-html="formatbykeyword(playlist.name)"></a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="w11 s-fc4">{{playlist.trackCount}}首</td>
                                        <td class="w4">
                                            <div class="text"><span class="s-fc3">by</span>&nbsp;&nbsp;<a class="s-fc3" href="javascript:;" :title="playlist.creator.nickname">{{playlist.creator.nickname}}</a></div>
                                        </td>
                                        <td class="w6 s-fc4">收藏：<span id="flag_fav_count-401446697">{{formatnum(playlist.bookCount)}}</span></td>
                                        <td class="last w6 s-fc4">收听：<span id="flag_play_count-401446697">{{formatnum(playlist.playCount)}}</span></td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>


                    </div>
                </div>
                <div class="u-load s-fc4" v-show="isload"><i class="icn"></i> 加载中...</div>
                <div id="loadmore" v-show="hasmore">
                    <a href="javascript:;" @click="search(1)">点击加载更多...</a>
                </div>
                <div class="j-flag"></div>
            </div>
        </div>
        <div class="g-btmbar" id="aplayer" @mouseenter="enteraplayer()" @mouseleave="leaveaplayer()">
            <div class="m-playbar" :class="{'m-playbar-lock':blockaplayer,'m-playbar-unlock':!blockaplayer}" style="top: -53px; visibility: visible;">
                <div class="updn">
                    <div class="left f-fl">
                        <a href="javascript:;" class="btn" hidefocus="true" @click="blockaplayer=!blockaplayer"></a>
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
                    <div class="head j-flag" @click="isshowpanel=!isshowpanel">
                        <img :src="cusong.cover">
                        <a href="javascript:;" hidefocus="true" class="mask"></a>
                    </div>
                    <div class="play">
                        <div class="j-flag words">
                            <a hidefocus="true" href="javascript:;" v-cloak class="f-thide name fc1 f-fl" :title="cusong.name" @click="searchsong(cusong.name)">{{cusong.name}}</a>
                            <span class="by f-thide f-fl">
                                <span :title="formatarname(cusong.ar)">
                                    <template v-cloak v-for="(artist,index) in cusong.ar">
                                        <a href="javascript:;" hidefocus="true" @click="searchartist(artist.id,artist.name)">{{artist.name}}</a><span v-show="isnotlast(index,cusong.ar)">&nbsp;/&nbsp;</span>
                                    </template>
                                </span>
                            </span>
                        </div>
                        <div class="m-pbar" data-action="noop">
                            <div class="barbg j-flag" id="timeline">
                                <div class="rdy" :style="'width:'+currentbuffered+'%'"></div>
                                <div class="cur" :style="'width:'+currentpercent+'%'">
                                    <span class="btn f-tdn f-alpha" id="timepoint" @dragover="dragtimepoint($event)"> <i></i>
                                    </span>
                                </div>
                            </div>
                            <span v-cloak class="j-flag time"> <em>{{cutime}}</em>
                                / {{formatdate(cusong.dt)}}
                            </span>
                        </div>
                    </div>
                    <div class="oper f-fl">
                        <a href="javascript:;" hidefocus="true" data-action="like" class="icn icn-add j-flag" title="收藏"></a>
                        <a href="javascript:;" hidefocus="true" data-action="share" class="icn icn-share" title="分享"></a>
                    </div>
                    <div class="ctrl f-fl f-pr j-flag">
                        <div class="m-vol" v-show="setvolume">
                            <div class="barbg"></div>
                            <div class="vbg j-t" id="volumeline">
                                <div class="curr j-t" style="height: 90.6px;"></div>
                                <span class="btn f-alpha j-t" style="top: 0px;" id="volumepoint" ></span>
                            </div>
                        </div>
                        <a href="javascript:;" hidefocus="true" @click="setvolume=!setvolume" class="icn icn-vol" :class="{'icn-volno':silence}"></a>
                        <a href="javascript:;" hidefocus="true" @click="setaudiomode()" class="icn" :class="{'icn-loop':audiomode.currentmode==0,'icn-shuffle':audiomode.currentmode==1,'icn-one':audiomode.currentmode==2}" :title="audiomode.currentmodestr"></a>
                        <span class="add f-pr">
                            <span class="tip" v-cloak v-show="audiotip.showaudiotip">{{audiotip.tip}}</span>
                            <a href="javascript:;" title="播放列表" v-cloak @click="isshowpanel=!isshowpanel" class="icn icn-list s-fc3"><span v-cloak>{{playsongs.length}}</span></a>
                        </span>
                        <div class="tip tip-1" v-cloak v-show="audiomode.showmodetip">{{audiomode.currentmodestr}}</div>
                    </div>
                </div>
                <div class="list" id="g_playlist" v-show="isshowpanel">
                    <div class="listhd">
                        <div class="listhdc">
                            <h4>
                                播放列表(
                                <span v-cloak class="j-flag">{{playsongs.length}}</span>
                                )
                            </h4>
                            <a href="javascript:;" class="clear" @click="clearplaysongs()">
                                <span class="ico icn-del"></span>
                                清除
                            </a>
                            <p v-cloak class="lytit f-ff0 f-thide j-flag">{{cusong.name}}</p>
                            <span class="close" @click="isshowpanel=false">关闭</span>
                        </div>
                    </div>
                    <div class="listbd" id="playlist-wrap">
                        <div class="msk"></div>
                        <div class="listbdc j-flag">
                            <div class="nocnt" v-if="playsongs.length == 0"> 
                                <i class="ico ico-face"></i>
                                你还没有添加任何歌曲
                                <br>                            
                            </div>
                            <ul class="f-cb" v-else>
                                <template v-cloak v-for="(song,index) in playsongs">
                                    <li :class="{'z-sel':(song.id == cusong.id)}" @click="playsong(song)">
                                        <div class="col col-1">
                                            <div class="playicn"></div>
                                        </div>
                                        <div class="col col-2">
                                            <a href="javascript:;" @click.stop="searchsong(song.name)">{{song.name}}</a>
                                            <a :title="song.name" v-show="song.mv != ''" class="mv" @click.stop="playmv(song.mv,song.name)" target="_blank"></a>
                                        </div>
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
                                        <div class="col col-5">
                                            {{formatdate(song.dt)}}
                                        </div>
                                        <div class="col col-6">
                                            <a href="javascript:;" class="clear" @click.stop="removesong(index)">
                                                <span class="ico icn-del"></span>
                                            </a>
                                        </div>
                                    </li>
                                </template>
                            </ul>
                        </div>
                        <div class="msk2"></div>
                        <div class="listlyric j-flag">
                            <template v-cloak v-for="(item,index) in cusong.lrc">
                                <p class="j-flag" :class="{'z-sel':iscurrentlrc(index)}" :data-time="item.time" v-if="formatlrc(item.lrc)">{{item.lrc}}</p>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="cli_dialog_div"></div>
    <script src="/res/js/jquery.min.js"></script>
    <script src="/res/vendor/jquery-ui-1.12.1/jquery-ui.min.js"></script>
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
        var user = {
            id:'<?php echo $user['id']?>',
            name:'<?php echo $user['name']?>',
            avatar:'<?php echo $user['avatar']?>',
        };
    </script>
    <script src="/res/js/music.js"></script>
</body>
</html>