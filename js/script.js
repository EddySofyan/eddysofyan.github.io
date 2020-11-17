//  event pada saat link di klik
$('.page-scroll').on('click', function(e)
{

	//ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);

	//pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top -50
	},500 ,'swing');
	

	// 500 itu waktu animasinya 500milisecond
	//  swing atau linear itu untuk parameter tipe gaya animasi
	e.preventDefault();

	// e.preventDefault Belum ngerti
});

// about
$(window).on('load', function(){
	$('.pkiri').addClass('pMuncul');
	$('.pkanan').addClass('pMuncul');
});


// paralax
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	//jumbotron 
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+wScroll/4+'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+wScroll/2+'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+wScroll/1.2+'%)'
	});

	// portfolio
	if(wScroll > $('.portfolio').offset().top -200) {
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				console.log('ok');
				$('.portfolio .thumbnail').eq(i).addClass('muncul');

			}, 300 * (i+1));
		});
			}


});