import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EventsComponent } from './pages/events/events.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { ModelComponent } from './pages/model/model.component';
import { SupportComponent } from './pages/support/support.component';
import { HistoricalsComponent } from './pages/historicals/historicals.component';
import { MapComponent } from './pages/map/map.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'events', component: EventsComponent},
    { path: 'achievements', component: AchievementsComponent},
    { path: 'model', component: ModelComponent},
    { path: 'support', component: SupportComponent},
    { path: 'historicals', component: HistoricalsComponent},
    { path: 'map', component: MapComponent},
    { path: '', component: LoginComponent },
];
