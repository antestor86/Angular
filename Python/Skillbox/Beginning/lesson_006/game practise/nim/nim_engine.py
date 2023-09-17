import random as rand

_holder = []

def put_stones():
    global _holder
    _holder = []
    for i in range(10):
        _holder.append(rand.randint(1,20))

def take_from_bunch(position,quantity):
    if 0 <= position <len(_holder):
        _holder[position] -= quantity

def get_bunches():
    return _holder

def is_gammeover():
    return sum(_holder) == 0


