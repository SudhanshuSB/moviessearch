import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { MoviesComponent } from './components/movies/movies.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AngularFirestore,
    AngularFirestoreModule,
       
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFirestore,
        routing,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule.enablePersistence()
      
  ],
  providers: [ 
    

    // provider used to create fake backend
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
