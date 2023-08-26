# -*- coding: utf-8 -*-
from lesson_005.district.central_street.house1 import room1 as district_room1
from lesson_005.district.central_street.house2 import room2 as district_room2
from lesson_005.district.soviet_street.house1 import room1  as soviet_room1
from lesson_005.district.soviet_street.house1 import room2  as soviet_room2

# Составить список всех живущих на районе и Вывести на консоль через запятую
# Формат вывода: На районе живут ...
# подсказка: для вывода элементов списка через запятую можно использовать функцию строки .join()
# https://docs.python.org/3/library/stdtypes.html#str.join

people = []
people.append(district_room1.folks)
people.append(district_room2.folks)
people.append(soviet_room1.folks)
people.append(soviet_room2.folks)


folks = "На районе живут "


for item in people:
    print(item)
    folks += ','.join(item)
print(folks)







