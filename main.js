var step = 0;   // 전역변수로 더보기 1,2를 호출할지 접기를 호출할지 판단
function Show(){    //세계 코로나 현황표의 더보기 기능 구현
    switch(step){
        case 0: Show1();
            break;
        case 1: Show2();
            break;
        case 2: Hide();
            break;
    }
}
function Show1() {  //step2클래스를 받아와서 tr이 보이도록 스타일 변경
        var step2 = document.getElementsByClassName("step2");
        for (var i = 0; i < 80; i++) {
            step2[i].style.visibility = "visible";
        }
        this.step=1;
}
function Show2(){
    var step3=document.getElementsByClassName("step3");
    for(var j =0;j<72;j++){
        step3[j].style.visibility="visible";
    }
    this.step=2;
    var button1=document.getElementById("showbutton");
    var button2=document.getElementById("hidebutton");
    button1.style.display="none"
    button2.style.display="inline"
}
function Hide(){    //밑에서부터 tr을 안보이도록 스타일 변경
    var step3=document.getElementsByClassName("step3");
    for(var j =71;j>=0;j--){
        step3[j].style.visibility="collapse";
    }
    var step2=document.getElementsByClassName("step2");
    for (var i = 79; i >= 0; i--) {
        step2[i].style.visibility = "collapse";
    }
    this.step=0
    var button1=document.getElementById("showbutton");
    var button2=document.getElementById("hidebutton");
    button1.style.display="inline"
    button2.style.display="none"
}
function pfizer(){  //데이터를 출력할 vacData클래스를 불러와서 화이자에 대한 정보를 innerHTML를 이용하여 넣어줍니다.
    var result=document.getElementsByClassName("vacData");    
    result[0].innerHTML="미국/독일"
    result[1].innerHTML="6,600만회 분"
    result[2].innerHTML="2회"
    result[3].innerHTML="21일"
    result[4].innerHTML="-75℃±15℃(6개월)"
    result[5].innerHTML="2~8℃(5일)"
    


}
function Moderna(){
    var result=document.getElementsByClassName("vacData");
    result[0].innerHTML="미국"
    result[1].innerHTML="4,000만회 분"
    result[2].innerHTML="2회"
    result[3].innerHTML="28일"
    result[4].innerHTML="-20℃(6개월)"
    result[5].innerHTML="2~8℃(30일)"
}
function AstraZeneca(){
    var result=document.getElementsByClassName("vacData");
    result[0].innerHTML="영국"
    result[1].innerHTML="2,000만회 분"
    result[2].innerHTML="2회"
    result[3].innerHTML="8~12주"
    result[4].innerHTML="2~8℃(6개월)"
    result[5].innerHTML="2~8℃(6개월)"
}
function Janssen(){
    var result=document.getElementsByClassName("vacData");
    result[0].innerHTML="미국/독일"
    result[1].innerHTML="701만회 분"
    result[2].innerHTML="1회"
    result[3].innerHTML="-"
    result[4].innerHTML="-20℃(24개월)"
    result[5].innerHTML="2~8℃(4,5개월)"
}