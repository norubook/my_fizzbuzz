

##Pythonでのfizzbuzzです
##if文の中身はそれぞれ"0と等しいか","0かそれ以外か判定して0",
##  "0かそれ以外かを判定した後0であった場合次の処理を行う"処理です

##This is fizzbuzz written in Python
##"if" in this program means "Is it equal to 0?",
#  "Check if it is 0 or not and then it equal to 0 go next process",
#  and "After checking if it is 0 or not. 
# If it is 0, do the next process".

for i in range(1,100):
    if((i%15)==0):
        print("fizzbuzz")
    elif((i%3)==False):
        print("fizz")
    elif not((i%5)):
        print("buzz")
    else:
        print(i)