var span = document.getElementById("data");
var span1 = document.getElementById("data1");
var span2 = document.getElementById("data2");
var now = new Date();
var year = now.getFullYear();//年
var month = now.getMonth() + 1;//月  (注意：月份+1)
var date = now.getDate() ;//日
var day = now.getDay();
var weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var week = weeks[day];//根据day值，获取星期数组中的星期数。
if (month < 10) {
        month = "0" + month;
    }
if (date < 10) {
        date = "0" + date;
    }
   
span.innerText = " " + week + "," + " " + date + "/" + month + "/" + year;
span1.innerText = " " + week + "," + " " + date + "/" + month + "/" + year;
span2.innerText = " " + week + "," + " " + date + "/" + month + "/" + year;

window.onscroll = function(){
    var t =document.documentElement.scrollTop||document.body.scrollTop;
    var world = document.getElementById('target');
    var worldRight = world.offsetTop;
    if( t >= worldRight){
        document.getElementById('no').classList.remove("yes");
    }if(t < worldRight){
        document.getElementById('no').classList.add("yes");
    }
}