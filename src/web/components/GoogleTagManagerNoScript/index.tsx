export const GoogleTagManagerNoScript: React.FC = () => (
	<noscript
		dangerouslySetInnerHTML={{
			// eslint-disable-next-line @typescript-eslint/naming-convention
			__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5NG5KTT"
											height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
		}}
	/>
);
