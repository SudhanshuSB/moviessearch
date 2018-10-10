import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './components/movies/movies.component';


const appRoutes: Routes = [
   

    // otherwise redirect to home
    {path:'',component:MoviesComponent},
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);