/*eslint-disable*/
const path = require('path');
const rootPath = path.resolve(__dirname, '..'); // 项目根目录
const sitePath = path.join(rootPath, 'site');
module.exports = {
    appPath: {
        srcPath: path.join(rootPath, 'src'),
        staticPath: path.join(rootPath, 'static'),
        main: path.join(rootPath, 'src/index.jsx'),
        indexHTML: path.join(rootPath, 'template/index.html')// 入口模板页面
    }
};