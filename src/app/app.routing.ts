import { NgModule } from '@angular/core';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { AlbumFormComponent } from './components/album-form/album-form.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistFormComponent } from './components/artist-form/artist-form.component';
import { MusicDetailsComponent } from './components/music-details/music-details.component';
import { MusicFormComponent } from './components/music-form/music-form.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'musicas', component: MusicListComponent, canActivate: [AuthGuard] },
    { path: 'musicas/nova', component: MusicFormComponent, canActivate: [AuthGuard] },
    { path: 'musicas/editar/:id', component: MusicFormComponent, canActivate: [AuthGuard] },
    { path: 'musicas/deletar/:id', component: MusicListComponent, canActivate: [AuthGuard] },
    { path: 'musicas/detalhes/:id', component: MusicDetailsComponent, canActivate: [AuthGuard] },
    { path: 'artistas', component: ArtistListComponent, canActivate: [AuthGuard] },
    { path: 'artistas/novo', component: ArtistFormComponent, canActivate: [AuthGuard] },
    { path: 'artistas/editar/:id', component: ArtistFormComponent, canActivate: [AuthGuard] },
    { path: 'artistas/deletar/:id', component: ArtistListComponent, canActivate: [AuthGuard] },
    { path: 'artistas/detalhes/:id', component: ArtistDetailsComponent, canActivate: [AuthGuard] },
    { path: 'albuns', component: AlbumListComponent, canActivate: [AuthGuard] },
    { path: 'albuns/novo', component: AlbumFormComponent, canActivate: [AuthGuard] },
    { path: 'albuns/editar/:id', component: AlbumFormComponent, canActivate: [AuthGuard] },
    { path: 'albuns/deletar/:id', component: AlbumListComponent, canActivate: [AuthGuard] },
    { path: 'albuns/detalhes/:id', component: AlbumDetailsComponent, canActivate: [AuthGuard] }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting { }
