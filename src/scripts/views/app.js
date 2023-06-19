/* eslint-disable class-methods-use-this */
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
// import SkipContentInitiator from '../utils/skip-content-initiator';

class App {
  constructor({
    content, skipContent,
  }) {
    this._content = content;
    this._skipContent = skipContent;

    this._initialAppShell();
  }

  _initialAppShell() {
    // SkipContentInitiator.init(this._skipContent);
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
