/*导入第三方模块--统一写在这块 */
const express=require('express');
const bodyParser=require('body-parser');

/*导入路由--统一写在这块 */
const example=require('./routes/example');

/*监听端口*/
const app=express();
app.listen(3000,()=>{
    console.log('Welcome to the illustration world.');
});

app.use(bodyParser.urlencoded({
    extended:false
}));

/*托管静态资源*/
app.use(express.static('static'));

/*使用路由*/
app.use('/example',example);