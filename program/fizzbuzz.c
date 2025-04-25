/*C言語でのfizzbuzzです
本プログラムをコンパイルしたものがfizzbuzz_c.exeです*/

/*This program is fizzbuzz written in "C".
The file "fizzbuzz_c.exe was converted by this program."*/

//ファイルの入出力には下記#include<stdio.h>が必要です．
//Function that file importing and outputting needed "#include<stdio.h>" 
#include<stdio.h>

int main(void){
    int i;
    for(i=1;i<100;i++){
        if((i%15)==0) printf("fizzbuzz\n");
        else if((i%3)==0) printf("fizz\n");
        else if((i%5)==0) printf("buzz\n");
        else printf("%d\n",i);
    }
    return 0;
}