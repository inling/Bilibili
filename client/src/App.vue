<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  body{
    width: 100%;
  }
  a{
    text-decoration: none;
    color:#222;
    cursor: pointer;
  }
  ul{
    list-style: none;
  }
  .bili-icon{
    display: inline-block;
    background-image: url('/img/icons.png');
  }

  .clear:after{
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
  }

  /*认证类别和会员图标*/
  .legalize-14-1,.legalize-14-2{
    background-image: url(/img/vipIcon.png);
    height: 20px;
    width: 20px;
    display: inline-block;
  }
  .legalize-14-1 {
    background-position: -39px -83px;
  }
  .legalize-14-2 {
    background-position: -105px -83px;
  }
</style>
