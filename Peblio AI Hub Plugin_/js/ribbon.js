function GetImage(control) {
  return `images/${control.Id}.svg`
}


function OnAction(control) {
  const aiId = control.Id;
  let taskPane;
  switch (aiId) {
    case 'deepseek':
      taskPane = window.Application.CreateTaskPane('chat.deepseek.com');
      break;
    case 'doubao':
      taskPane = window.Application.CreateTaskPane('www.doubao.com/chat');
      break;
    case 'kimi':
      taskPane = window.Application.CreateTaskPane('kimi.moonshot.cn');
      break;
    case 'qwen':
      taskPane = window.Application.CreateTaskPane('tongyi.aliyun.com/qianwen');
      break;
    case 'yuanbao':
      taskPane = window.Application.CreateTaskPane('yuanbao.tencent.com/chat');
      break;
    case 'wenxinyiyan':
      taskPane = window.Application.CreateTaskPane('yiyan.baidu.com');
      break;
    case 'xunfeixinhuo':
      taskPane = window.Application.CreateTaskPane('xinghuo.xfyun.cn/desk');
      break;
    case 'zhipuqingyan':
      taskPane = window.Application.CreateTaskPane('chatglm.cn/main');
      break;
    case 'tiangong':
      taskPane = window.Application.CreateTaskPane('www.tiangong.cn');
      break;
    case 'chatgpt':
      taskPane = window.Application.CreateTaskPane('chatgpt.com');
      break;
    case 'moyu':
      taskPane = window.Application.CreateTaskPane('www.douyin.com');
      break;
    case 'moyu1':
      taskPane = window.Application.CreateTaskPane('www.xiaohongshu.com/explore');
      break;
    case 'nadoutong':
      taskPane = window.Application.CreateTaskPane('paper.people.com.cn');
      break;
    case 'auth':
      alert('这里没啥用，小红书号<year2025>可能需要n关注！')
      break;
    default:
      taskPane = window.Application.CreateTaskPane('chat.deepseek.com');
      break;
  }
  taskPane.Visible = true;
}
