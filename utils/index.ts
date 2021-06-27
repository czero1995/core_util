const umi = require('umi')

const util = {
    qiankunJump:  (url, name="页面名称",params=null) => {
        window.__POWERED_BY_QIANKUN__  ?  history.pushState(params, name, url) : umi.history.push(url);
    }
    
}
module.exports =util