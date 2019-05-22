import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
@NgModule({
    imports: [
        BrowserModule,
        IndexRoutingModule,
    ],
    declarations: [IndexComponent],
    exports: [IndexComponent]
}) export class IndexModule {

}
