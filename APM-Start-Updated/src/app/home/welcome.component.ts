import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:no-trailing-whitespace
    moduleId:  module.id, 
    templateUrl: 'welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
