import $ from 'jquery';
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

//mobile menu
$(document).click(function () {
	$('.mobile-menu .menu-btn').click(function () {
		$('.mobile-menu ul').slideToggle();
	});
})

// $(document).click(function() {
// 	if ($('.datepicker').length) {
// 		$('.datepicker').datepicker();
// 	}
// })