const express=require('express');
const bodyParser=require('body-parser');
const app=express();

/*路由 */
var example=require('./routes/example')

app.use(express.static('public'))
//监听端口
app.listen(80);


app.use('/example',example);


