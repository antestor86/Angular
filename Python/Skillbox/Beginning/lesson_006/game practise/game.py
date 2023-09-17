from nim.nim_engine import get_bunches,is_gammeover,put_stones,take_from_bunch

put_stones()
user_number = 1

while True:
    print('Current position')
    print(get_bunches())
    print('Turn User {}'.format(user_number))
    pos = input('Where you want to get?')
    qua = input('How many you want to take?')
    take_from_bunch(position=int(pos),quantity=int(qua))
    if is_gammeover():
        break
    user_number = 2 if user_number == 1 else 1
print("The winner is {}".format(user_number))
