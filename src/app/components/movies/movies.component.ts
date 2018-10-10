import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Subject } from 'rxjs/Subject'
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Rx';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  searchterm: string;
 
  startAt = new Subject();
  endAt = new Subject();
 
  movies;
  allMovies;
  results: Object;
  searchTerm$ = new Subject<string>();

  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();
  constructor(private afs: AngularFirestore) {
     }

  ngOnInit() {
    
      this.getallmovies().subscribe((movies) => {
        this.allMovies = movies;
      })
      Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
        this.firequery(value[0], value[1]).subscribe((movies) => {
          this.movies = movies;
        })
      })
    }
      search($event) {
        let q = $event.target.value;
        if (q != '') {
          this.startAt.next(q);
          this.endAt.next(q + "\uf8ff");
        }
        else {
          this.movies = this.allMovies;
        }
      }
     
      firequery(start, end) {
        return this.afs.collection('epl', ref => ref.limit(4).orderBy('movie').startAt(start).endAt(end)).valueChanges();
      }
     
      getallmovies() {
        return this.afs.collection('epl', ref => ref.orderBy('movie')).valueChanges();
      }
    
  }
  
  



