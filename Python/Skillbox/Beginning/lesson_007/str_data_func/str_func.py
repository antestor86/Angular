def checkLength(str):
    return len(str)

def check_count_of_character(text):
    text_dict = {}
    for item in text:
        if item in text_dict:
            text_dict[item] += 1
        else:
            text_dict[item] = 1
    return text_dict

def returnLastDigits(str):
    strRes = None
    if len(str) <= 2:
        strRes = "The string is smmaler than 2"
        return strRes
    else:
        strRes = str[:2]  + str[-2:]
        return strRes

def GetFirstDigit(str):
    firstDigit = str[0]
    editText = []
    finalText = ""
    for item in str:
        if item == firstDigit or item == firstDigit.lower():
            editText.append('$')
        else:
            editText.append(item)
    for digit in editText:
        finalText += digit
    return finalText
