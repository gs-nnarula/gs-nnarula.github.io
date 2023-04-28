import { NgModule } from "@angular/core";
import { WidgetsComponent } from "./widgets.component";
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
    declarations: [
        WidgetsComponent
    ],
    imports: [
        DragDropModule
    ],
    exports: [
        WidgetsComponent
    ]
})
export class WidgetsModule {

}