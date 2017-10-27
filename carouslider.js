;( function ( $ ) {

	'use strict';


	var timer = null,
		attribute = {
			location: 'left',
			loop: 3000
		},
		$slider;


	var init = function () {
		var $ul = $slider.children( 'ul' ),
			$li = $ul.children( 'li' );

		$slider.css( {
			border: '1px solid red',
			overflow: 'hidden'
		} );

		$ul.css( {

			width: function () {
				var container_width = 0;

				$li.each( function () {
					container_width += $( this ).width();
				} );

				return container_width;
			},
			padding: 0,
			top: 0,
			left: 0,
			listStyle: 'none'

		} );

		$li.css( {
			float: 'left'
		} );

	};

	/**
	 * Run slide.
	 */
	var run = function () {

		var $ul = $slider.children( 'ul' ),
			li_width = $ul.children( 'li' ).width(),
			li_left = li_width * -1;

		// Ready to the first slide
		$ul.css( 'margin-left', li_left );
		$ul.children( 'li' ).filter( ':first' ).before( $ul.children( 'li' ).filter( ':last' ) );

		timer = setInterval( function () {

			if ( attribute.location === 'left' ) {
				$.carousliderLeft();
			}
			else if ( attribute.location === 'right' ) {
				$.carousliderRight();
			}

		}, attribute.loop );

	};

	/**
	 * Stop slide.
	 */
	var stop = function () {

		clearInterval( timer );

		timer = null;

	};

	/**
	 * Start slide.
	 */
	var start = function () {

		timer = setInterval( function () {

			$.carousliderLeft();

		}, attribute.loop );

	};


	/**
	 * jQuery plugins
	 */

	$.fn.carouslider = function ( attr ) {

		$slider = this;
		attribute = attr || attribute;

		init();
		run();

	};

	$.carousliderStart = function () {
		start();
	};

	$.carousliderStop = function () {
		stop();
	};

	$.carousliderLeft = function () {
		var $ul = $slider.children( 'ul' ),
			li_width = $ul.children( 'li' ).width(),
			li_left = li_width * -1;

		var left_indent = parseInt( $ul.css( 'margin-left' ) ) - li_width;

		$ul.animate(
			{
				'margin-left': left_indent
			},
			500,
			function () {
				// Ready to the next slide
				$ul.children( 'li' ).filter( ':last' ).after( $ul.children( 'li' ).filter( ':first' ) );
				$ul.css( 'margin-left', li_left );
			}
		);
	};

	$.carousliderRight = function () {
		var $ul = $slider.children( 'ul' ),
			li_width = $ul.children( 'li' ).width(),
			li_left = li_width * -1;

		var left_indent = parseInt( $ul.css( 'margin-left' ) ) + li_width;

		$ul.animate(
			{
				'margin-left': left_indent
			},
			500,
			function () {
				// Ready to the next slide
				$ul.children( 'li' ).filter( ':first' ).before( $ul.children( 'li' ).filter( ':last' ) );
				$ul.css( 'margin-left', li_left );
			}
		);
	};

} )( jQuery );
