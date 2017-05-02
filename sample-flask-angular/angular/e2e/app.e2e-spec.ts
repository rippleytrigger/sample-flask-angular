import { SampleFlaskAngularPage } from './app.po';

describe('sample-flask-angular App', () => {
  let page: SampleFlaskAngularPage;

  beforeEach(() => {
    page = new SampleFlaskAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
