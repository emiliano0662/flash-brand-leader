$(document).ready(function() {

	$.validate({
		modules: 'security'
	});

	$('#modal-video').on('hidden.bs.modal', function (e) {

		var url = $('#modal-video .modal-body .embed-responsive-item').attr('src');

		$('#modal-video .modal-body .embed-responsive-item').attr('src', url);

	});

	$("#form-pre-register").submit(function (event) {
		event.preventDefault();

		$.ajax({
			cache: false,
			type: $(this).attr("method"),
			url: $(this).attr("action"),
			data: $(this).serialize(),
			success: function (data) {
	
				var obj = jQuery.parseJSON(data);
				
				grecaptcha.reset(opt_grecaptcha);

				if (obj.status) {
					
					$("#form-pre-register")[0].reset();
					
					swal({
						title: obj.message,
						type: 'success',
						timer: 3000,
						showConfirmButton: false
					});

				} else {

					swal({
						title: obj.message,
						type: 'error',
						timer: 3000,
						showConfirmButton: false
					});
				}
			}
		});

	});

	$("[data-dinaanim]").each(function () {

		var $this = $(this);

		$this.addClass("dinaAnim-invisible");

		if ($(window).width() > 767) {

			$this.appear(function () {

				var delay = ($this.data("dinadelay") ? $this.data("dinadelay") : 1);

				if (delay > 1) $this.css("animation-delay", delay + "ms");

				$this.addClass("dinaAnim-animated");
				$this.addClass('dinaAnim-' + $this.data("dinaanim"));

				setTimeout(function () {

					$this.addClass("dinaAnim-visible");

				}, delay);

			}, { accX: 0, accY: -150 });

		} else {

			$this.animate({ opacity: 1 }, 300, 'easeInOutQuad', function () { });
		}
	});

});