from nim.nim_engine import get_bunches,is_gammeover,put_stones,take_from_bunch

put_stones()
while True:
    print('Current position')
    print(get_bunches())
    pos = input('Where you want to get?')
    qua = input('How many you want to take?')
    take_from_bunch(position=int(pos-1),quantity=int(qua))
    if is_gammeover():
        break

