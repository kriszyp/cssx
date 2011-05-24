/*
    cssx/shim/opacity
    (c) copyright 2010, unscriptable.com
    author: john

    LICENSE: see the LICENSE.txt file. If file is missing, this file is subject to the AFL 3.0
    license at the following url: http://www.opensource.org/licenses/afl-3.0.php.

    This cssx plugin fixes lack of box offset positioning in IE6.

*/
define(
	['cssx/sniff'],
	function (sniff) {
		return {
			onProperty: function (name, value) {
				// TODO: only do if IE
				return 'filter: alpha(opacity=' + (value * 100) + '); zoom: 1;';
			}
		};
	}
);

