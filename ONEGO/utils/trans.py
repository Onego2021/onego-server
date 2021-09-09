from hanspell import spell_checker
from hanspell.constants import CheckResult
from hanspell.response import Checked
import sys

with open('./utils/before_onego.txt', 'r', encoding='UTF-8') as f:
    lines = []
    for line in f:
        lines.append(line)
    
    with open('./utils/after_onego.txt', 'w', encoding='UTF-8') as ff:
        sent_line = spell_checker.check(line)
        checked_line = sent_line.checked
        original_line = sent_line.original
        error_num = sent_line.errors
        sent_line.words
        
        ff.write(checked_line)
        print('done')
        
    with open('./utils/corrected_words.txt', 'w', encoding='UTF-8') as ff:
        sent_line = spell_checker.check(line)
        checked_line = sent_line.checked
        original_line = sent_line.original
        error_num = sent_line.errors
        sent_line.words
        
        ff.write("교정이 된 단어 = 교정 종류(0-문제 없음, 1-맞춤법, 2-띄어쓰기, 3-표준어, 4-통계적 교정) :\n")
        for key, value in sent_line.words.items():
            ff.write(key)
            ff.write(" = ")
            ff.write(str(value))
            ff.write(" \n")

#print(result.as_dict())  # dict로 출력
