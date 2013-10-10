(function($) {
	$('body').on('change', '.filter', function() {
		var filter = $(this);
		$(filter.attr('data-filter-container')).children('.filterable').each(function(index, element) {
			var filterVal = $(element).attr('data-' + filter.attr('data-filter')).toLowerCase();
			if (filter.is('input')) {
				if (filterVal.indexOf(filter.val().toLowerCase()) === -1 && filter.val() !== '') {
					$(element).fadeOut();
				}else {
					$(element).fadeIn();
				}
			}else if (filter.is('select')) {
				if (filter.children(':selected').is('option[data-filter-ignore]')) {
					$(element).fadeIn();
					return;
				}
				if (filter.children(':selected').is('option[data-filter-value]')) {
					if (filterVal !== filter.children(':selected').attr('data-filter-value').toLowerCase()) {
						$(element).fadeOut();
					}else {
						$(element).fadeIn();
					}
				}else {
					if (filterVal !== filter.children(':selected').html().toLowerCase()) {
						$(element).fadeOut();
					}else {
						$(element).fadeIn();
					}
				}
			}
		});
	});
	
	$('body').on('click', '.reset-filter', function() {
		$('.filter').each(function(index, element) {
			if ($(element).is('input')) {
				$(element).val('');
			}else if ($(element).is('select')) {
				$(element).prop('selectedIndex', 0);
			}
		});
		$('.filterable').fadeIn();
	});
}(jQuery));
