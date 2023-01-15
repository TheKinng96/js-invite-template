var ghpages = require('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://thekinng96.github.io/js-invite-template.git', // Update to point to your repository
		user: {
			name: 'thekinng96', // update to use your name
			email: 'fengyuan.yap@gmail.com' // Update to use your email
		}
	},
	() => {
		console.log('Deploy Complete!');
	}
);
