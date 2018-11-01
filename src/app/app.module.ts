import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StickyNoteModule } from 'src/app/sticky-note/sticky-note.module';
import { ForkComponent } from 'src/app/sticky-note/fork/fork.component';
import { AlbumFormComponent } from './album-form/album-form.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent
    
   
   
  ],
  imports: [
    BrowserModule,
    StickyNoteModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})

export class AppModule { 
 
}
