$(document).ready(function(){
	/* инициализация функций */
	initSendForm();
	popUps();
	/* описание функций */
	function popUps(){
		$('[data-popup]').on('click',function(){
			var _popupUrl = $(this).data('popup');
			$('.popup_holder').removeClass('active').filter(_popupUrl).addClass('active');
			return false;
		});
		$('.popup_holder .bg,.popup_holder  .close_popup').on('click',function(){
			$('.popup_holder').removeClass('active');
			return false;
		});
	};


	function initSendForm() {
		$('#form').each(function() {
			var form = $(this),
				input = form.find('input');

			form.find('.username').blur(function() {
				var val = $(this).val();
				if((/^[-\._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/ig).test(val) && val.length<=30){
					$(this).removeClass('incorrect');
					$(this).addClass('correct');
				} else {
					$(this).addClass('incorrect');
					$(this).removeClass('correct');
				}
			});
			form.on('keyup keydown', '.username', function() {
				var val = $(this).val();
				if((/^[-\._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/ig).test(val) && val.length<=30){
					$(this).removeClass('incorrect');
					$(this).addClass('correct');
				} else {
					$(this).addClass('incorrect');
					$(this).removeClass('correct');
				}
			});
			form.find('.password').blur(function() {
				var val = $(this).val();
				if(val.length > 5 && val.length<=30){ 
					$(this).removeClass('incorrect');
					$(this).addClass('correct');
				} else {
					$(this).addClass('incorrect');
					$(this).removeClass('correct');
				}
			});
			form.on('keyup keydown', '.password', function() {
				var val = $(this).val();
				if(val.length > 5 && val.length<=30){ 
					$(this).removeClass('incorrect');
					$(this).addClass('correct');
				} else {
					$(this).addClass('incorrect');
					$(this).removeClass('correct');
				}
			});


			form.submit(function(e) {
				input.trigger('blur');
				if (form.find('.incorrect').length) {
					form.find('.incorrect:first input').focus();
					return false;
				} else {
					$('#call_back_pop').find('p').html(form.find('.username').val());
					$('.popup_btn').click();
					return false;
				}
			});
		});
	}
});

/* подключение плагинов */