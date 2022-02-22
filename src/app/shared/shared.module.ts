import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    MediaPlayerComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent
  ]
})
export class SharedModule { }
