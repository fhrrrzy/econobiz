import eyeButtonInitiator from '../utils/eye-initiator';

class App {
    constructor({
        eyeIcon,
    }) {
        this._eyeIcon = eyeIcon;

        this._initialAppShell();
    }

    _initialAppShell() {
        eyeButtonInitiator.init(this._eyeIcon);
    }
}

export default App;