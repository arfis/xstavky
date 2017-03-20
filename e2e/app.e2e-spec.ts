import { TiborPage } from './app.po';

describe('tibor App', function() {
  let page: TiborPage;

  beforeEach(() => {
    page = new TiborPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
