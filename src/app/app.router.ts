import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';

export const router: Routes = [
    { path: '', redirectTo: 'camera', pathMatch: 'full'},
    { path: 'camera', component: CameraComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);