# -*- coding: utf-8 -*-

# (цикл while)

# Ежемесячная стипендия студента составляет educational_grant руб., а расходы на проживание превышают стипендию
# и составляют expenses руб. в месяц. Рост цен ежемесячно увеличивает расходы на 3%, кроме первого месяца
# Составьте программу расчета суммы денег, которую необходимо единовременно попросить у родителей,
# чтобы можно было прожить учебный год (10 месяцев), используя только эти деньги и стипендию.
# Формат вывода:
#   Студенту надо попросить ХХХ.ХХ рублей

educational_grant, expenses = 10000, 12000

year = 10
while year >= 1:
    if year == 10:
        year_grant = educational_grant + expenses
        print(f'Студенту надо попросить {year_grant} рублей')
        year = year - 1
    else:
        year_grant += educational_grant + expenses*3/100
        print(f'Студенту надо попросить {year_grant} рублей')
        year = year - 1



