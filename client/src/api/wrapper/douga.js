var _subNavItems=[
    {title:'全部',tips:''},
    {title:'MAD·AMV',tips:'具有一定制作程度的动画或静画的二次创作视频'},
    {title:'MMD·3D',tips:'使用MMD（MikuMikuDance）和其他3D建模类软件制作的视频'},
    {title:'短片·手书·配音',tips:'追求创新并具有强烈特色的短片、手书（绘）及ACG相关配音'},
    {title:'综合',tips:'以动画及动画相关内容为素材，包括但不仅限于音频替换、杂谈、排行榜等内容'}
]

var _sliderContent=[
    {src:'img/slider/1/1.jpg@620w_220h.webp',title:'不同的歌曲，不同的故事'},
    {src:'img/slider/1/2.jpg@620w_220h.webp',title:'惯性漂移'},
    {src:'img/slider/1/3.jpg@620w_220h.webp',title:'谎言'},
    {src:'img/slider/1/4.jpg@620w_220h.webp',title:'午时已到'},
    {src:'img/slider/1/5.jpg@620w_220h.webp',title:'最后一役'}
]
var _homeCards=[
    {title:'【响喜乱舞X苍之纪元】这个妹子好漂亮的，不如我们把她……',   
    src:'img/video/5.jpg@620w_220h.webp',
    upMaster:'up主：晨上初雨',
    playCount:'播放：10.7万',
    href:''},

    {title:'日本历史上的文豪们变身动画人物会发生怎样的碰撞？「文豪野犬全员混剪」',                               
    src:'img/video/6.jpg@620w_220h.webp',
    upMaster:'up主：暗猫の祝福',
    playCount:'播放：3.9万',
    href:""},

    {title:'花季少女被抓去研究，结果竟然是用身体养育怪物？？！', 
    src:'img/video/7.jpg@620w_220h.webp',
    upMaster:'up主：whitebuster',
    playCount:'播放：22.8万',
    href:''},

    {title:'[魔道祖师]澄游记',
    src:'img/video/8.jpg@620w_220h.webp',
    upMaster:'up主：脚滑狐狸爱摔跤',
    playCount:'播放：7711',
    href:''},

    {title:'二次元AB母女单选题，动漫中的母女掉进河里你会先救谁？——动漫模拟考',
    src:'img/video/9.jpg@620w_220h.webp',
    upMaster:'up主：可乐神提供',
    playCount:'播放：8937',
    href:''},

    {title:'【醋王专场】当正宫遇上男主外遇，会发生什么?',
    src:'img/video/10.jpg@620w_220h.webp',
    upMaster:'up主：星海璃幻',
    playCount:'播放：5114',
    href:''}
]

export default({
    getSubNavItems(){
        return _subNavItems
    },
    getSliderContent(){
        return _sliderContent
    },
    getHomeCards(){
        return _homeCards
    }
})