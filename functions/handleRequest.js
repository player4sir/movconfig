exports.handler = async function (event, context) {
  const config = {
    "currentApi": {
      "name": "优质源0",
      "url": "https://huawei8.live/api.php/provide/vod/"
    },
    "apiList": [
      { 'name': '源0', 'url': 'https://huawei8.live/api.php/provide/vod/', 'type': 'default' },
      { 'name': '源1', 'url': 'https://json02.heimuer.xyz/api.php/provide/vod/', 'type': 'default' },
      { 'name': '源2', 'url': 'https://api.1080zyku.com/inc/apijson.php', 'type': '1080zyku' },
      { 'name': '源3', 'url': 'https://www.huyaapi.com/api.php/provide/vod/from/hym3u8/at/json', 'type': 'default' },
      // { 'name': '普通源(有广告)', 'url': 'https://360zy.com/api.php/provide/vod/at/json', 'type': 'default' },
      // { 'name': '超清源(更新稍慢,需代理)', 'url': 'https://api.haiwaikan.com/v1/vod', 'type': 'haiwaikan' }
    ],
    'models': [
      {
        'id': '@cf/meta/llama-3.1-8b-instruct',
        'name': 'llama-3.1-8b',
        'provider': 'Meta'
      },
      { 'id': 'spark_model_id', 'name': '星火大模型', 'provider': '讯飞' },
      {
        'id': '@cf/qwen/qwen1.5-14b-chat-awq',
        'name': 'qwen1.5-14b',
        'provider': '阿里'
      }
    ],
    'imageModels': [
      {
        'id': '@cf/lykon/dreamshaper-8-lcm',
        'name': 'dreamshaper-8-lcm',
        'provider': 'workers-ai-image',
        'type': 'text-to-image'
      },
      {
        'id': '@cf/stabilityai/stable-diffusion-xl-base-1.0',
        'name': 'stable-diffusion-1.0',
        'provider': 'workers-ai-image',
        'type': 'text-to-image'
      },
      {
        'id': '@cf/bytedance/stable-diffusion-xl-lightning',
        'name': 'stable-diffusion-xl',
        'provider': 'workers-ai-image',
        'type': 'text-to-image'
      }
    ]
  };

  return {
    statusCode: 200,
    body: JSON.stringify(config),
    headers: { 'Content-Type': 'application/json' }
  };
};
