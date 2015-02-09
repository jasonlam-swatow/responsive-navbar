// 隔絕全局作用域
(function() {

	var mobile = document.createElement('div');
	mobile.className = 'nav-mobile';
	document.querySelector('.nav').appendChild(mobile);

	// 創建hasClass()函式
	function hasClass(elem, className) {
		return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
	}

	// 創建toggleClass()函式
	function toggleClass(elem, className) {
		var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
		if (hasClass(elem, className)) {
			while (newClass.indexOf(' ' + className + ' ') >= 0) {
				newClass = newClass.replace(' ' + className + ' ', ' ');
			}
			elem.className = newClass.replace(/^\s+|\s+$/g, '');
		} else {
			elem.className += ' ' + className;
		}
	}

	// Mobile nav function
	var mobileNav = document.querySelector('.nav-mobile');
	var navList = document.querySelector('.nav-list');
	mobileNav.onclick = function() {
		toggleClass(this, 'nav-mobile-open');
		toggleClass(navList, 'nav-active');
	};

})();