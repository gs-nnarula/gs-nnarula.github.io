import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Component } from "@angular/core";
import { PxService } from "../services/px.service";

@Component({
    selector: 'px-widgets',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent {

    constructor(private px: PxService) { }

    release(event: CdkDragDrop<any>, widgetNumber: number) {
        this.px.track('Drag_Widget_Event', { widgetNumber });
    }

}