//视频分类
const _navlists=[
    {navName:'动画',numWrap:'992',subLis:['MAD-AMV','MMD-3D','短片·手书·配音']},
    {navName:'番剧',numWrap:'67',subLis:['连载动画','完结动画','咨询','官方延伸','新番时间表','番剧索引']},
    {navName:'国创',numWrap:'124',subLis:['国产动画','国产原创相关','布袋戏','咨询','新番时间表','国产动画索引']},
    {navName:'音乐',numWrap:'999+',subLis:['原创音乐','翻唱','VOCALOID-UTAU','演奏','三次元音乐','OP/ED/OST','音乐选集']},
    {navName:'舞蹈',numWrap:'241',subLis:['宅舞','三次元舞蹈','舞蹈教程','演奏','三次元音乐','OP/ED/OST','音乐选集']},
    {navName:'游戏',numWrap:'999+',subLis:['单机游戏','电子竞技','手机游戏','网络游戏','桌游棋牌','GMV','音游','Mugen','游戏赛事']},
    {navName:'科技',numWrap:'999+',subLis:['趣味科普人生','野生技术协会','演讲·公开课','星海','数码','机械','汽车']},
    {navName:'生活',numWrap:'999+',subLis:['搞笑','日常','美食圈','动物圈','手工','绘画','运动','其他']},
    {navName:'鬼畜',numWrap:'50',subLis:['鬼畜调教','音MAD','人力VOCALOID','教程演示']},
    {navName:'时尚',numWrap:'683',subLis:['美妆','服饰','健身','咨询']},
    {navName:'广告',numWrap:'170',subLis:[]},
    {navName:'娱乐',numWrap:'999+',subLis:['综艺','明星','Korea']},
    {navName:'影视',numWrap:'999+',subLis:['影视杂谈','影视剪辑','短片','预告·咨询','特摄']},
    {navName:'放映厅',numWrap:'320',subLis:['纪录片','电影','电视剧']}
]

//区分类
const _sideNavlists=[
    {iname:'zhuanlan',sname:'专栏'},
    {iname:'square',sname:'广场'},
    {iname:'live',sname:'直播'},
    {iname:'blackroom',sname:'小黑屋'}
]

//动态图
const _rGiflist=[
    'img/header/random-1.gif',
    'img/header/random-2.gif',
    'img/header/random-3.gif',
    'img/header/random-4.gif',
    'img/header/random-5.gif',
    'img/header/random-6.gif'
]


export default({
    getNavlists(){
        return _navlists;
    },
    getSideNavlists(){
        return _sideNavlists;
    },
    getRGiflist(){
        return _rGiflist;
    }
})