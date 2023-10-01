from random import randint
_mainnumber = set([])
string_number = ""





def createWhishnumber():
    global _mainnumber
    loopItem = 0
    while loopItem < 4:
        _mainnumber.add(randint(0,9))
        loopItem = loopItem + 1
    if len(_mainnumber) < 4 and len(_mainnumber):
        _mainnumber.clear()
        createWhishnumber()


def convertSetToInt():
    global string_number
    for item in _mainnumber:
        string_number += str(item)
    return string_number
    # print(string_number)

def guessWhishNumber():
    num = input("guess the number>>")
    if len(num) == 4 :
        print("OK ")
    else:
        print("please write the corret number!")

