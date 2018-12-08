(function(){
  'use strict';

  var btn = document.getElementById('btn');
  var txt = document.getElementById('txt');
  var opps = document.getElementById('opps');

  var item1 = ['カレーライス', '牛丼', 'おにぎり', 'ラーメン', '海鮮丼', 'ぎょうざ', 'シチュー', '焼肉', '日の丸弁当', '天丼'];
  var item2 = ['傘', 'ポケットティッシュ', 'ハンカチ', '財布', '定期入れ', '鍵', 'スマホ', '化粧ポーチ', 'ビニール袋', '手鏡'];
  var item3 = ['緑茶', '烏龍茶', 'コーラ', 'ほうじ茶', 'ミネラルウォーター', 'コーヒー', '紅茶', 'オレンジジュース', '野菜ジュース', 'エナジードリンク'];


  btn.addEventListener('click',function() {
    var n1 = Math.random();
    if (n1 < 0.05) {
      this.textContent = '大吉';
      opps.textContent = '';
    } else if (n1 < 0.4) {
      this.textContent = '中吉';
      opps.textContent = '';
    } else if (n1 < 0.9) {
      this.textContent = '小吉';
      opps.textContent = '';
    } else {
      this.textContent = '凶';
      opps.textContent = 'おおっと！';
    }
    var n2 = Math.floor(Math.random() * item1.length);
    var n3 = Math.floor(Math.random() * item2.length);
    var n4 = Math.floor(Math.random() * item3.length);
    txt.textContent = item1[n2] + '、' + item2[n3] + '、' + item3[n4];
  });

  btn.addEventListener('mousedown',function() {//マウスが押された時の処理
    this.className = 'pushed';//クラスを作る
  });
  btn.addEventListener('mouseup',function() {//マウスが離された時の処理
    this.className = '';
  });
})();
