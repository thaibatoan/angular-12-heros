import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from '../core/services/message.service';

@NgModule({
  imports: [CommonModule],
  declarations: [MessagesComponent],
  export: [MessagesComponent],
})
export class SharedModule {}
