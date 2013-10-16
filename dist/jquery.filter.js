/*!
* jQuery Filter Plugin - v1.0.1 - 2013-10-16
* http://projects.e-freak.org/jQuery-Filter-Plugin

* Copyright (c) 2013 Max Joehnk;
* Licensed under the MIT License.
*/
$(function() {
	$('body').on('change', '.filter', function() {
		var originalFilter = $(this);
		$(originalFilter.attr('data-filter-container')).each(function(i, container) {
			$(container).find('.filterable').each(function(index, filterable) {
				var filters = $('body').find(".filter[data-filter-container='" + originalFilter.attr('data-filter-container') + "']");
				var hide = false;
				$.each(filters, function(i, element) {
					var filter = $(element);
					var filterVal = $(filterable).attr('data-' + $(filter).attr('data-filter')).toLowerCase();
					if (filter.is('input')) {
						if (filter.is('input[type=checkbox]')) {
							if (filterVal !== filter.is(':checked').toString()) {
								hide = true;
							}
						}else {
							if (filterVal.indexOf(filter.val().toLowerCase()) === -1 && filter.val() !== '') {
								hide = true;
							}
						}
					}else if (filter.is('select')) {
						if (filter.children(':selected').is('option[data-filter-ignore]')) {
							return;
						}
						if (filter.children(':selected').is('option[data-filter-value]')) {
							if (filterVal !== filter.children(':selected').attr('data-filter-value').toLowerCase()) {
								hide = true;
							}
						}else {
							if (filterVal !== filter.children(':selected').html().toLowerCase()) {
								hide = true;
							}
						}
					}
				});
				if (hide) {
					$(filterable).fadeOut();
				}else {
					$(filterable).fadeIn();
				}
			});
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
});