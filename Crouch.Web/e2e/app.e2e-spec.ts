import { CrouchWebPage } from './app.po';

describe('crouch-web App', function() {
  let page: CrouchWebPage;

  beforeEach(() => {
    page = new CrouchWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
