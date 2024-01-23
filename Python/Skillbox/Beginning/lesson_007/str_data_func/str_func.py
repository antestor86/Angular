def checkLength(str):
    return len(str)

def check_count_of_character(text):
    # function count the number of characters (character frequency) in a string.
    #Sample String : google.com'
    #Expected Result : {'g': 2, 'o': 3, 'l': 1, 'e': 1, '.': 1, 'c': 1, 'm': 1}
    text_dict = {}
    for item in text:
        if item in text_dict:
            text_dict[item] += 1
        else:
            text_dict[item] = 1
    return text_dict

def returnLastDigits(str):
    #function get a string made of the first 2 and last 2 characters of a given string. If the string
    # length is less than 2, return the empty string instead.
    # #Sample String : 'w3resource'
    #Expected Result : 'w3ce'
    strRes = None
    if len(str) <= 2:
        strRes = "The string is smmaler than 2"
        return strRes
    else:
        strRes = str[:2]  + str[-2:]
        return strRes

def GetFirstDigit(str):
    #rogram to get a string from a given string where all occurrences
    # of its first char have been changed to '$', except the first char itself.
    #Sample String : 'restart'
    #Expected Result : 'resta$t'
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

def swapCharacters(firststr,secondstr):
    #Example given xyz and abc result must be "abz xyz"
    lastChar_first = firststr[-1:]
    lastChar_second = secondstr[-1:]
    newStr = firststr[0:(len(firststr)-1)] +  lastChar_second + " " +  secondstr[0:(len(secondstr)-1)] + lastChar_first
    return newStr

