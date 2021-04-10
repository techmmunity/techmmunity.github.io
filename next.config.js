module.exports = {
	future: {
		webpack5: true,
	},
	assetPrefix: "/",
	webpack: config => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};
