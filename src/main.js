const riot = require("riot");
const $    = require("jquery"); // のちのちFetch APIに書き換える予定

require("./components/app.tag");
require("./components/raw.tag");
require("./components/post.tag");

$.ajax({
	type: "GET",
	dataType: "json",
	url : "http://api.wp-app.org/wp-json/wp/v2/posts"
}).done(function (data) {
	riot.mount("app", {
		posts: data
	});
}).fail(function (err) {
	alert(err);
});
