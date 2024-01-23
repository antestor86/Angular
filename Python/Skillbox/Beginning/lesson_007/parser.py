import requests
from bs4 import BeautifulSoup

headers = {
    'Host' : 'staff.am',
    'User-Agent':'Goolge Chrome',
    'Accept':'*/*',
    'Accespt-Encoding':'gzip,deflate,br',
    'Connection':'keep-alive'
}

request = requests.get('https://www.sports.ru/')

print(request.status_code)
sprotsru=BeautifulSoup(request.content,"html.parser")
result = sprotsru.findAll("a","h2 material-list__title-link")
for article in result:
    print(article)