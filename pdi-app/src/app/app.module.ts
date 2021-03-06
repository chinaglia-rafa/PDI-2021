import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorComponent } from './pages/editor/editor.component';
import { AboutComponent } from './pages/about/about.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { FiltersComponent } from './components/filters/filters.component';
import { MatTabsModule } from '@angular/material/tabs';
import { InvertComponent } from './components/filters/invert/invert.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ConfigComponent } from './components/filters/config/config.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RealcesComponent } from './components/filters/realces/realces.component';



@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ImageUploaderComponent,
    ImagePreviewComponent,
    AboutComponent,
    FiltersComponent,
    InvertComponent,
    ConfigComponent,
    RealcesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    HttpClientModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
