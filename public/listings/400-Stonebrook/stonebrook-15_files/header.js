/*jshint noarg:true, noempty:true, bitwise:true, undef:true, curly:true, browser:true, jquery:true, indent:4, maxerr:500, white:false */

/*
 * jQuery Superfish Menu Plugin - v1.7.10
 * Copyright (c) 2018 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

; (function ($, w)
{
	"use strict";

	var methods = (function ()
	{
		// private properties and methods go here
		var c = {
			bcClass: 'sf-breadcrumb',
			menuClass: 'sf-js-enabled',
			anchorClass: 'sf-with-ul',
			menuArrowClass: 'sf-arrows'
		},
			ios = (function ()
			{
				var ios = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
				if (ios)
				{
					// tap anywhere on iOS to unfocus a submenu
					$('html').css('cursor', 'pointer').on('click', $.noop);
				}
				return ios;
			})(),
			wp7 = (function ()
			{
				var style = document.documentElement.style;
				return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
			})(),
			unprefixedPointerEvents = (function ()
			{
				return (!!w.PointerEvent);
			})(),
			toggleMenuClasses = function ($menu, o, add)
			{
				var classes = c.menuClass,
					method;
				if (o.cssArrows)
				{
					classes += ' ' + c.menuArrowClass;
				}
				method = (add) ? 'addClass' : 'removeClass';
				$menu[method](classes);
			},
			setPathToCurrent = function ($menu, o)
			{
				return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
					.addClass(o.hoverClass + ' ' + c.bcClass)
					.filter(function ()
					{
						return ($(this).children(o.popUpSelector).hide().show().length);
					}).removeClass(o.pathClass);
			},
			toggleAnchorClass = function ($li, add)
			{
				var method = (add) ? 'addClass' : 'removeClass';
				$li.children('a')[method](c.anchorClass);
			},
			toggleTouchAction = function ($menu)
			{
				var msTouchAction = $menu.css('ms-touch-action');
				var touchAction = $menu.css('touch-action');
				touchAction = touchAction || msTouchAction;
				touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
				$menu.css({
					'ms-touch-action': touchAction,
					'touch-action': touchAction
				});
			},
			getMenu = function ($el)
			{
				return $el.closest('.' + c.menuClass);
			},
			getOptions = function ($el)
			{
				return getMenu($el).data('sfOptions');
			},
			over = function ()
			{
				var $this = $(this),
					o = getOptions($this);
				clearTimeout(o.sfTimer);
				$this.siblings().superfish('hide').end().superfish('show');
			},
			close = function (o)
			{
				o.retainPath = ($.inArray(this[0], o.$path) > -1);
				this.superfish('hide');

				if (!this.parents('.' + o.hoverClass).length)
				{
					o.onIdle.call(getMenu(this));
					if (o.$path.length)
					{
						$.proxy(over, o.$path)();
					}
				}
			},
			out = function ()
			{
				var $this = $(this),
					o = getOptions($this);
				if (ios)
				{
					$.proxy(close, $this, o)();
				}
				else
				{
					clearTimeout(o.sfTimer);
					o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
				}
			},
			touchHandler = function (e)
			{
				var $this = $(this),
					o = getOptions($this),
					$ul = $this.siblings(e.data.popUpSelector);

				if (o.onHandleTouch.call($ul) === false)
				{
					return this;
				}

				if ($ul.length > 0 && $ul.is(':hidden'))
				{
					$this.one('click.superfish', false);
					if (e.type === 'MSPointerDown' || e.type === 'pointerdown')
					{
						$this.trigger('focus');
					} else
					{
						$.proxy(over, $this.parent('li'))();
					}
				}
			},
			applyHandlers = function ($menu, o)
			{
				var targets = 'li:has(' + o.popUpSelector + ')';
				if ($.fn.hoverIntent && !o.disableHI)
				{
					$menu.hoverIntent(over, out, targets);
				}
				else
				{
					$menu
						.on('mouseenter.superfish', targets, over)
						.on('mouseleave.superfish', targets, out);
				}
				var touchevent = 'MSPointerDown.superfish';
				if (unprefixedPointerEvents)
				{
					touchevent = 'pointerdown.superfish';
				}
				if (!ios)
				{
					touchevent += ' touchend.superfish';
				}
				if (wp7)
				{
					touchevent += ' mousedown.superfish';
				}
				$menu
					.on('focusin.superfish', 'li', over)
					.on('focusout.superfish', 'li', out)
					.on(touchevent, 'a', o, touchHandler);
			};

		return {
			// public methods
			hide: function (instant)
			{
				if (this.length)
				{
					var $this = this,
						o = getOptions($this);
					if (!o)
					{
						return this;
					}
					var not = (o.retainPath === true) ? o.$path : '',
						$ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
						speed = o.speedOut;

					if (instant)
					{
						$ul.show();
						speed = 0;
					}
					o.retainPath = false;

					if (o.onBeforeHide.call($ul) === false)
					{
						return this;
					}

					$ul.stop(true, true).animate(o.animationOut, speed, function ()
					{
						var $this = $(this);
						o.onHide.call($this);
					});
				}
				return this;
			},
			show: function ()
			{
				var o = getOptions(this);
				if (!o)
				{
					return this;
				}
				var $this = this.addClass(o.hoverClass),
					$ul = $this.children(o.popUpSelector);

				if (o.onBeforeShow.call($ul) === false)
				{
					return this;
				}

				$ul.stop(true, true).animate(o.animation, o.speed, function ()
				{
					o.onShow.call($ul);
				});
				return this;
			},
			destroy: function ()
			{
				return this.each(function ()
				{
					var $this = $(this),
						o = $this.data('sfOptions'),
						$hasPopUp;
					if (!o)
					{
						return false;
					}
					$hasPopUp = $this.find(o.popUpSelector).parent('li');
					clearTimeout(o.sfTimer);
					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					// remove event handlers
					$this.off('.superfish').off('.hoverIntent');
					// clear animation's inline display style
					$hasPopUp.children(o.popUpSelector).attr('style', function (i, style)
					{
						if (typeof style !== 'undefined')
						{
							return style.replace(/display[^;]+;?/g, '');
						}
					});
					// reset 'current' path classes
					o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
					$this.find('.' + o.hoverClass).removeClass(o.hoverClass);
					o.onDestroy.call($this);
					$this.removeData('sfOptions');
				});
			},
			init: function (op)
			{
				return this.each(function ()
				{
					var $this = $(this);
					if ($this.data('sfOptions'))
					{
						return false;
					}
					var o = $.extend({}, $.fn.superfish.defaults, op),
						$hasPopUp = $this.find(o.popUpSelector).parent('li');
					o.$path = setPathToCurrent($this, o);

					$this.data('sfOptions', o);

					toggleMenuClasses($this, o, true);
					toggleAnchorClass($hasPopUp, true);
					toggleTouchAction($this);
					applyHandlers($this, o);

					$hasPopUp.not('.' + c.bcClass).superfish('hide', true);

					o.onInit.call(this);
				});
			}
		};
	})();

	$.fn.superfish = function (method, args)
	{
		if (methods[method])
		{
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || !method)
		{
			return methods.init.apply(this, arguments);
		}
		else
		{
			return $.error('Method ' + method + ' does not exist on jQuery.fn.superfish');
		}
	};

	$.fn.superfish.defaults = {
		popUpSelector: 'ul,.sf-mega', // within menu context
		hoverClass: 'sfHover',
		pathClass: 'overrideThisToUse',
		pathLevels: 1,
		delay: 800,
		animation: { opacity: 'show' },
		animationOut: { opacity: 'hide' },
		speed: 'normal',
		speedOut: 'fast',
		cssArrows: true,
		disableHI: false,
		onInit: $.noop,
		onBeforeShow: $.noop,
		onShow: $.noop,
		onBeforeHide: $.noop,
		onHide: $.noop,
		onIdle: $.noop,
		onDestroy: $.noop,
		onHandleTouch: $.noop
	};

	function isRTL() {
		if (document.forms.length > 0) {
			return document.forms[0].getAttribute("mtx-data-dir") === 'rtl';
		}
		return false;
	};
	$.fn.supersubs = function (options)
	{
		var opts = $.extend({}, $.fn.supersubs.defaults, options);
		// return original object to support chaining
		return this.each(function ()
		{
			// cache selections
			var $$ = $(this);
			// support metadata
			var o = $.meta ? $.extend({}, opts, $$.data()) : opts;
			// cache all ul elements and show them in preparation for measurements
			var $ULs = $$.find('ul').show();
			// get the font size of menu.
			// .css('fontSize') returns various results cross-browser, so measure an em dash instead
			var fontsize = $('<li id="menu-fontsize">&#8212;</li>').css({
				'padding': 0,
				'position': 'absolute',
				'top': '-999em',
				'width': 'auto'
			}).appendTo($$)[0].clientWidth; //clientWidth is faster than .width()
			// remove em dash
			$('#menu-fontsize').remove();
			// loop through each ul in menu
			$ULs.each(function (i)
			{
				// cache this ul
				var $ul = $(this);
				// get all (li) children of this ul
				var $LIs = $ul.children();
				// get all anchor grand-children
				var $As = $LIs.children('a');
				// force content to one line and save current float property
				var liFloat = $LIs.css('white-space', 'nowrap').css('float');
				// remove width restrictions and floats so elements remain vertically stacked
				$ul.add($LIs).add($As).css({
					'float': 'none',
					'width': 'auto'
				});
				// this ul will now be shrink-wrapped to longest li due to position:absolute
				// so save its width as ems.
				var emWidth = $ul[0].clientWidth / fontsize;
				// add more width to ensure lines don't turn over at certain sizes in various browsers
				emWidth += o.extraWidth;
				// restrict to at least minWidth and at most maxWidth
				if (emWidth > o.maxWidth) { emWidth = o.maxWidth; }
				else if (emWidth < o.minWidth) { emWidth = o.minWidth; }
				emWidth += 'em';
				// set ul to width in ems
				$ul.css('width', emWidth);
				// restore li floats to avoid IE bugs
				// set li width to full width of this ul
				// revert white-space to normal
				$LIs
					//.css({
					//	'float': liFloat,
					//	'width': '100%',
					//	'white-space': 'normal'
					//})
					// update offset position of descendant ul to reflect new width of parent.
					// set it to 100% in case it isn't already set to this in the CSS
					.each(function ()
					{
						var $childUl = $(this).children('ul');
						var offsetDirection = $childUl.css('left') !== undefined ? (isRTL() ? 'right': 'left') : (isRTL() ? 'left' : 'right');
						$childUl.css(offsetDirection, '100%');
					});
			}).hide();

		});
	};
	// expose defaults
	$.fn.supersubs.defaults = {
		minWidth: 9,		// requires em unit.
		maxWidth: 25,		// requires em unit.
		extraWidth: 2.5			// extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values
	};
})(jQuery, window);


/*
 * jQuery Superclick Menu Plugin - v1.1.0
 * Copyright (c) 2014 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

; (function ($)
{
	"use strict";

	var methods = (function ()
	{
		// private properties and methods go here
		var c = {
			bcClass: 'sf-breadcrumb',
			menuClass: 'sf-js-enabled',
			anchorClass: 'sf-with-ul',
			menuArrowClass: 'sf-arrows'
		},
			outerClick = (function ()
			{
				$(window).load(function ()
				{
					$('body').children().on('click.superclick', function ()
					{
						var $allMenus = $('.sf-js-enabled');
						$allMenus.superclick('reset');
					});
				});
			})(),
			toggleMenuClasses = function ($menu, o)
			{
				var classes = c.menuClass;
				if (o.cssArrows)
				{
					classes += ' ' + c.menuArrowClass;
				}
				$menu.toggleClass(classes);
			},
			setPathToCurrent = function ($menu, o)
			{
				return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
					.addClass(o.activeClass + ' ' + c.bcClass)
					.filter(function ()
					{
						return ($(this).children(o.popUpSelector).hide().show().length);
					}).removeClass(o.pathClass);
			},
			toggleAnchorClass = function ($li)
			{
				$li.children('a').toggleClass(c.anchorClass);
			},
			toggleTouchAction = function ($menu)
			{
				var touchAction = $menu.css('ms-touch-action');
				touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
				$menu.css('ms-touch-action', touchAction);
			},
			clickHandler = function (e)
			{
				var $this = $(this),
					$popUp = $this.siblings(e.data.popUpSelector),
					func;

				if ($popUp.length)
				{
					func = ($popUp.is(':hidden')) ? over : out;
					$.proxy(func, $this.parent('li'))();
					return false;
				}
			},
			over = function ()
			{
				var $this = $(this),
					o = getOptions($this);
				$this.siblings().superclick('hide').end().superclick('show');
			},
			out = function ()
			{
				var $this = $(this),
					o = getOptions($this);
				$.proxy(close, $this, o)();
			},
			close = function (o)
			{
				o.retainPath = ($.inArray(this[0], o.$path) > -1);
				this.superclick('hide');

				if (!this.parents('.' + o.activeClass).length)
				{
					o.onIdle.call(getMenu(this));
					if (o.$path.length)
					{
						$.proxy(over, o.$path)();
					}
				}
			},
			getMenu = function ($el)
			{
				return $el.closest('.' + c.menuClass);
			},
			getOptions = function ($el)
			{
				return getMenu($el).data('sf-options');
			};

		return {
			// public methods
			hide: function (instant)
			{
				if (this.length)
				{
					var $this = this,
						o = getOptions($this);
					if (!o)
					{
						return this;
					}
					var not = (o.retainPath === true) ? o.$path : '',
						$popUp = $this.find('li.' + o.activeClass).add(this).not(not).removeClass(o.activeClass).children(o.popUpSelector),
						speed = o.speedOut;

					if (instant)
					{
						$popUp.show();
						speed = 0;
					}
					o.retainPath = false;
					o.onBeforeHide.call($popUp);
					$popUp.stop(true, true).animate(o.animationOut, speed, function ()
					{
						var $this = $(this);
						o.onHide.call($this);
					});
				}
				return this;
			},
			show: function ()
			{
				var o = getOptions(this);
				if (!o)
				{
					return this;
				}
				var $this = this.addClass(o.activeClass),
					$popUp = $this.children(o.popUpSelector);

				o.onBeforeShow.call($popUp);
				$popUp.stop(true, true).animate(o.animation, o.speed, function ()
				{
					o.onShow.call($popUp);
				});
				return this;
			},
			destroy: function ()
			{
				return this.each(function ()
				{
					var $this = $(this),
						o = $this.data('sf-options'),
						$hasPopUp;
					if (!o)
					{
						return false;
					}
					$hasPopUp = $this.find(o.popUpSelector).parent('li');
					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					// remove event handlers
					$this.off('.superclick');
					// clear animation's inline display style
					$hasPopUp.children(o.popUpSelector).attr('style', function (i, style)
					{
						return style.replace(/display[^;]+;?/g, '');
					});
					// reset 'current' path classes
					o.$path.removeClass(o.activeClass + ' ' + c.bcClass).addClass(o.pathClass);
					$this.find('.' + o.activeClass).removeClass(o.activeClass);
					o.onDestroy.call($this);
					$this.removeData('sf-options');
				});
			},
			reset: function ()
			{
				return this.each(function ()
				{
					var $menu = $(this),
						o = getOptions($menu),
						$openLis = $($menu.find('.' + o.activeClass).toArray().reverse());
					$openLis.children('a').trigger('click');
				});
			},
			init: function (op)
			{
				return this.each(function ()
				{
					var $this = $(this);
					if ($this.data('sf-options'))
					{
						return false;
					}
					var o = $.extend({}, $.fn.superclick.defaults, op),
						$hasPopUp = $this.find(o.popUpSelector).parent('li');
					o.$path = setPathToCurrent($this, o);

					$this.data('sf-options', o);

					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					$this.on('click.superclick', 'a', o, clickHandler);

					$hasPopUp.not('.' + c.bcClass).superclick('hide', true);

					o.onInit.call(this);
				});
			}
		};
	})();

	$.fn.superclick = function (method, args)
	{
		if (methods[method])
		{
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || !method)
		{
			return methods.init.apply(this, arguments);
		}
		else
		{
			return $.error('Method ' + method + ' does not exist on jQuery.fn.superclick');
		}
	};

	$.fn.superclick.defaults = {
		popUpSelector: 'ul,.sf-mega', // within menu context
		activeClass: 'sfHover', // keep 'hover' in classname for compatibility reasons
		pathClass: 'overrideThisToUse',
		pathLevels: 1,
		animation: { opacity: 'show' },
		animationOut: { opacity: 'hide' },
		speed: 'normal',
		speedOut: 'fast',
		cssArrows: true,
		onInit: $.noop,
		onBeforeShow: $.noop,
		onShow: $.noop,
		onBeforeHide: $.noop,
		onHide: $.noop,
		onIdle: $.noop,
		onDestroy: $.noop
	};

})(jQuery);

$(function ()
{
	mtxNavResizer.Init();
});

//********************************************************************************
//	Main nav width handling.
//
// Handle navbar items that exceed viewable width.
//********************************************************************************
var mtxNavResizer = (function ()
{
	//****************************************************************************
	//	Attach listeners.
	function init()
	{
		$(window).on("resize.mtxNav", function ()
		{
			mtxNavResizer.CheckSize();
		});
		checkSizeInit();
	}

	function checkSize()
	{
		// If the nav is collapsed, don't do anything.
		if ($(".TopMenuDiv:visible").length <= 0) {
			return false;
		}

		var viewportWidth = $(window).width();
		var navWidth = $(".TopMenuDiv")[0].scrollWidth;
		var isMore = $("#navMore").is(':visible');

		// Check absolute value of navWidth - viewportWidth
		var absoluteWidthDifference = Math.abs(navWidth - viewportWidth);

		// Are menu items are too wide for the browser?
		// Magic number 1 is used as our minimum threshold
		if (navWidth > viewportWidth && absoluteWidthDifference > 1) {
			// Find the last item in the nav(that isn't the "more" dropdown).
			var $lastItem = $(".TopMenuDiv .j-MainNav .sf-top").not("#navMore").last();

			// Don't continue if there are no items for further collapse
			if ($lastItem.length <= 0) {
				return false;
			}

			// Track the width as data attribute when item is in the actual nav,
			// since measuring hidden things later is a pain.
			$lastItem.data("mtx_width", parseInt($lastItem.width()));
			// Also find the last divider.
			var $lastDivider = $(".TopMenuDiv .divider-vertical").last();

			// Detach last item and divider.
			$lastItem.detach();
			if (isMore) {
				$lastDivider.remove();
			}
			else {
				$("#navMore").show();
			}

			// Change classes on the nav item so it behaves as a dropdown list item.
			$lastItem.attr("class", "");

			// Reattach the item in the more dropdown.
			$("#navMore > ul").prepend($lastItem);
		}
		else {
			// Is there room to move an item from the "more" dropdown to the main nav?
			var $firstMoreItem = $("#navMore > ul").children("li").first();
			// Use the width of the right margin of the container that holds the nav items to easily measure.
			var availableWidth = parseInt($(".TopMenuDiv .sf-menu").width()) + 2;

			if ($firstMoreItem.length > 0) {

				// TODO: if there is only one item in the MORE dropdown,
				// would there be enough space for it if MORE was gone?
				var isOnlyOne = false;
				if ($("#navMore > ul").children("li").length == 1) {
					availableWidth += $("#navMore").width();
					isOnlyOne = true;
					$("#navMore").hide();
				}

				if ($firstMoreItem.data("mtx_width") < availableWidth) {
					$firstMoreItem.detach();
					// Change classes back to nav item.
					$firstMoreItem.attr("class", "sf-top");
					$firstMoreItem.insertBefore($("#navMore"));

					if (!isOnlyOne) {
						var $divider = $('<div class="divider-vertical">&nbsp;</div>');
						$divider.insertBefore($("#navMore"));
					}
					checkSize();
				}
			}
			else {
				if ($("#navMore").is(':visible')) {
					$(".TopMenuDiv .divider-vertical").last().remove();
					$("#navMore").hide();
				}
			}
		}
	}

	function checkSizeInit()
	{
		var intialLength = $(".TopMenuDiv .j-MainNav .sf-top").not("#navMore").length;
		checkSize();
		var updatedLength = $(".TopMenuDiv .j-MainNav .sf-top").not("#navMore").length;
		if (intialLength > updatedLength) {
			checkSizeInit();
		}
	}

	//****************************************************************************
	//	Public. 
	return {
		Init: init,
		CheckSize: checkSize
	};
})();

var RegisterPostbackOnClick = function ( strElementID, strTarget )
{
	$( document.getElementById( strElementID ) ).click( function ( ev )
	{
		if ( !ev.ctrlKey && !ev.shiftKey )
		{
			var $a = $( ev.target ).closest( 'a' );
			var href = $a.attr( 'href' );
			if ( href && !$a.attr( 'target' ) )
			{	
				__doPostBack(strTarget, href);
				return false;
			}
		}
	} );
};

var DownBrowser = function (strEl, strElHR)
{
	var downb = document.getElementById(strEl);
	var downhr = document.getElementById(strElHR);
	var nExpiry = 3 * 24 * 60 * 60 * 1000; //3 days in milliseconds
	this.later = function ()
	{
		downb.style.display =
			downhr.style.display = 'none';
		document.cookie = "downb=" + escape( new Date().getTime() );
	};

	var cookies = document.cookie.split('; ');
	var bShow = true;
	for (var ix = 0, len = cookies.length, cookieExpires; ix < len; ix++)
	{
		if (cookies[ix].split('=')[0] == 'downb')
		{
			cookieExpires = new Date(parseInt(cookies[ix].split('=')[1], 10) + nExpiry);
			bShow = new Date() >= cookieExpires;
		}
	}
	if (bShow && (!document.documentMode || document.documentMode <= 8)) { downb.style.display = downhr.style.display = 'block'; }
};

///use alternative localStorage in case of window localstorage not supported by browser

function getStorage() {
	var storageImpl;
	try {
		localStorage.setItem("storage", "");
		localStorage.removeItem("storage");
		storageImpl = localStorage;
	}
	catch (err) {
		storageImpl = new LocalStorageAlternative();
	}

	return storageImpl;
}

function LocalStorageAlternative() {
	var structureLocalStorage = {};
	this.setItem = function (key, value) {
		structureLocalStorage[key] = value;
	}
	this.getItem = function (key) {
		if (typeof structureLocalStorage[key] != 'undefined') {
			return structureLocalStorage[key];
		}
		else {
			return null;
		}
	}
	this.removeItem = function (key) {
		structureLocalStorage[key] = undefined;
	}
}

var cusStorage = getStorage();
// localStoarge code till here 
// Initialised by SpeedBar.ascx
// m_strSpeedBar: id of speed bar control
var SpeedBarJsVars;

var SpeedBarJs = new (function ()
{
	// helper to get speedbar element by control id
	var speedbarCtrl = function (strName)
	{
		return document.getElementById(SpeedBarJsVars.m_strSpeedBar + strName);
	};

	var hideErrorMessage = function () {
		var errorMessage = speedbarCtrl('_m_lblErrorMsg');
		if (errorMessage != null)
		{
			errorMessage.style.display = "none";
		}
	};

	// search link onclick handler
	this.checkGo = function ()
	{
		var tbSpeedBar = speedbarCtrl('_m_tbSpeedBar');
		var cbXtraCriteria = speedbarCtrl('_m_cbXtraCriteria');
		if (window.mtxAnalytics) {
			window.mtxAnalytics.track("Top Menu - Speedbar Search", { QueryText: tbSpeedBar.value, UseAdditionalCriteria: cbXtraCriteria && cbXtraCriteria.checked })
		}
		return tbSpeedBar.value;
	};

	// clear speedbar input text value
	this.clearInput = function ()
	{
		var tbSpeedBar = speedbarCtrl('_m_tbSpeedBar');
		$(tbSpeedBar).val('').focus();
		hideErrorMessage();
	}

	// textbox key down handler
	this.onKeyDown = function (ev)
	{
		if (ev.key == "Enter")
		{
			if (ev.stopPropagation)
			{
				ev.stopPropagation();
				ev.preventDefault();
			}
			if (this.checkGo())
			{
				// Bizarre hack without which IE11 is not able to set focus back to the speedbar
				// after the post back.
				var tbSpeedBar = speedbarCtrl('_m_tbSpeedBar');
				tbSpeedBar.blur();
				
				var lnkGo = speedbarCtrl('_m_lnkGo');
				window.location = lnkGo.href;
			}
			return false;
		}
		hideErrorMessage();
		return true;
	};

	// mouse in/out handler for other criteria - shows/hides tooltip div
	this.showToolTip = function (bShow)
	{
		var pnlXtraCriteria = speedbarCtrl('_m_pnlXtraCriteria');
		var pnlDidYouMean = speedbarCtrl('_m_pnlDidYouMean');

		var divRelative = pnlXtraCriteria.firstChild;
		// in FF there is a text element before the DIV
		if (divRelative.nodeType != 1)
		{
			divRelative = divRelative.nextSibling;
		}
		divRelative.style.display = bShow && (!pnlDidYouMean || pnlDidYouMean.style.display == "none") ? '' : 'none';
	};

	// focus to speedbar on start up
	this.focus = function ()
	{
	    var tbSpeedBar = speedbarCtrl('_m_tbSpeedBar');
	    tbSpeedBar.focus();
	    tbSpeedBar.value = tbSpeedBar.value; // cursor position                     
	};

	//
	var m_HelpWindow = null;
	// help link onclick handler - opens help window
	this.showHelp = function (nMLID)
	{
		var strURL = "/Matrix/Public/HelpErrorPopup.aspx?MLID=" + nMLID;
		var strFeatures = "height=410,width=410,left=25,top=25";
		if (m_HelpWindow)
		{
			m_HelpWindow.close();
			m_HelpWindow = null;
		}
		m_HelpWindow = window.open(strURL, 'HelpErrorWin', strFeatures);
		m_HelpWindow.focus();
	};
})();

var ConfirmationMessage = function (strTextID, strDivID)
{
	var oText = document.getElementById(strTextID);
	var oDiv = document.getElementById(strDivID);

	var closeBtn = $(oDiv).find(".close");
	$(closeBtn).on("click", function () {
		$(oDiv).slideUp();
	});
	var nTimeout = $(oDiv).attr("data-timeout");

	var hideTimer;
	var fHide = function ()
	{
		if (oText) { oText.innerHTML = "&nbsp;"; }
		if (oDiv) { $(oDiv).slideUp(); }
		window.clearTimeout(hideTimer);
		hideTimer = undefined;
	};

	$(oDiv).click(function (ev) { fHide(1); });

	return {
		hide: fHide,
		show: function ( strMessage )
		{
			if ( oText && oDiv )
			{
				if ( strMessage )
				{
					oText.innerHTML = strMessage;
				}
				$(oDiv).slideDown();
			}
			window.clearTimeout( hideTimer );
			hideTimer = window.setTimeout(fHide, nTimeout);
		}
	};

};

var SessionTimeOutWarning = function (ml, fTouchSession, strLogoutLoc, dom, strLoginLoc)
{
	this.m_strSessionExpireMsg = ml.SessionExpiredMsg;
	this.m_strMLMinute = ml.SessionExpireMinute;
	this.m_fMLMinutes = ml.SessionExpireMinutes;
	
	this.m_$warnDiv = $( "#" + dom.Warning );
	this.m_$errorDiv = $( "#" + dom.Error );

	this.m_strLocalStorageKey = 'matrix-session-channel';
	this.touchSession = fTouchSession;
	this.m_strLogoutLocation = strLogoutLoc;
	this.m_strLoginLocation = strLoginLoc;
	
	var strGeneratedId = '';
	var strValidCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for ( var i = 0; i < 10; i++ )
	{
		strGeneratedId += strValidCharacters.charAt( Math.floor( Math.random() * strValidCharacters.length ) );
	}

	this.m_strSignalerId = strGeneratedId;
	
	//bind the storage event handler - fired when localstorage changes
	if ( !!window.localStorage )
	{
		var t = this;

		$( window ).on( 'storage.sessiontimeout', function ( e )
		{
			var evt = e.originalEvent;

			if ( evt.key == t.m_strLocalStorageKey )
			{
				t.HandleStorageEvent( JSON.parse( evt.newValue ) );
			}
		} );
	}
};

SessionTimeOutWarning.prototype.FireStorageEvent = function (event, data)
{
	if (!!cusStorage && !!window.JSON)
	{
		cusStorage.setItem(this.m_strLocalStorageKey, JSON.stringify({
			'strSignalerId': this.m_strSignalerId,
			'event': event,
			'event_data': data,
			'event_timeStamp': Math.round(new Date().getTime() / 1000)
		} ) );
	}
};

SessionTimeOutWarning.prototype.HandleStorageEvent = function (evt)
{
	if (typeof (evt) !== 'undefined')
	{
		switch (evt.event)
		{
			case 'rebind':
				this.BindTimers(evt);
				break;
			case 'abandon':
				this.SessionOver(evt);
				break;
		}
	}
	else
	{
		return false;
	}
};

SessionTimeOutWarning.prototype.RefreshTimers = function ( nTimeout, nWarning )
{
	this.RefreshSession( nTimeout, nWarning );
	this.FireStorageEvent( 'rebind', nTimeout + "|" + nWarning );
};

SessionTimeOutWarning.prototype.BindTimers = function ( evt )
{
	if ( evt && evt.strSignalerId != this.m_strSignalerId )
	{
		var data = evt.event_data.split( '|' );
		if ( data.length == 2 )
		{
			this.RefreshSession( parseInt( data[0], 10 ), parseInt( data[1], 10 ) );
		}
	}
};

SessionTimeOutWarning.prototype.SessionOver = function ( evt )
{
	if ( !evt || evt.strSignalerId != this.m_strSignalerId )
	{
		this.HideMessage();
		this.m_$errorDiv.show();
	}
};

SessionTimeOutWarning.prototype.RefreshSession = function (nTimeout, nWarning)
{
	cusStorage.setItem('matrix-session-land', new Date().toGMTString());
	this.HideMessage();
	window.clearTimeout( this.m_oCheckHandle );
	window.clearTimeout( this.m_oWarnHandle );

	var self = this;
	this.m_oCheckHandle = window.setTimeout( function ()
	{
		self.SessionOver.call( self );
	}, nTimeout * 60 * 1000 - 20 * 1000 ); //show session-over 20s before the session actually dies
	if ( nWarning > 0 )
	{
		if ( nTimeout - nWarning > 0 )
		{
			this.m_oWarnHandle = window.setTimeout( function ()
			{
				self.ShowWarning.call( self, nTimeout );
			}, ( nTimeout - nWarning ) * 60 * 1000 );
		}
		else
		{
			this.ShowWarning(nTimeout);
		}
	}
};

SessionTimeOutWarning.prototype.ShowWarning = function (nSessionMaxLength)
{
	var dtStoredStamp = new Date(cusStorage.getItem('matrix-session-land'));
	var self = this;
	var fUpdate = function ()
	{
		var dtCurrentTime = new Date();
		var nTimeLeft = ( dtStoredStamp.getTime() + parseInt( nSessionMaxLength * 60000, 10 ) ) - dtCurrentTime.getTime();
		var nMinLeft = Math.round( ( nTimeLeft / 60000 ) );

		var strMessage = nMinLeft === 1 ? self.m_strMLMinute : self.m_fMLMinutes( { expiremin: nMinLeft } );
		if ( nMinLeft > 0 )
		{
			self.m_$warnDiv.find( 'span.message' ).text( strMessage );
		}
	};
	fUpdate();
	this.m_oWarnInterval = setInterval( fUpdate, 20 * 1000 );
	this.m_$warnDiv.show();
};

SessionTimeOutWarning.prototype.HideMessage = function ()
{
	clearInterval(this.m_oWarnInterval);
	this.m_$warnDiv.find( 'span.message' ).text( '' );
	this.m_$warnDiv[0].style.display = "none";
};

SessionTimeOutWarning.prototype.PokeSession = function ()
{
	this.touchSession();
};

SessionTimeOutWarning.prototype.LogOut = function ()
{
	this.FireStorageEvent( 'abandon', '' );
	if ( !!this.m_strLogoutLocation )
	{
		window.location.replace(this.m_strLogoutLocation);
	}
};

SessionTimeOutWarning.prototype.Login = function ()
{
	if (!!this.m_strLoginLocation)
	{
		window.location.replace(this.m_strLoginLocation);
	}
};
