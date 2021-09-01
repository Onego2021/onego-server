import re,ast

# 결과 파일로 출력하는 함수
def Outcome(lline, x, result) :
    with open('./resultt.txt', 'a', encoding='UTF-8') as ff:
        ff.write(lline+" ")
        ff.write(str(x+1))
        ff.write(result)

# 에러종류와 에러난 단어 분류해주는 함수
def Classification(lline) :
    
    # 맞춤법 교정 생겼을 때(error != 0)
    if lline[2] != 0:
        # 맨 마지막 요소 string -> tuple list -> dict
        all_numbers = [int(ch) for i in lline[3].split(',') for ch in i if ch.isdigit()]
        result = list(zip(all_numbers[::2], all_numbers[1::2]))
        error_case = dict(result)
        
        keyList = error_case.keys()
        for key in keyList :
            
        # 글자고치기 부호
            if(key==2) or (key==4) or (key==5) :
                Outcome(lline[1], error_case.get(key)," Fix_letter\n")
                
        # 띄어쓰기 or 붙여쓰기 부호
            if(key==3) :
                Outcome(lline[1], error_case.get(key)," ")
                
                cnt0 = 0
                cnt1 = 0
                for i in str(lline[0]) :
                    if i == ' ' :
                        cnt0 += 1
                for i in str(lline[1]) :
                    if i == ' ' :
                        cnt1 += 1
                        
                with open('./resultt.txt', 'a', encoding='UTF-8') as ff:
                    if cnt0 < cnt1 :
                        ff.write("Spacing_word\n")
                    elif cnt0 > cnt1 :
                        ff.write("Writing_together\n")
    
        
with open('./resultt.txt', 'a', encoding='UTF-8') as ff:
    ff.write("교정된 문장 + 교정된 단어가 몇 번째 단어인지 + 교정부호 종류\n\n")
    
with open('./example.txt', 'r', encoding='UTF-8') as f:
    lines = [] # 전체 문장
    lline = [] # 이중 리스트로 문장 구분
    
    for line in f:
        lines.append(line)

    # 이중 리스트로 문장 구분
    for i in range(0,len(lines)) :
        s = lines[i].split(":")
        exe_str = f"lline.append(s)"
        eval(exe_str)

    for i in range(0,len(lines)) :
        Classification(lline[i])