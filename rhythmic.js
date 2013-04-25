(function () {

	var i, css, html, head, body, container, styles, rowHeight, totalHeight, rows;

	if (document.getElementById('rhythmic')) {
		container = document.getElementById('rhythmic');
		styles = document.getElementById('rhythmic-styles');
		container.parentNode.removeChild(container);
		styles.parentNode.removeChild(styles);
	} else {
		html = document.documentElement;
		head = document.getElementsByTagName('head')[0];
		body = document.body;
		container = document.createElement('div');
		styles = document.createElement('style');

		rowHeight = 22;
		totalHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
		rows = Math.floor(totalHeight / rowHeight);

		css = '#rhythmic { height: 100%; left: 0; position: absolute; top: 0; width: 100%; z-index: 1000; }';
		css += '#rhythmic div { border-bottom: 1px solid red; width: 100%; height: ' + (rowHeight - 1) + 'px; }';

		for (i = 0; i < rows; i++) {
			container.appendChild(document.createElement('div'));
		}

		container.id += 'rhythmic';
		styles.id = 'rhythmic-styles';
		styles.type = 'text/css';
		styles.appendChild(document.createTextNode(css));

		head.appendChild(styles);
		body.appendChild(container);
	}
}).call(this);
