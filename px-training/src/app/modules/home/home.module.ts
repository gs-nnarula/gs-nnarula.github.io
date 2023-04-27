import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        DragDropModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {

}