interface PageEventProps {
	event: string;
	page: string;
}

export const setGtmPageView = (url: string) => {
	const pageEvent: PageEventProps = {
		event: "pageview",
		page: url,
	};

	if (window.dataLayer) {
		window.dataLayer.push(pageEvent);
	} else {
		window.dataLayer = [pageEvent];
	}

	return pageEvent;
};
