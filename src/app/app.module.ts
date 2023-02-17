import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { IgxListModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxBadgeModule, IgxAvatarModule, IgxCalendarModule, IgxToggleModule, IgxDropDownModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MyTasksComponent } from './my-tasks/my-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardsComponent,
    MyTasksComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxListModule,
    IgxIconModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    IgxBadgeModule,
    IgxAvatarModule,
    IgxCalendarModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
