import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContactComponent } from "./contact.component";

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: "", component: ContactComponent }
          ]),
    ],
    exports: [
        ContactComponent
    ]
})
export class ContactModule {

}