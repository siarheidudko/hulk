# Hulk v1.0.0
DoS Attack tools (for testing purposes only)

## EN

Quotation of the original file:
"This tool is a dos tool that is meant to put heavy load on HTTP servers in 
order to bring them to their knees by exhausting the resource pool, 
its is meant for research purposes only and any malicious usage of this tool is prohibited."
	
Rewritten with python (concept) under nodejs, optimized by Siarhei Dudko

- Dependencies
  - http
  - https
  - colors
  - url
  
- Customize
  - you_link - link to you server, formated "https://test.com/"
  - this_data - data to request (not use for GET request)
  - this_method - type request (GET, POST and others)
  - req_total - number of requests for attack
  - req_in_min - limit download of requests per minute

## RU  

Софт для DoS атаки на сервер. Исключительно для тестирования собственных продуктов. 
Использование в противозаконных целях запрещено. Идея навеяна аналогичным скриптом на python.
На основании её и реализовал в javascript(nodejs).

- Зависимости
  - http
  - https
  - colors
  - url

- Настройка
  - you_link - ссылка для атаки "https://test.com/"
  - this_data - данные REST запроса (могут быть пустыми)
  - this_method - вид запроса (GET, POST и др.)
  - req_total - общее число запросов к серверу
  - req_in_min - предел скорости запросов к серверу (запросов в минуту)
  
## SCREENSHOTS

- Внешний вид атаки/Appearance of attack
![Screenshot_1](https://github.com/siarheidudko/hulk/raw/master/img/Screenshot_1.png)

- Вывод итоговой статистики/Output of summary statistics
![Screenshot_2](https://github.com/siarheidudko/hulk/raw/master/img/Screenshot_2.png)