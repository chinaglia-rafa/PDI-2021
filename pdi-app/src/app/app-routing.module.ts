import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { EditorComponent } from './pages/editor/editor.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/intro' },
  { path: 'editor', component: EditorComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
