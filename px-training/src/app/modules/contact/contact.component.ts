import { Component } from "@angular/core";

@Component({
    selector: 'px-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    selectedOption = 'CONTACTS';

    selectionChange(option: 'CONTACTS' | 'HELP') {
        this.selectedOption = option;
    }
}