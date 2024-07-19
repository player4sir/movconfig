exports.handler = async function(event, context) {
    const config = {
      "currentApi": {
        "name": "优质源0",
        "url": "https://huawei8.live/api.php/provide/vod/"
      },
      "apiList": [
        {'name': '优质源', 'url': 'https://huawei8.live/api.php/provide/vod/', 'type': 'default'},
        {'name': '优质源(优质需代理)', 'url': 'https://json.heimuer.xyz/api.php/provide/vod/', 'type': 'default'},
        {'name': '优质源(有广告)', 'url': 'https://api.1080zyku.com/inc/apijson.php', 'type': '1080zyku'},
        {'name': '超清源(有广告)', 'url': 'https://www.huyaapi.com/api.php/provide/vod/from/hym3u8/at/json', 'type': 'default'},
        {'name': '普通源(有广告)', 'url': 'https://360zy.com/api.php/provide/vod/at/json', 'type': 'default'},
        {'name': '超清源(更新稍慢,需代理)', 'url': 'https://api.haiwaikan.com/v1/vod', 'type': 'haiwaikan'}
      ]
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify(config),
      headers: { 'Content-Type': 'application/json' }
    };
  };
  