import requests
from bs4 import BeautifulSoup

headers = {
    'Host' : 'staff.am',
    'User-Agent':'Goolge Chrome',
    'Accept':'*/*',
    'Accespt-Encoding':'gzip,deflate,br',
    'Connection':'keep-alive'
}

request = requests.get('https://www.sports.ru/barcelona/calendar/2023-2024/la-liga/')

print(request.status_code)
sprotsru=BeautifulSoup(request.content,"html.parser")
result = sprotsru.findAll("tr")
for article in result:
    print(article)