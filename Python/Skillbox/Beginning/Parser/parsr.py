import requests
from bs4 import BeautifulSoup

request = requests.get('https://www.sports.ru')

print(request)
sprotsru=BeautifulSoup(request.content,"html.parser")
result = sprotsru.findAll("a")
for article in result:
    print(article.parent.text)