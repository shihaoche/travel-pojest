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
          '<li><input type="time" class="travel__mappoto--li"> <input type="text" class="travel__mappoto--li"><input type="text" class="travel__mappoto--li1"> <a href="" class="travel__li">刪除</a>'
        );
      }
      $(wrapper).on("click", ".travel__li", function (e) {
        e.preventDefault(); $(this).parent('li').remove(); x--;
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

//旅遊規劃日期顯示
function menubutton() {
  var T = document.getElementById("menuday").value;
  document.getElementById("menu").innerHTML = " 規劃日期：" + T;
}

//旅遊規劃清除
function dateclear(){
  document.getElementById("menu").innerHTML = "";
  document.getElementById("travel__mappoto--menu").innerHTML = "";
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





  






