import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorHandler } from './services/common/http/http-error-handler.service';
import { HttpErrorInterceptor } from './services/common/http/http-error.interceptor';
import { HttpService } from './services/common/http/http.service';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NoopAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserModule
  ],
  providers: [
    HttpErrorInterceptor,
    HttpClientModule,
    HttpErrorHandler,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
