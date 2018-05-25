$(document).ready(function() {

	$.datepicker.regional['es'] = {
		closeText: 'Cerrar',
		prevText: '< Ant',
		nextText: 'Sig >',
		currentText: 'Hoy',
		monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
		dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
		dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};

	$.datepicker.setDefaults($.datepicker.regional['es']);

	$( "#datepicker" ).datepicker();

	$("#owl-carousel-home").owlCarousel({
	    loop: true,
	    margin: 10,
	    items: 1
	});

	var owl_logo = $("#owl-carousel-logo").owlCarousel({
	    loop: true,
	    margin: 10,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});

	$(".btn-carousel-logo-left").on('click', function(event) {
		event.preventDefault();

		owl_logo.trigger('prev.owl.carousel');
	});

	$(".btn-carousel-logo-right").on('click', function(event) {
		event.preventDefault();

		owl_logo.trigger('next.owl.carousel');
	});

});