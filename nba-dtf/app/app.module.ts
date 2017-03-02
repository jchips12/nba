import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRouter } from './app.router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent} from './not-found/not-found.component';


@NgModule({
    imports: [BrowserModule, appRouter],
    declarations: [AppComponent, HomeComponent, LoginComponent, RegisterComponent, NotFoundComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
