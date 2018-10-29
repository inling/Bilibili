//用户导航栏
const _barContent=[
    {title:'',text:'大会员',mesNum:0,downDiv:'bVip'},
    {title:'消息',text:'消息',mesNum:50,downDiv:'information'},
    {title:'',text:'动态',mesNum:0,downDiv:'dynamic'},
    {title:'',text:'稍后再看',mesNum:0,downDiv:'ul5Style'},
    {title:'',text:'收藏夹',mesNum:0,downDiv:'ul5Style2'},
    {title:'',text:'历史',mesNum:0,downDiv:''} 
]

//大会员
const _bVipRecommands=[
    {title:'古墓丽影 经典劳拉上线',url_img:'img/bVip/laola.png@107w_143h.webp'},
    {title:'喂！你有一张哔哩哔哩主题的信用卡待领取！',url_img:'img/bVip/bankCard.png@107w_143h.webp'}
]

//用户消息
const _infos=[
    {title:'回复我的',info_num:0},
    {title:'@我的',info_num:0},
    {title:'收到的赞',info_num:0},
    {title:'系统通知',info_num:44},
    {title:'我的消息',info_num:0}
]

//动态
const _dynamic={
    videos_history:[
        {   
            uname:'小豆蔻儿',
            authentication:'1',
            title:'【豆蔻教程】一款适合面基的汉服发型教程，不仅要显得发量多，还要把假发包都藏好～',
            href:'#',
            smallImg:'background-image:url(/img/dyna/xiaodoukou.jpg@80w_60h.webp)'},
        {   
            uname:'李长歌Echo',
            authentication:'0',
            title:'【剑网三】世外蓬莱技能奇穴详解！名与利几步之遥我都要！',
            href:'#',
            smallImg:'background-image:url(/img/dyna/lichangge.jpg@80w_60h.webp)'},
        {   
            uname:'留学的真相',
            authentication:'2',
            title:'【室内设计师】一个班全是中国人 来了三年学到了啥？',
            href:'#',
            smallImg:'background-image:url(/img/dyna/japanlife1.jpg@80w_60h.webp)'},
        {   
            uname:'留学的真相',
            authentication:'2',
            title:'【国人疯抢】日本小学生书包为啥这么贵？价格直逼LV',
            href:'#',
            smallImg:'background-image:url(/img/dyna/japanlife4.jpg@80w_60h.webp)'},
    ],
    videos_last:[
        {   
            uname:'留学的真相',
            authentication:'2',
            title:'留学生【摆摊】卖辣子鸡 韩国大叔试吃后：味道也就那样吧',
            href:'#',
            smallImg:'background-image:url(/img/dyna/japanlife3.jpg@80w_60h.webp)'},
    ],
    live:[
         {   
            uname:'小豆蔻儿',
            authentication:'1',
            title:'【豆蔻教程】一款适合面基的汉服发型教程，不仅要显得发量多，还要把假发包都藏好～',
            href:'#',
            smallImg:'background-image:url(/img/dyna/xiaodoukou.jpg@80w_60h.webp)'},
        {   
            uname:'留学的真相',
            authentication:'2',
            title:'【室内设计师】一个班全是中国人 来了三年学到了啥？',
            href:'#',
            smallImg:'background-image:url(/img/dyna/japanlife1.jpg@80w_60h.webp)'},
    ],
    only_history:[
        {   
            uname:'留学的真相',
            authentication:'2',
            title:'【室内设计师】一个班全是中国人 来了三年学到了啥？',
            href:'#',
            smallImg:'background-image:url(/img/dyna/japanlife1.jpg@80w_60h.webp)'},
        {   
            uname:'留学的真相',
            authentication:'2',
            title:'留学生【摆摊】卖辣子鸡 韩国大叔试吃后：味道也就那样吧',
            href:'#',
            smallImg:'background-image:url(/img/dyna/japanlife3.jpg@80w_60h.webp)'},
        {   
            uname:'留学的真相',
            authentication:'2',
            title:'【国人疯抢】日本小学生书包为啥这么贵？价格直逼LV',
            href:'#',
            smallImg:'background-image:url(/img/dyna/japanlife4.jpg@80w_60h.webp)'},
    ],
    only_last:[
        {   
            uname:'留学的真相',
            authentication:'2',
            title:'一个曾经【抑郁】女生的自述 感觉每天坚持不下去！',
            href:'#',
            smallImg:'background-image:url(/img/dyna/japanlife5.jpg@80w_60h.webp)'},
    ],

}

//稍后再看
const _laterSees=[
    {title:'老菊家的幸福食光Vol.03：花雕怪味鱼',href:'#'},
    {title:'【灯泡】桐人女装进入女厕？炮姐发现他真实性别后大发雷霆',href:'#'},
    {title:'【墨子沙龙】#量子实验室设备展示#',href:'#'},
    {title:'DIY一个自己的小菜园',href:'#'}
]
//收藏夹
const _collection=[
    {title:'《阴阳师》官方PV',href:'#'},
    {title:'【高清修复】【恐怖】生人回避2 (1979) 丧尸片入门 豆瓣：7.1 【中字】',href:'#'},
    {title:'【日剧SP】 高护木的规矩SP 2014 【华灯字幕组】',href:'#'},
    {title:'【高清】【惊悚】黑暗面 La Cara Oculta (2011)',href:'#'}
]

//投稿
const _submission=[
    {title:'专栏投稿',position:'background-position: -534px -919px'},
    {title:'音频投稿',position:'background-position: -534px -983px'},
    {title:'视频投稿',position:'background-position: -471px -919px'},
    {title:'投稿管理',position:'background-position: -471px -982px'},
    {title:'创作中心',position:'background-position: -471px -1751px'}
]

export default({
    getBarContent(){
        return _barContent;
    },
    getBVipRecommands(){
        return _bVipRecommands;
    },
    getInfos(){
        return _infos;
    },
    getDynamic(){
        return _dynamic;
    },
    getLaterSees(){
        return _laterSees;
    },
    getCollection(){
        return _collection;
    },
    getSubmission(){
        return _submission;
    }
})
