import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PxComponent } from "./px.component";

@NgModule({
    declarations: [
        PxComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: "", redirectTo: 'home', component: PxComponent },
            { path: "home", loadChildren: () => import('../home/home.module').then(m => m.HomeModule)  },
            { path: "contact", loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule)  }
          ]),
    ],
    exports: [
        PxComponent
    ]
})
export class PxModule {

}