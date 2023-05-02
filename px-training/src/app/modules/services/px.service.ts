/**
 * This tracks the PX events with given event name and data.
 */
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PxService {

    identify(userFields, accountFields) {
        if (!(<any>window).aptrinsic) {
            this.defineAptrinsic();
        }

        (<any>window).aptrinsic('identify', userFields, accountFields);
    }

    track(eventName: string, eventData?: { [key: string]: any }): void {
        try {
            if (!(<any>window).aptrinsic) {
                this.defineAptrinsic();
            }

            (<any>window).aptrinsic('track', eventName, eventData);
        }
        catch (error) {
            console.error('[Customer Goals][PxEventTrackerService]:: Error occurred while trying to track Px event:: eventName::', eventName, 'eventData::', eventData, 'Error::', error);
        }

    }

    private defineAptrinsic() {
        // Define aptrinsic if not already defined
        const apt = (...args) => {
            ((<any>window).aptrinsic.q = (<any>window).aptrinsic.q || []).push(args);
        };
        (<any>window).aptrinsic = (<any>window).aptrinsic || apt;
    }

}