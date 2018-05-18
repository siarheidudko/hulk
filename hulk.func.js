/**
 *		HULK v1.0.6
 *	https://github.com/siarheidudko/hulk
 *	(c) 2018 by Siarhei Dudko.
 *	https://github.com/siarheidudko/hulk/LICENSE
 *	
 *	Quotation of the original file:
 *	"This tool is a dos tool that is meant to put heavy load on HTTP servers in 
 *	order to bring them to their knees by exhausting the resource pool, 
 *	its is meant for research purposes only and any malicious usage of this tool is prohibited."
 *	Originaly (python) author :  Barry Shteiman - http://www.sectorix.com/2012/05/17/hulk-web-server-dos-tool/
 *	
 *	Rewritten with python (concept) under nodejs, optimized by Siarhei Dudko
 *	
 */

"use strict"

const hulkCore = require(__dirname + '/index.js').core;

module.exports.func = function hulkFunc(set_you_link, set_this_data, set_this_method, set_req_total, set_req_in_min, callback){

	if((typeof(set_you_link) !== 'string') || (typeof(set_this_data) !== 'string') || (typeof(set_this_method) !== 'string') || (typeof(set_req_total) !== 'number') || (typeof(set_req_in_min) !== 'number')) {
		throw 'Error argument';
	}
	
	let AnswerArray = new Array;
	
	function toFunc(data){
		AnswerArray.push(data);
	}

	return hulkCore(set_you_link, set_this_data, set_this_method, set_req_total, set_req_in_min, toFunc).then(function(value){
		if (value === 'finish') {
			callback(AnswerArray);
		} else {
			throw 'Promise error';
		}
	});
	
}