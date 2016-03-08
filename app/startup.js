// make Zen.js reactive storage persistent
Zen.import(localStorage.getItem('Zen'))
Zen(function(){
	localStorage.setItem('Zen', this)
})

// cache application root
var appRoot = Q('#approot')

// automatically prevent unnecessary server requests for internal links
Q('a')().on('click touchstart', function(e) {
	if(this.href[0]==='/') {
		e.preventDefault()
		R.go(this.href)
	}
})