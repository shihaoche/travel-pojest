function moneyclick() {
    const website = [];
    obj = document.getElementById("travel__money--eat").getElementsByClassName("travel__money--inmoney");
  
    //input 存陣列
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].value.length > 0) {
        website.push(obj[i].value);
      }
     }; console.log(website);
    //陣列字串轉數字
    let web = website.map(function (x) {
      return parseInt(x, 10);
    });   console.log(web);
  
    //陣列轉數字後計算
    let eat = 0;
    for (let i = 0; i <= 5; i++) {
      eat += web[i];
    };   console.log(eat);
  
    //陣列轉數字後計算
    let drink = 0;
    for (let i = 6; i <= 11; i++) {
      drink += web[i];
    };  console.log(drink);

    let play = 0;
    for (let i = 12; i <= 16; i++) {
      play += web[i];
    };  console.log(play);

    //陣列轉數字後計算
    let inl = web[17];
    console.log(inl);
  
 
  

  
  //圖表
  $('#breakfast').each(function(){    //移除表生成區
    $(this).remove();
  });
  $('.travel__money--menuall').append(    //新增表生成區
    '<canvas id="breakfast" width="300" height="300"></canvas>'
  );

    const ctx = document.getElementById('breakfast');
    const breakfast = new Chart(ctx, {
      type: 'doughnut', //圖表類型
      data: {
        labels: ['吃', '喝', '玩', '住'], //標題
        datasets: [{
          label: '# of Votes',      //標籤
          data: [eat, drink, play, inl],  // 資料
          backgroundColor: [         // 背景色
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
            // 'rgba(153, 102, 255, 1)',
            // 'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2            // 外框寬度
        }]
      } ,
      options: {
        plugins: {
          title: {
              display: true,
          }
      },
      // 圖表外面x與Y軸刻度
      // scales: {
      //     x: {
      //         type: 'linear'
      //     },
      //     y: {
      //         type: 'linear'
      //     }
      // }
      
    }
    }) ;
  
  }


