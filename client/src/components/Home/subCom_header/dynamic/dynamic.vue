<template>
    <div class="dynamic">
        <div class="dynamic-m">
            <div class="dyn_menu">
                <div class="menu">
                    <ul>
                        <li class="on" @click="liClick(0)">视频</li>
                        <li @click="liClick(1)">直播</li>
                        <li @click="liClick(2)">专栏</li>
                    </ul>
                    <div class="line" :style="left[index]"></div>
                </div>            
            </div>
            <div class="dyn_wrapper" :style="height[index]">
                <view-video :mode="mode" :videos_history="videos_history" :videos_last="videos_last" :live="live" :only_history="only_history" :only_last="only_last"></view-video>
            </div>
            <div class="dyn_bottom">
                <div class="b">
                    <router-link to="#">
                        <span>查看全部</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import viewVideo from "@/components/Home/subCom_header/dynamic/view-video.vue"
    export default({
        data(){
            return{
                index:0,
                mode:1,
                left:[{left:'6px'},{left:'50px'},{left:'94px'}],
                height:[{height:'304px'},{height:'120px'},{height:'304px'}],
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
        },
        methods:{
            liClick(n){
                this.index=n;
                this.setColor(n);
                this.mode=this.index+1;
            },
            setColor(n){
                var lis=document.querySelectorAll('.dynamic .dynamic-m .dyn_menu .menu ul li');
                for(var i=0;i<lis.length;i++){
                    lis[i].className='';
                }
                n++;
                var nowli=document.querySelector('.dynamic .dynamic-m .dyn_menu .menu ul li:nth-child('+n+')');
                nowli.className='on';
            }
        },
        created() {
            
        },
        components:{
            viewVideo
        },
        props:[]
    })
</script>

<style>
    .dynamic{
        position: absolute;
        left:-170px;
        background:transparent;
        width:380px;
        padding:0 10px 10px;
        color:#666;
    }
    .dynamic .dynamic-m{
        width: 362px;
        border-radius:0,0,4px,4px;
        background-color:#fff;
        box-shadow:0 2px 4px rgba(0,0,0,.16);
        border:1px solid #e5e9ef;
        text-align: center;
        font-size:12px;
    }
    .dynamic .dynamic-m .dyn_menu{
        display: block;
        position: relative;
        text-align: center;
        padding:16px 0 10px;
        line-height: normal;
    }
    .dynamic .dynamic-m .dyn_menu .menu{
        position: relative;
        display: inline-block;
        vertical-align: top;
        text-align:center;
    }
    .dynamic .dynamic-m .dyn_menu li{
        height:30px;
        line-height:28px;
        float:left;
        cursor:pointer;
        padding:0 5px;
        list-style-type: none;
        margin-left:10px;
    }
    .dynamic .dynamic-m .dyn_menu li.on{
        color:#00a1d6;
    }
    .dynamic .dynamic-m .dyn_menu li:first-child{
        margin-left:0;
    }
    .dynamic .dynamic-m .dyn_menu .line{
        position: absolute;
        left: 0;
        bottom: 0;
        background: #00a1d6;
        height: 1px;
        border: none;
        width: 24px;
        margin: 0;
    }
    .dynamic .dynamic-m .dyn_menu .menu .line::before{
        content: "";
        position: absolute;
        left: 50%;
        margin-left: -3px;
        bottom: 0;
        width: 0;
        height: 0;
        border: 3px dashed #00a1d6;
        border-bottom-style: solid;
        border-top: none;
        border-left-color: transparent;
        border-right-color: transparent;
    }
    .dynamic .dynamic-m .dyn_wrapper{
        height: 304px;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: #fff;
        position: relative;
        transition: all .5s;
    }
    .dynamic .dynamic-m .dyn_bottom .b{
        line-height: 30px;
        height: 50px;
        position: relative;
        padding: 10px 12px;
        white-space: nowrap;
        text-align: center;
    }
    .dynamic .dynamic-m .dyn_bottom .b a{
        display: block;
        background-color: #e5e9ef;
        border-radius: 4px;
        height: 28px;
        line-height: 28px;
        border: 1px solid #e0e6ed;
    }
    .dynamic .dynamic-m .dyn_bottom .b a:hover{
        background-color: #ccd0d7;
    }
</style>
