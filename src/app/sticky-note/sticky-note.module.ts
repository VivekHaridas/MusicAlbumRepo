import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { StickBoardComponent } from './stick-board/stick-board.component';
import { HeaderComponent } from 'src/app/sticky-note/header/header.component';
import { AddNewNoteButtonComponent } from './add-new-note-button/add-new-note-button.component';
import { ForkComponent } from './fork/fork.component';
import { RouterModule, Routes } from '@angular/router';
import { ChangeViewComponent } from './change-view/change-view.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule} from '@angular/forms';
import { AlbumFormComponent } from 'src/app/album-form/album-form.component';
import { AlbumListComponent } from 'src/app/album-list/album-list.component';
import { ViewAlbumDetailsComponent } from './view-album-details/view-album-details.component';
import { HttpClientModule } from '@angular/common/http';

const appNavigations : Routes = [
  {path:"",component:AddNewNoteButtonComponent},
  {path:"fork",component:ForkComponent},
  {path:"change-view",component:ChangeViewComponent},
  {path:"log-in",component:LogInComponent},
  {path:"sign-up",component:SignUpComponent},
  {path:"view-album-details/:id",component:ViewAlbumDetailsComponent},
  
];
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(appNavigations),
    FormsModule
  ],
  declarations: [NoteComponent, StickBoardComponent,HeaderComponent, AddNewNoteButtonComponent, ForkComponent, ChangeViewComponent, LogInComponent, SignUpComponent, AlbumFormComponent,AlbumListComponent, ViewAlbumDetailsComponent],
  exports:[StickBoardComponent,
          NoteComponent,
          HeaderComponent,
          AddNewNoteButtonComponent,
          ForkComponent,
          ChangeViewComponent,
          LogInComponent,
          SignUpComponent,
          AlbumFormComponent,
          AlbumListComponent
        ]
})
export class StickyNoteModule { }
