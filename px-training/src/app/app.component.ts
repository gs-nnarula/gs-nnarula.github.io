import { Component } from '@angular/core';
import { LoginService } from './modules/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'px-training';

  user;

    constructor(private loginService: LoginService) {
        this.loginService.user.subscribe(x => this.user = x);
    }

    logout() {
      this.loginService.logout();
    }
}
