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
  
- Customize
  - set_you_link - link to you server, formated "https://test.com/"
  - set_this_data - data to request (not use for GET request)
  - set_this_method - type request (GET, POST and others)
  - set_req_total - number of requests for attack
  - set_req_in_min - limit download of requests per minute

## RU  

Софт для DoS атаки на сервер. Исключительно для тестирования собственных продуктов. 
Использование в противозаконных целях запрещено. Идея навеяна аналогичным скриптом на python(Barry Shteiman - http://www.sectorix.com/2012/05/17/hulk-web-server-dos-tool/).
На основании её и реализовал в javascript(nodejs). Плюшки асинхронного языка в комплекте.

- Зависимости
  - http
  - https
  - colors
  - url

- Настройка
  - set_you_link - ссылка для атаки "https://test.com/"
  - set_this_data - данные REST запроса (могут быть пустыми)
  - set_this_method - вид запроса (GET, POST и др.)
  - set_req_total - общее число запросов к серверу
  - set_req_in_min - предел скорости запросов к серверу (запросов в минуту)
  
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