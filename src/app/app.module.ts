import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './app.homeComponent';
import { RoleComponent } from './app.contactComponent';
import { AboutComponent } from './app.aboutComponent';
//child stuff
import { AdminComponent } from './adminComponent';
import { SuperadminComponent } from './superadminComponent';
import { MemberComponent } from './memberComponent';
//Pipe Stuff
import { CustomPipe } from './customPipe';
//Routing stuff
import { routing } from './app.Routes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule, 
        routing
        
    ],
    declarations: [
        AppComponent,
        CustomPipe,
        HomeComponent,
        RoleComponent,
        AboutComponent,
        AdminComponent,
        SuperadminComponent,
        MemberComponent
    ],
    bootstrap: [AppComponent]

})
export class AppModule {
}