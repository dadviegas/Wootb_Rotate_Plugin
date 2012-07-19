/*!
 * Examples at: http://www.weboutofthebox.com
 * version 1.00 (18-JUN-2012)
 * Requires jQuery v1.7.2 (tested in 1.7.2) or later
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Authors: David Viegas
 */

/**
 *  WootbRotate() takes a options argument specified in the code below in settings : $WootbCorner.menu(options);
 *
*/




(function($){ 
	$.fn.WootbRotate = function(options) {
		var settings = {
			val: "0",
			unit:"deg"
		};
		
		settings = $.extend(settings, options);
		var _degree = 'rotate({0}{1})'.format(settings.val,settings.unit);
		$(this).css({'-moz-transform':_degree,'-webkit-transform':_degree,'-o-transform':_degree,'-ms-transform':_degree});

	 };
 })(jQuery);

 