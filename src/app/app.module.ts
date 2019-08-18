import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { AddlistComponent } from './addlist/addlist.component';
import { ViewlistComponent } from './viewlist/viewlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainComponent,
    AddlistComponent,
    ViewlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'addlist',
        component:AddlistComponent
      },
     {
       path:'viewlist',
       component:ViewlistComponent
     }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
