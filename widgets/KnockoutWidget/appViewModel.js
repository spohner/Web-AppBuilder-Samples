// Main viewmodel class
import ko from './libs/knockout-3.4.2';

function appViewModel() {
        this.zoomLevel = ko.observable(99);
        this.increaseZoom = () => {
            this.zoomLevel(this.zoomLevel() + 1);
        };
        this.decreaseZoom = () => {
            this.zoomLevel(this.zoomLevel() -1);
        };
    };

export default appViewModel;