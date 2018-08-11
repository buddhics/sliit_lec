import { AppPage } from './app.po';

describe('workspace-project App', () => {
	// tslint:disable:indent
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display welcome message', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('Build test');
	});
});
