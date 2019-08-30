import { NgModule } from '@angular/core';
import { Routes,PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

// import { AuthGuard } from './services/AuthGuard.service';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule', canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  // { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule', canActivate: [AuthGuardService] },
  { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' , canActivate: [AuthGuardService] },
  { path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule' , canActivate: [AuthGuardService] },
  { path: 'tab4', loadChildren: './pages/tab4/tab4.module#Tab4PageModule' , canActivate: [AuthGuardService] },
  { path: 'sub', loadChildren: './pages/sub/sub.module#SubPageModule' },
  { path: 'deals', loadChildren: './pages/deals//deals.module#DealsPageModule' },
  
  { path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
