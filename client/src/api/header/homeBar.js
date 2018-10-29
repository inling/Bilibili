//获取导航栏条目
const _barContent=[
    {title:'画友',text:'画友',downDiv:''},
    {title:'来探索bilibli音乐的世界吧~',text:'音频',downDiv:''},
    {title:'游戏中心',text:'游戏中心',downDiv:'gameCenter'},
    {title:'直播',text:'直播',downDiv:'live'},
    {title:'会员购',text:'会员购',downDiv:''},
    {title:'BML',text:'BML',downDiv:'bml'},
]

//获取游戏中心数据
const _gameCenter={
    bigAd:{
        bigAdImage:'img/AppGame/FateGo.jpg',
        bigAdImageText:'命运-冠位指定（Fate/GO）'
    },
    smallAds:[
        {smallAdImage:'img/AppGame/fangzhou.png',smallAdImageText:'方舟指令'},
        {smallAdImage:'img/AppGame/bilanhangxian.png',smallAdImageText:'碧蓝航线'},
        {smallAdImage:'img/AppGame/yuezhan.jpg',smallAdImageText:'约战：精灵在临'},
    ],
    gamePrvs:[
        {name:'时之歌',url_img:'background:url(/img/AppGame/songOfTime.png) no-repeat'},
        {name:'光明勇士',url_img:'background:url(/img/AppGame/brightWarrior.png) no-repeat'},
        {name:'神回避3',url_img:'background:url(/img/AppGame/godEvasion3.png) no-repeat'},
        {name:'公主连结Re:Dive',url_img:'background:url(/img/AppGame/dive.png) no-repeat'},
        {name:'魔法纪录 魔法少女小圆外传',url_img:'background:url(/img/AppGame/magicGirl.png) no-repeat'},
        {name:'大王不高兴',url_img:'background:url(/img/AppGame/kingUnHappy.png) no-repeat'},
        {name:'BanG Dream！',url_img:'background:url(/img/AppGame/banG.png) no-repeat'},
    ]
}

//获取直播内容
const _live={
    livers:[
        {face:'img/live/wakeUp.jpg@100w_100h.webp',uname:'梦醒三生梦'},
        {face:'img/live/anuo.jpg@100w_100h.webp',uname:'阿若サン'},
        {face:'img/live/cantWakeUp.jpg@100w_100h.webp',uname:'睡不醒的某某阳'},
        {face:'img/live/crazyDog.jpg@100w_100h.webp',uname:'疯狗Katto'},
        {face:'img/live/OldBa.jpg@100w_100h.webp',uname:'OldBa1'},
        {face:'img/live/mao.jpg@100w_100h.webp',uname:'毛一_'},
        //{face:'img/live/itch.jpg@100w_100h.webp',uname:'痒局长'},
        //{face:'img/live/yoursCo.jpg@100w_100h.webp',uname:'你的可桜已上线'},
        //{face:'img/live/gugu.jpg@100w_100h.webp',uname:'Dae-离咕咕'},
    ],
    acts:[
        {url_img:"img/live/king.jpg"},
        {url_img:"img/live/bls.jpg"}
    ]
}

//获取bml内容
const _bmls=[
    {url_img:'img/bml/bmlbj2.png'},
    {url_img:'img/bml/bmlsh2.png'}
]

//获取二维码
const _erW={
    erWFrame:{'background':'url(/img/header/orcode-frame.png)'},
    erWM:{'background':'url(/img/header/erW.png)'}
}
export default({
    getBarContent(){
        return _barContent;
    },
    getGameCenter(){
        return _gameCenter;
    },
    getLive(){
        return _live;
    },
    getBMLs(){
        return _bmls;
    },
    getErW(){
        return _erW;
    }
})