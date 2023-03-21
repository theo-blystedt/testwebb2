import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { AngularFireModule} from "@angular/fire/compat";
import {FirebaseService} from "./services/firebase.service";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp({
      projectId: 'angularassignment2-69539',
      appId: '1:521725264119:web:0990933d3ab61d1501d3f2',
      storageBucket: 'angularassignment2-69539.appspot.com',
      apiKey: 'AIzaSyA4XjfzUUD1uzTmwrqG2ceHS6jBkoochVA',
      authDomain: 'angularassignment2-69539.firebaseapp.com',
      messagingSenderId: '521725264119',
      measurementId: 'G-S6K1QNXDP4',
    }),
    AppRoutingModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
