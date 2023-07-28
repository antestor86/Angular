#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Создайте списки:

# моя семья (минимум 3 элемента, есть еще дедушки и бабушки, если что)
my_family = []


# список списков приблизителного роста членов вашей семьи
my_family_height = [
    # ['имя', рост],
    [
        'Papa','158'
    ],
    [
        'Mama','160'
    ],
    [
        'Middle Sister','128'
    ],
    [
        'Litle Sister','60'
    ],
    [
        'Grandpha','160'
    ],
    [
        'Grandma','148'
    ]
]

# Выведите на консоль рост отца в формате
#   Рост отца - ХХ см
print('Рост Отца ' + my_family_height[0][1]+ 'см')
print(len(my_family_height))


# Выведите на консоль общий рост вашей семьи как сумму ростов всех членов
#   Общий рост моей семьи - ХХ см
my_famiy_age = (int(my_family_height[0][1]) +
                                int(my_family_height[1][1]) +
                                int(my_family_height[2][1]) +
                                int(my_family_height[3][1]) +
                                int(my_family_height[4][1]) +
                                int(my_family_height[5][1]) )
print('Общий рост моей семьи'+ ' '+ str(my_famiy_age)+'см')
