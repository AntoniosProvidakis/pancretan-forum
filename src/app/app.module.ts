import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';


import { SuiModule } from 'ng2-semantic-ui';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PeopleComponent } from './people/people.component';
import { NegotiationsTableComponent } from './negotiations-table/negotiations-table.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './home/interests/interests.component';
import { ScheduleOfDayComponent } from './home/schedule-of-day/schedule-of-day.component';
import { ExhibitionTableCardsComponent } from './home/exhibition-table-cards/exhibition-table-cards.component';
import { ExhibitionTableCardComponent } from './home/exhibition-table-cards/exhibition-table-card/exhibition-table-card.component';
import { ExhibitionProductComponent } from './home/exhibition-table-cards/exhibition-product/exhibition-product.component';
import { ExhibitionTableComponent } from './home/exhibition-table-cards/exhibition-table/exhibition-table.component';

// export const firebaseConfig = {
//   apiKey: 'AIzaSyAVOLCcOnaPRDa2_QgRKDqdrk9wuCzWS7c',
//   authDomain: 'pancretan-forum.firebaseapp.com',
//   databaseURL: 'https://pancretan-forum.firebaseio.com',
//   projectId: 'pancretan-forum',
//   storageBucket: 'pancretan-forum.appspot.com',
//   messagingSenderId: '867139335721'
// }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PeopleComponent,
    NegotiationsTableComponent,
    ScheduleComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    InterestsComponent,
    ScheduleOfDayComponent,
    ExhibitionTableCardsComponent,
    ExhibitionTableCardComponent,
    ExhibitionProductComponent,
    ExhibitionTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SuiModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
