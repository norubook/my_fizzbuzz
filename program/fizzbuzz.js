//本プログラムの動作を確認する場合fizzbuzz_js.htmlを開いてください．
//fizzbuzz_js.htmlと同じフォルダに本ファイルをおいてください．
//fizzbuzz_js.htmlを開いた後右クリックを押し検証をクリックしてください．

//To check how this program works, please open fizzbuzz_js.html.
//Please place this file in the same folder as fizzbuzz_js.html.
//After opening fizzbuzz_js.html, right click and click "Inspect".


const button = document.getElementById("JSbutton");

button.addEventListener('click',function(){

    for(var i=0;i<100;i++){
        if((i%15)==0){console.log("fizzbuzz");}
        else if((i%3)==0){console.log("fizz");}
        else if((i%5)==0){console.log("buzz");}
        else {console.log(i);}
    }

    console.log("button clicked");
});