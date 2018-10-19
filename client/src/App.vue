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
  li.headli{
    float: left;
    position: relative;
    text-align: center;
    height: 42px;
    line-height: 42px;
  }
  li.headli:hover{
    background-color: hsla(0,0%,100%,.3);
  }

  a.heada{
    display: block;
    height: 100%;
    padding: 0 8px;
  }
</style>
