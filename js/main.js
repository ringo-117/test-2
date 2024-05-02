// JavaScript Document

'use strict';

{
	const btn = document.querySelector('.btn');
	const container = document.querySelector('.container');

	btn.addEventListener('click', () => {
		btn.classList.toggle('active');
		container.classList.toggle('active');
	});
}


$(function () {
	// ハンバーガーメニューボタンがクリックされたときのイベントハンドラを設定
	$(".btn").click(function () {
	  // 現在のbodyタグのoverflowスタイルを確認
	  if ($("body").css("overflow") === "hidden") {
		// もしoverflowがhiddenなら、bodyのスタイルを元に戻す
		$("body").css({ height: "", overflow: "" });
	  } else {
		// そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
		$("body").css({ height: "100%", overflow: "hidden" });

	  }
	});
  });


  // メニューカラー変更
$(function () {
	$(window).on("scroll", function () {
	  const sliderHeight = $(".top").height();
	  if ($(window).scrollTop() > $('.news').offset().top &&　$(window).scrollTop() < $('.shopinfo').offset().top) {
		$(".btn").addClass("color");
	  } else {
		$(".btn").removeClass("color");
	  }
	});
  });


$(function () {
	$(window).on("scroll", function () {
	  const sliderHeight = $(".top").height();
	  if ($(window).scrollTop() > $('.news').offset().top &&　$(window).scrollTop() < $('.shopinfo').offset().top) {
		$(".footer").addClass("color");
	  } else {
		$(".footer").removeClass("color");
	  }
	});
  });


// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

	//ふわっと動くきっかけのクラス名と動きのクラス名の設定
	$('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
	　　var elemPos = $(this).offset().top-50; //要素より、50px上の
	　　var scroll = $(window).scrollTop();
	　　var windowHeight = $(window).height();
	　　if (scroll >= elemPos - windowHeight){
	　　$(this).addClass('fadeUp');
	　　// 画面内に入ったらfadeInというクラス名を追記
	　　}else{
	　　　$(this).removeClass('fadeUp');
	　　// 画面外に出たらfadeInというクラス名を外す
	　　}
	　　});
	//関数でまとめることでこの後に違う動きを追加することが出来ます
	$('.fadeDownTrigger').each(function(){ //fadeInDownTriggerというクラス名が
	　　var elemPos = $(this).offset().top-50; //要素より、50px上の
	　　var scroll = $(window).scrollTop();
	　　var windowHeight = $(window).height();
	　　if (scroll >= elemPos - windowHeight){
	　　$(this).addClass('fadeDown');
	　　// 画面内に入ったらfadeDownというクラス名を追記
	　　}else{
	　　　$(this).removeClass('fadeDown');
	　　// 画面外に出たらfadeDownというクラス名を外す
	　　}
	　　});

	}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

	// 画面をスクロールをしたら動かしたい場合の記述
	  $(window).scroll(function (){
		fadeAnime();/* アニメーション用の関数を呼ぶ*/
	  });// ここまで画面をスクロールをしたら動かしたい場合の記述


//トップのフェードイン

$(function() {
	setTimeout(function(){
		$('.logo_fadein figure').fadeIn(1000);
	},500);
	setTimeout(function(){
		$('.logo_fadein').fadeOut(1000);
	},2500);
});


//　メニュー内のリンクを押すとメニューページが消える

$('#nav_list a[href]').on('click', function(event) {
    $('.btn').trigger('click');
});



// ページトップ
$(window).on('load scroll', function(){
    if($(this).scrollTop() > 150) {
        $('.page-top').addClass('show');
    }else{
        $('.page-top').removeClass('show');
    }
});


//スクロール
$(window).on('load scroll', function(){
    if($(this).scrollTop() > 1) {
        $('.scroll').addClass('show');
    }else{
        $('.scroll').removeClass('show');
    }
});










