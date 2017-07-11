import { MiWebOnPage } from './app.po';

describe('mi-web-on App', () => {
  let page: MiWebOnPage;

  beforeEach(() => {
    page = new MiWebOnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
