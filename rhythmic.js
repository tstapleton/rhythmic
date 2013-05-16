(function () {

	var i, css, html, head, body, container, styles, rowHeight, totalHeight, rows;

	html = document.documentElement;
	head = document.getElementsByTagName('head')[0];
	body = document.body;
	container = document.createElement('div');
	styles = document.createElement('style');

	rowHeight = 22;
	totalHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	rows = Math.floor(totalHeight / rowHeight);

	css = '#rhythmic { left: 0; position: fixed; top: 0; width: 100%; z-index: 1000; }';
	css += '#rhythmic div { border-bottom: 1px solid red; width: 100%; margin-top: ' + (rowHeight - 1) + 'px; }';

	for (i = 0; i < rows; i++) {
		container.appendChild(document.createElement('div'));
	}

	container.id += 'rhythmic';
	styles.id = 'rhythmic-styles';
	styles.type = 'text/css';
	styles.appendChild(document.createTextNode(css));

	head.appendChild(styles);
	body.appendChild(container);

	// clean up
	document.onkeydown = function (event) {
		event = event || window.event;
		if (event.keyCode === 27) {
			container = document.getElementById('rhythmic');
			styles = document.getElementById('rhythmic-styles');
			scripts = document.getElementsByTagName('script');
			for (i = 0; i < scripts.length; i++) {
				if (scripts[i].src && scripts[i].src.indexOf('rhythmic.js') !== -1) {
					scripts[i].parentNode.removeChild(scripts[i]);
				}
			}
			container.parentNode.removeChild(container);
			styles.parentNode.removeChild(styles);
		}
	};
}).call(this);
