var browser={
    versions:function(){
    var u = navigator.userAgent, app = navigator.appVersion;
    return {
    trident: u.indexOf('Trident') > -1, //IE核心
    presto: u.indexOf('Presto') > -1, //opera核心
    webKit: u.indexOf('AppleWebKit') > -1, //蘋果、谷歌核心
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐核心
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否為移動終端
    ios: !!u.match(/\(i[^;] ;( U;)? CPU. Mac OS X/), //ios終端
    android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android終端
    iPhone: u.indexOf('iPhone') > -1 , //是否為iPhone或者QQHD瀏覽器
    iPad: u.indexOf('iPad') > -1, //是否iPad
    webApp: u.indexOf('Safari') == -1, //是否web應該程式，沒有頭部與底部
    weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
    qq: u.match(/\sQQ/i) == " qq" //是否QQ
    };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
    }
    
if(browser.versions.mobile||browser.versions.android||browser.versions.ios) { 
    document.getElementsByClassName('carousel-item active').innerHTML = "ㄍㄎㄋ";
}