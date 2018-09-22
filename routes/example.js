/*导入模块*/
const express=require('express');
const pool=require('../pool');

//测试用路由
const router=express.Router();
router.get('/',(req,res)=>{
    var sql=`SELECT * FROM testTable`;
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

module.exports=router;
