// define a sample function to display index page
function displayIndexPage() {
	var indexFragment = XT(tplIndex())
	document.title = 'My App - Index page'
	appRoot(function(root) {
		root.innerHTML = ''
		root.appendChild(indexFragment)
	})
}