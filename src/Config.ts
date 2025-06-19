// 导入需要的包
import toml from "toml";
import fs from "fs";

// 读取配置项
let config = toml.parse(<string><unknown>fs.readFileSync("./config.toml"));

// 配置项默认值 (以及处理掉IDE的Weak Warning)
config.DB_CONFIG.DB_USERNAME ||= 'cleversheep2011'
config.DB_CONFIG.DB_PASSWORD ||= 'uni-wiki-password'
config.DB_CONFIG.DB_DATABASE ||= 'uni-wiki'
config.DB_CONFIG.DB_PORT ||= 3306

config.BACKEND_CONFIG.BACKEND_HOST ||= '0.0.0.0'
config.BACKEND_CONFIG.BACKEND_PORT ||= 80

// 导出设置
export {config}