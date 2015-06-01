import FluxEasy from 'flux-easy';

class AppStore extends FluxEasy.Store {

    constructor() {
        this.apptitle = 'initializating...';
        this.content = null;
        this.tasks = [];
        this.notifications = [];
        this.session = null;
    }

    setTitle(title) {
        this.apptitle = title;
        this.emit('refreshTitle');
    }
    activate_pagelet(view_of_pagelet_ref) {
        this.pagelets.push(view_of_pagelet_ref);
        this.emit('refreshAll');
    }

    deactivate_pagelet(view_of_pagelet_ref) {
        var i = this.pagelets.indexOf(view_of_pagelet_ref);
        if (i >= 0) {
            this.pagelets.splice(i, 1);
            this.emit('refreshAll');
        }
    }
}

export default AppStore;
