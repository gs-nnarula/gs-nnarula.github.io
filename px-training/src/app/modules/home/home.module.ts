import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: "", component: HomeComponent }
        ]),
        DragDropModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {

}