import { MusicFormComponent } from './components/music-form/music-form.component';
import { NgModule } from '@angular/core';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'musicas', component: MusicListComponent },
    { path: 'musicas/nova', component: MusicFormComponent },
    { path: 'musicas/editar/:id', component: MusicFormComponent },
    { path: 'musicas/deletar/:id', component: MusicListComponent },
    { path: 'artistas', component: ArtistListComponent },
    { path: 'albuns', component: AlbumListComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting { }
