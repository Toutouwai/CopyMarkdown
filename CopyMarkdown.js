(function($) {

	var t;
	function copyToClipboard(string) {
		// Copy to clipboard
		var $temp = $('<input type="text">').val(string);
		$('body').append($temp);
		$temp.select();
		document.execCommand('copy');
		$temp.remove();

		// Show notice
		clearTimeout(t);
		var $notice = $('#cm-notice');
		var $copied = $('#cm-copied');
		$copied.text(string);
		$notice.fadeIn(300);
		t = setTimeout(function(){
			$notice.fadeOut(300);
		}, 3000);
	}

	$(document).ready(function() {

		var $cm_icon = $('#cm-icon');

		// Hover image
		$(document).on({
			mouseenter: function () {
				$(this).find('.gridImage__overflow').append($cm_icon);
				$cm_icon.show();
			},
			mouseleave: function () {
				$cm_icon.hide();
			}
		}, '.gridImage');

		// Hover file
		$(document).on({
			mouseenter: function () {
				$(this).find('.InputfieldFileStats').after($cm_icon);
				$cm_icon.show();
			},
			mouseleave: function () {
				$cm_icon.hide();
			}
		}, '.InputfieldFileItem');

		// Hover variation
		$(document).on({
			mouseenter: function () {
				$(this).find('.preview img').after($cm_icon);
				$cm_icon.show();
			},
			mouseleave: function () {
				$cm_icon.hide();
			}
		}, '#ImageVariations tr');

		// Click icon
		$cm_icon.click(function(event) {
			var $description;
			var string;
			// Determine item and item type
			var $item = $(this).closest('.gridImage');
			$item.data('type', 'image');
			if(!$item.length) {
				$item = $(this).closest('.InputfieldFileItem');
				$item.data('type', 'file');
			}
			if(!$item.length) {
				$item = $(this).closest('.preview');
				$item.data('type', 'variation');
			}
			switch($item.data('type')) {
				case 'image':
					var $thumb = $item.find('img').first();
					$description = $item.find('.InputfieldFileDescription').children('input');
					var alt = $description.length ? $description.val() : '';
					string = '![' + alt + '](' + $thumb.attr('data-original').split('?')[0] + ')';

					break;
				case 'file':
					var $link = $item.find('a.InputfieldFileName');
					$description = $item.find('.InputfieldFileDescription').children('input');
					var link_text = $link.text();
					if($description.length && $description.val()) link_text = $description.val();
					string = '[' + link_text + '](' + $link.attr('href') + ')';
					break;
				case 'variation':
					event.preventDefault();
					event.stopPropagation();
					string = '![' + $('#cm-image-description').val() + '](' + $item.attr('href').split('?')[0] + ')';
					break;
			}
			copyToClipboard(string);
		});

	});

}(jQuery));
