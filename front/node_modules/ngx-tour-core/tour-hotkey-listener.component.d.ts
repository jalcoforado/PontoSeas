import { TourService } from './tour.service';
export declare class TourHotkeyListenerComponent {
    tourService: TourService;
    constructor(tourService: TourService);
    /**
     * Configures hot keys for controlling the tour with the keyboard
     */
    onEscapeKey(event: KeyboardEvent): void;
    onArrowRightKey(event: KeyboardEvent): void;
    onArrowLeftKey(event: KeyboardEvent): void;
}
