import os
import shutil
def set_upper(value):
    string = str(value)
    return string[0].upper() + string[1:]

"""MAKE FOLDER NAME WITH UPPER VALUES"""
BRANCH_NAME = input('Նշեք մասնաճյուղի անվանումը Լատինատառերով՝ օրինակ Sayat Nova :')
FOLDER_NAME = set_upper(BRANCH_NAME)
DIRECTORIES = os.listdir(r'\\nas1001\\ForTechnicalSupport\\9_QMS_CASHIN_INFOTOUCH\\QMS\\Branches')

if FOLDER_NAME in DIRECTORIES:
    print(FOLDER_NAME)
    MAKE_DIR = os.mkdir(f'C:\\{FOLDER_NAME}')

SOURCE_PATH = f"C:\Branches\{FOLDER_NAME}"
d=r'\\nas1001\\ForTechnicalSupport\\9_QMS_CASHIN_INFOTOUCH\\QMS\\Branches\\{}'.format(FOLDER_NAME)
DESTINATION_PATH =os.chdir (f'C:\{FOLDER_NAME}')

if os.path.exists(f'C:\{FOLDER_NAME}'):
   MAIN_DIR = shutil.copytree(d,str(DESTINATION_PATH))

   
   
exin=input('for exit press e')
if exin == 'e':
   exit()

   






















