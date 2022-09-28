$(function () {

  // 旅遊規劃
  $(function () {
    var max_fields = 20;
    var wrapper = $(".travel__mappoto--ul")
    var x = 1;
    $("#add").click(function (e) {
      e.preventDefault();
      if (x < max_fields) {
        x++;
        $(wrapper).append(
          '<li>時間：<input type="time" class="travel__mappoto--li travel__mappoto--time">地點名稱：<input type="text" class="travel__mappoto--li travel__mappoto--name">地址：<input type="text" class="travel__mappoto--li1 travel__mappoto--address"> <a href="" class="travel__li">刪除</a>'
        );
      }
      $(wrapper).on("click", ".travel__li", function (e) {
        e.preventDefault();
        $(this).parent('li').remove(); x--;
      })
    })

  });


  //下拉選單選擇後下面顯示別的選項
  //全部選擇隱藏
  //旅遊備忘
  $('ul[id^="travel__menu--"]').hide();
  $('#travel').change(function () {
    let sltValue = $(this).val();
    console.log(sltValue);

    $('ul[id^="travel__menu--"]').hide();
    //指定選擇顯示
    $(sltValue).show();
  });

});

//旅遊規劃送出
function clearbutton() {
  var data = document.getElementById("menuday").value;
  document.getElementById("travel__mappoto--menu-div").innerHTML = "規劃日期：" + data;
  document.getElementById("travel__mappoto--menu-span-time").innerHTML = "時間：";
  document.getElementById("travel__mappoto--menu-span-name").innerHTML = "地點名稱：";
  document.getElementById("travel__mappoto--menu-span-address").innerHTML = "地址：";
  //時間設定
  const time = [];
  timeobj = document.getElementsByClassName("travel__mappoto--time");
  //input 存陣列
  for (var i = 0; i < timeobj.length; i++) {
    if (timeobj[i].value.length > 0) {
      time.push(timeobj[i].value);
    };
  }; //console.log(time);
  //陣列一個一個新增顯示 
  var timestr = ''; //給一個空值位置
  for(var i=0;i<time.length;i++){
    var content = '<span style=margin-top:10px;>'+ time[i] +'</span>';
    timestr += content; //innerHTML特性會每跑一次會清空一次，故要空值位置去存
  };
  document.getElementById("travel__mappoto--menu-time").innerHTML  = timestr;



  //地點名稱設定
  const addressname = [];
  addressnameobj = document.getElementsByClassName("travel__mappoto--name");
  //input 存陣列
  for (var i = 0; i < addressnameobj.length; i++) {
    if (addressnameobj[i].value.length > 0) {
      addressname.push(addressnameobj[i].value);
    }
  };
  //陣列一個一個新增顯示 
  var addressnamestr = ''; //給一個空值位置
  for(var i=0;i<addressname.length;i++){
    var content = '<span style=margin-top:10px;>'+ addressname[i] +'</span>';
    addressnamestr += content; //innerHTML特性會每跑一次會清空一次，故要空值位置去存
  };
  document.getElementById("travel__mappoto--menu-name").innerHTML = addressnamestr;



  //地點地址
  const address = [];
  addressobj = document.getElementsByClassName("travel__mappoto--address");
  //input 存陣列
  for (var i = 0; i < addressobj.length; i++) {
    if (addressobj[i].value.length > 0) {
      address.push(addressobj[i].value);
    }
  }; 
  //陣列一個一個新增顯示 
  var addressstr = ''; //給一個空值位置
  for(var i=0;i<address.length;i++){
    var content = '<span style=margin-top:10px;>'+ address[i] +'</span>';
    addressstr += content; //innerHTML特性會每跑一次會清空一次，故要空值位置去存
  };
  document.getElementById("travel__mappoto--menu-address").innerHTML = addressstr;
  
}

function menuclear(){
  document.getElementById("travel__mappoto--menu").innerHTML = "";
  document.getElementById("menu").innerHTML = "";
  document.getElementById("travel__mappoto--menu-div").innerHTML = "";
  document.getElementById("travel__mappoto--menu-span-time").innerHTML = "";
  document.getElementById("travel__mappoto--menu-span-name").innerHTML = "";
  document.getElementById("travel__mappoto--menu-span-address").innerHTML = "";
  document.getElementById("travel__mappoto--menu-time").innerHTML  = "";
  document.getElementById("travel__mappoto--menu-name").innerHTML = "";
  document.getElementById("travel__mappoto--menu-address").innerHTML = "";
}

//旅遊規劃日期顯示
function menubutton() {
  var T = document.getElementById("menuday").value;
  document.getElementById("menu").innerHTML = " 規劃日期：" + T;
}





//旅遊預算
function myFunction() {
  var x = document.getElementById("myDate").value;
  document.getElementById("demo").innerHTML = x + " 旅遊金額：";
  document.getElementById("demo2").innerHTML = x + " 金額總表：";
  $(".travel__money--ul").removeClass("menu-none");
  $(".travel__money--menuall").removeClass("menu-none");
  $(".travel__money--ton").removeClass("menu-none");
}












