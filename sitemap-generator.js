module.exports = {
	siteUrl: "https://techmmunity.github.io",
	exclude: ["/", "/404"],
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/index.html", "/404.html"],
			},
		],
		additionalSitemaps: ["https://techmmunity.github.io/sitemap.xml"],
	},
};
