const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors')
const app=express();

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(cors({
    origin:[],
    credentials:true
}))

/*路由 */
var example=require('./routes/example')

app.use(express.static('public'))
//监听端口
app.listen(80);


app.use('/example',example);


