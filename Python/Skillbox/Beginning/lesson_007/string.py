from str_data_func import str_func as data
str_len = input("Write text:>> ")
str_data = data.checkLength(str_len)
new_dict = data.check_count_of_character(str_len)
print(new_dict)




