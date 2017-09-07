import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { StarComponent } from '../shared/star.component';
import {FormsModule} from '@angular/forms';

// tslint:disable-next-line:no-unused-expression
@NgModule({

    imports: [CommonModule],
    declarations: [StarComponent],
    exports : [StarComponent, CommonModule, FormsModule]
})
export class SharedModule { }