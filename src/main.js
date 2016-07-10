const riot = require("riot");

require("whatwg-fetch");
require("./components/app.tag");
require("./components/raw.tag");
require("./components/post.tag");

fetch("http://api.wp-app.org/wp-json/wp/v2/posts", {
	method: "GET",
	credentials: 'cors',
	mode: 'cors'
}).then( (data) => {
	return data.json();
}).then( (data) => {
	riot.mount("app", {
		posts: data
	});
}).catch( (err) => {
	alert(err);
});
