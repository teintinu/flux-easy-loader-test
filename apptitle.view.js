import FluxEasy from 'flux-easy';
import AppStore from './app.store.js';


class AppTitleView extends FluxEasy.View {

    constructor() {
        this.app = AppStore.createStoreReference();
        this.app.addEventListener('RefreshTitle', this);
    }

    render() {
        return React.createElement('div', {}, this.app.getState().apptitle);
    }
}

export default AppTitleView;
