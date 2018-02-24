var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var handlebars = require('handlebars');
var collections = require('metalsmith-collections');
var permalinks = require('metalsmith-permalinks');
// var serve = require('metalsmith-serve');
// var watch = require('metalsmith-watch');

metalsmith(__dirname)
  .metadata({
    site: {
      name: 'Radhika Morabia',
      description: "Radhika Morabia's Blog"
    }
  })
  .source('./src')
  .destination('./public')
	.use(collections({
	      articles: {
	        pattern: 'articles/**/*.md',
	        sortBy: 'date',
	        reverse: true
	        },
	      }))
	.use(markdown())
	.use(permalinks({
	  relative: false,
		pattern: ':title'
	}))
	.use(layouts({
		engine: 'handlebars',
		directory: './layouts',
		default: 'article.html',
		pattern: ["*/*/*html","*/*html","*html"],
	  partials: {
	        header: 'partials/header',
	        footer: 'partials/footer'
	        }
	}))
//	.use(serve({
//	  port: 1717,
//	  verbose: true
//	}))
//	.use(watch({
//	    paths: {
//	      "${source}/**/*": true,
//	      "layout/**/*": "**/*",
//	    }
//	  }))
  .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Blog built!');
    }
  });
