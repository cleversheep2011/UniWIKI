/* 导入包需要的NPM包 */
import express from 'express'; //express主包
import session from "express-session"; //express会话
import cors from "cors" //CORS跨站访问

import * as uuid from "uuid" //UUID生成
import moment from "moment"; //时间格式化
import sharp from "sharp"; //图片格式修改
import fs from "fs"; //文件读写


/* 创建服务端 */
const router = express(); //创建路由
router.use(cors()); //CORS支持
router.use(express.json()) // POST请求支持
router.use(express.urlencoded({extended: true}))

// 测试路由
router.get("/api/test",async (req,res)=>{
    res.send("Hello World!");
});

export {router}