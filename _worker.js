
// 部署完成后在网址后面输入/，加上下方设置的mytoken=的值，即可获取聚合后的节点

let mytoken = 'cc'; //可根据需要自行设定，或者使用UUID在线生成网站进行生成：https://1024tools.com/uuid
let BotToken ='7029886039:AAHMIuwBXP6Pwr9Oc-brRe1s1YnWvmGS0Vs'; //可以为空，或电报@BotFather关注机器人，输入/start，选择：/newbot进行获取
let ChatID ='377138912'; //可以为空，或电报@userinfobot中获取，选择：/start进行获取
let TG = 0; //新手勿动， 开发者选项，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'Pages-SUB-Vless-HJ';
let SUBUpdateTime = 6; //更改此次设置订阅更新时间，单位小时

//在以下输入您的自建节点链接或订阅链接，请保留双引号
let MainData = `
vless://23bf117e-16fe-4dfa-8dbf-c305af289d99@gur.gov.ua:2096?encryption=none&security=tls&sni=csj.519530.xyz&fp=random&type=ws&host=csj.519530.xyz&path=%2F%3Fed%3D2560#chishaojun.pages.dev
vless://80803489-e3db-4cf0-a029-2d505f569999@ip.sb:443?encryption=none&security=tls&sni=cfn.519530.xyz&fp=randomized&type=ws&host=cfn.519530.xyz&path=%2F%3Fed%3D2560#cfn.519530.xyz
vless://2b0692e2-05f6-4640-b4d6-d1df62a4efee@visa.cn:443?encryption=none&security=tls&sni=cm80.519530.xyz&fp=randomized&type=ws&host=cm80.519530.xyz&path=%2F%3Fed%3D2560#cm80.519530.xyz
vless://53f64ca2-fca6-487f-8f36-a4b813147777@4chan.org:2096?encryption=none&security=tls&sni=cm.shaojun.filegear-sg.me&fp=randomized&type=ws&host=cm.shaojun.filegear-sg.me&path=%2F%3Fed%3D2560#cm-ed.pages.hk
vless://72825c52-523d-4c69-9437-f15a82858555@www.whoer.net:2087?encryption=none&security=tls&sni=s.shaojun.filegear-sg.me&fp=randomized&type=ws&host=s.shaojun.filegear-sg.me&path=%2F%3Fed%3D2560#Gmail-s-pages
vless://5af60c06-addc-452e-aa17-dc313f5f0008@www.whatismyip.com:2053?encryption=none&security=tls&sni=c.shaojun.filegear-sg.me&fp=randomized&type=ws&host=c.shaojun.filegear-sg.me&path=%2F%3Fed%3D2560#Gmail-c-pages
vless://dee7b895-034f-4f4b-a1cb-96003833de88@www.tinyurl.com:2096?encryption=none&security=tls&sni=h.shaojun.filegear-sg.me&fp=random&type=ws&host=h.shaojun.filegear-sg.me&path=%2F%3Fed%3D2048#h.workers.us
vless://898f1090-9b28-49a0-9744-0b95f3179c99@www.visa.com.sg:8443?encryption=none&security=tls&sni=w3k.519530.xyz&fp=randomized&type=ws&host=w3k.519530.xyz&path=%2F%3Fed%3D2048#worker-3k.workers.dev
vless://013d0d43-346d-428f-9df4-82775a647889@www.visa.co.jp:2083?encryption=none&security=tls&sni=kcv.519530.xyz&fp=randomized&type=ws&host=kcv.519530.xyz&path=%2F%3Fed%3D2048#kmcherryvless.workers.dev
vless://10880103-1f79-47e6-a88e-08b517b05cdc@www.visa.com:8443?encryption=none&security=tls&sni=wyc.519530.xyz&fp=randomized&type=ws&host=wyc.519530.xyz&path=%2F%3Fed%3D2048#worker-yxym.workers.dev
vless://58e9615f-3fea-49eb-8502-d10d6beeafdd@tfl.gov.uk:2087?encryption=none&security=tls&sni=kc.519530.xyz&fp=randomized&type=ws&host=kc.519530.xyz&path=%2F%3Fed%3D2560#kmcherry.pages.dev
vless://66159e8d-9c68-4801-83ca-05d26fe1a88b@www.upwork.com:2096?encryption=none&security=tls&sni=pc.519530.xyz&fp=randomized&type=ws&host=pc.519530.xyz&path=%2F%3Fed%3D2560#Pages-chishaojun-TLS
vless://5cddd29a-587f-4c09-8972-7c03cc139988@fbi.gov:2083?encryption=none&security=tls&sni=j.shaojun.filegear-sg.me&fp=randomized&type=ws&host=j.shaojun.filegear-sg.me&path=%2F%3Fed%3D2560#Gmail-j-pages
vless://ae4e44e0-72a3-46b4-9cc4-2d39e96ca999@www.visa.com:2053?encryption=none&security=tls&sni=cmwk.shaojun.filegear-sg.me&fp=randomized&type=ws&host=cmwk.shaojun.filegear-sg.me&path=%2F%3Fed%3D2560#cm-wk.workers.jp
vless://e98f7d71-850b-495b-b1de-239a66100588@www.visa.com.tw:2087?encryption=none&security=tls&sni=wkc.519530.xyz&fp=randomized&type=ws&host=wkc.519530.xyz&path=%2F%3Fed%3D2048#worker-kmcherry.workers.dev
vless://d50165ce-35d6-4c42-9bf4-53badbd38865@www.visa.com.hk:2053?encryption=none&security=tls&sni=km.519530.xyz&fp=randomized&type=ws&host=km.519530.xyz&path=%2F%3Fed%3D2048#kmcherry.workers.dev
vless://898f1090-9b28-49a0-9744-0b95f3179c99@www.visa.com.sg:2082?encryption=none&security=none&sni=w3k.chishaojun.top&fp=randomized&type=ws&host=worker-3k.chishaojun.workers.dev&path=%2F%3Fed%3D2048#worker-3k.workers.dev-80
vless://013d0d43-346d-428f-9df4-82775a647889@www.visa.co.jp:8080?encryption=none&security=none&sni=kcv.chishaojun.top&fp=randomized&type=ws&host=kmcherryvless.chishaojun.workers.dev&path=%2F%3Fed%3D2048#kmcherryvless.workers.dev-80
vless://e98f7d71-850b-495b-b1de-239a66100588@www.visa.com.tw:2052?encryption=none&security=none&sni=wkc.519530.xyz&fp=randomized&type=ws&host=worker-kmcherry.chishaojun.workers.dev&path=%2F%3Fed%3D2048#worker-kmcherry.workers.dev-80
vless://d50165ce-35d6-4c42-9bf4-53badbd38865@www.visa.com.hk:2086?encryption=none&security=none&sni=km.cherry.cloudns.org&fp=randomized&type=ws&host=kmcherry.chishaojun.workers.dev&path=%2F%3Fed%3D2048#kmcherry.workers.dev-80
vless://ae4e44e0-72a3-46b4-9cc4-2d39e96ca999@www.gov.ua:2052?encryption=none&security=none&sni=vl-tc-jp.chishaojun-f51.workers.dev&fp=randomized&type=ws&host=cmwk.shaojun.filegear-sg.me&path=%2F%3Fed%3D2560#cmwk.workers.jp-80
vless://10880103-1f79-47e6-a88e-08b517b05cdc@www.authy.com:2052?encryption=none&security=none&sni=wyc.chishaojun.top&fp=randomized&type=ws&host=worker-yxym.chishaojun.workers.dev&path=%2F%3Fed%3D2048#worker-yxym.workers.dev-80
vless://dee7b895-034f-4f4b-a1cb-96003833de88@www.zsu.gov.ua:80?encryption=none&security=none&sni=vlw-cm-us.chishaojun-f51.workers.dev&fp=randomized&type=ws&host=h.shaojun.filegear-sg.me&path=%2F%3Fed%3D2560#h.workers.us-80
vless://2b0692e2-05f6-4640-b4d6-d1df62a4efee@ip.sb:2052?encryption=none&security=tls&sni=cm80.519530.xyz&fp=randomized&type=ws&host=cm80.519530.xyz&path=%2F%3Fed%3D2560#edgetunnel-cm80-80
vless://80803489-e3db-4cf0-a029-2d505f569999@visa.cn:2052?encryption=none&security=tls&sni=cfn.519530.xyz&fp=randomized&type=ws&host=cfn.519530.xyz&path=%2F%3Fed%3D2560#edgetunnel-cfn-80
https://h.shaojun.filegear-sg.me/dee7b895-034f-4f4b-a1cb-96003833de88
https://cm.shaojun.filegear-sg.me/53f64ca2-fca6-487f-8f36-a4b813147777
https://cmwk.shaojun.filegear-sg.me/ae4e44e0-72a3-46b4-9cc4-2d39e96ca999
https://moist.996.buzz/sub?host=cm80.519530.xyz&uuid=2b0692e2-05f6-4640-b4d6-d1df62a4efee
`

//请将机场订阅链接填入上方
let urls = [];// https://subs.zeabur.app/clash , https://neko-warp.nloli.xyz/neko_warp.yaml

let subconverter = "subapi.fxxk.dedyn.io"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/kmcherry/ACL4SSR/main/Clash/config/ACL4SSR_Online_Full_MultiMode(GSU)"; //订阅配置文件，可自行更换

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		let links = await ADD(MainData + '\n' + urls.join('\n'));
		let link = "";
		let linksub = "";
		
		for (let x of links) {
			if (x.toLowerCase().startsWith('http')) {
				linksub += x + '\n';
			} else {
				link += x + '\n';
			}
		}
		MainData = link;
		urls = await ADD(linksub);
		let sublinks = request.url ;
		//console.log(MainData,urls,sublinks);
		
		let warp = env.WARP ;
		if(warp && warp != "") sublinks += '|' + (await ADD(warp)).join('|');

		if ( !(token == mytoken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage("#异常访问", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			//首页改成一个nginx伪装页
			return new Response(`
			<!DOCTYPE html>
			<html>
			<head>
			<title>Welcome to nginx!</title>
			<style>
				body {
					width: 35em;
					margin: 0 auto;
					font-family: Tahoma, Verdana, Arial, sans-serif;
				}
			</style>
			</head>
			<body>
			<h1>Welcome to nginx!</h1>
			<p>If you see this page, the nginx web server is successfully installed and
			working. Further configuration is required.</p>
			
			<p>For online documentation and support please refer to
			<a href="http://nginx.org/">nginx.org</a>.<br/>
			Commercial support is available at
			<a href="http://nginx.com/">nginx.com</a>.</p>
			
			<p><em>Thank you for using nginx.</em></p>
			</body>
			</html>
			`, {
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else if ( TG == 1 || !userAgent.includes('subconverter') || !userAgent.includes('null')){
			await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		}

		let req_data = MainData;
		// 创建一个AbortController对象，用于控制fetch请求的取消
		const controller = new AbortController();

		const timeout = setTimeout(() => {
			controller.abort(); // 取消所有请求
		}, 1618); // 1.618秒后触发

		try {
			const responses = await Promise.allSettled(urls.map(url =>
				fetch(url, {
					method: 'get',
					headers: {
						'Accept': 'text/html,application/xhtml+xml,application/xml;',
						'User-Agent': `v2rayn/6.42 cmliu/CF-Workers-SUB ${userAgentHeader}`
					},
					signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
				}).then(response => {
					if (response.ok) {
						return response.text().then(content => {
							// 这里可以顺便做内容检查
							if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups') && content.includes('rules')) {
								//console.log("clashsub: " + url);
								sublinks += "|" + url;
							} else if  (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
								//console.log("singboxsub: " + url);
								sublinks += "|" + url;
							} else {
								return content; // 保证链式调用中的下一个then可以接收到文本内容
							}
						});
					} else {
						return ""; // 如果response.ok为false，返回空字符串
					}
				})
			));	
			//console.log(responses);
			for (const response of responses) {
				if (response.status === 'fulfilled') {
					const content = await response.value;
					req_data += base64Decode(content) + '\n';
				}
			}
		} catch (error) {
			//console.error(error);
		} finally {
			// 无论成功或失败，最后都清除设置的超时定时器
			clearTimeout(timeout);
		}
		//修复中文错误
		const utf8Encoder = new TextEncoder();
		const encodedData = utf8Encoder.encode(req_data);
		const text = String.fromCharCode.apply(null, encodedData);

		//去重
		const uniqueLines = new Set(text.split('\n'));
		const result = [...uniqueLines].join('\n');
		//console.log(result);

		const base64Data = btoa(result);
		//console.log(base64Data);

		//console.log("自建节点: " + MainData,"订阅链接: " + urls,"转换链接: " + sublinks);

		let target = "v2ray";
		if (userAgent.includes('clash') && !userAgent.includes('nekobox')) {
			target = "clash";
		} else if (userAgent.includes('sing-box') || userAgent.includes('singbox')) {
			target = "singbox";
		} else {
			return new Response(base64Data ,{
				headers: { 
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		}

		const subconverterUrl = `https://${subconverter}/sub?target=${target}&url=${encodeURIComponent(sublinks)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;

		try {
			const subconverterResponse = await fetch(subconverterUrl);
			
			if (!subconverterResponse.ok) {
				throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
			}
			
			const subconverterContent = await subconverterResponse.text();
			
			return new Response(subconverterContent ,{
				headers: { 
					"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		} catch (error) {
			return new Response(`Error: ${error.message}`, {
				status: 500,
				headers: { 'content-type': 'text/plain; charset=utf-8' },
			});
		}

	}
};

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

// 将 base64 编码的字符串转换为 utf-8 编码的字符
function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function ADD(envadd) {
	var addtext = envadd.replace(/[	 "'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}
