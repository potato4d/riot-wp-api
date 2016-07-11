const riot = require("riot");

require("./components/app.tag");
require("./components/main-header.tag");
require("./components/raw.tag");
require("./components/post.tag");

fetch("http://api.wp-app.org/wp-json/wp/v2/posts", {
	method: "GET",
	mode: 'cors'
}).then( (data) => {
	return data.json();
}).then( (data) => {
	console.log(data);
	riot.mount("app", {
		posts: data
	});
}).catch( (err) => {
	alert(err);
});
