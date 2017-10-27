;( function ( $ ) {

	'use strict';


	// Global variables
	var timer = null,
		index = 0,
		$items,
		attr = {
			location: 'left',
			loop: 1000
		};


	/**
	 * Run slide.
	 */
	var run = function () {

		var increase;

		if ( attr.location === 'right' ) increase = -1;
		else if ( attr.location === 'left' ) increase = 1;
		else return;

		var container_width = $items.parent().width(),
			item_max = $items.size() - 1,
			is_left = increase > 0;

		timer = setInterval( function () {
			var next_index = index + increase;

			console.log( is_left );

			if ( is_left ) {
				if ( next_index > item_max ) next_index = 0;
			}
			else  {
				if ( next_index < 0 ) next_index = item_max;
			}

			console.log( next_index, index );

			var $ItemsMove = $items.filter( ':eq(' + next_index + '), :eq(' + index + ')' ),
					$nextItem = $items.eq( next_index );

			$nextItem.css( 'left', container_width * increase );

			$ItemsMove.animate( {
				left: is_left ? '-=' + container_width + 'px' : '+=' + container_width + 'px'
			}, 1000 );

			index += increase;
			if ( is_left ) {
				if ( index > item_max ) index = 0;
			}
			else {
				if ( index < 0 ) index = item_max;
			}

		}, attr.loop );

	};

	/**
	 * Stop slide.
	 */
	var stop = function () {
		clearInterval( timer );
		timer = null;
	};

	/**
	 * Init slide style.
	 */
	var init = function ( $this ) {
		var $items = $this.children( 'li' );

		$this.css( {
			padding: 0,
			position: 'relative',
			listStyle: 'none',
			// overflow: 'hidden'
		} );

		$items.css( {
			top: 0,
			left: 0,
			position: 'absolute'
		} );

		$items.each( function () {
			$( this ).css( 'left', $( this ).width() );
		} );

		$items.eq( 0 ).css( 'left', 0 );
	};


	/**
	 * jQuery plugins
	 */

	$.fn.carouslider = function ( attribute ) {

		attr = typeof attribute === 'undefined' ? attr : attribute;
		$items = this.children( 'li' );

		init( this );

		run();
	};


	$.carousliderStop = function () {
		stop();
	};


	$.carousliderLeft = function () {
		attr.location = 'left';
		stop();
		run();
	};

	$.carousliderRight = function () {
		attr.location = 'right';
		stop();
		run();
	};

} )( jQuery );
