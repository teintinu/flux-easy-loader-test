import FluxEasy from 'flux-easy';
import AppStore from './app.store.js';
import AppTitle from './apptitle.view.js';

class AppView extends FluxEasy.View {

    constructor() {
        this.app = AppStore.createStoreReference();
        this.title = AppTitle.createViewReference();
        this.app.addEventListener('RefreshAll', this);
    }

    render() {
        var state = this.app.getState();
        return React.createElement(this.title.Class);
    }
}

export default AppView;
