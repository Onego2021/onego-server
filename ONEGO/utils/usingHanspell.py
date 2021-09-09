from hanspell import spell_checker
import sys

def check():
    f = open('./utils/before_onego.txt','r', encoding='UTF-8')
    sent = f.read()
    f.close
    # sent = '원고지 인식이돼어 잇는파일입니다.'
    spelled_sent = spell_checker.check(sent)
    checked_sent = spelled_sent.checked
    
    # print(spelled_sent)
    print(checked_sent)
check()