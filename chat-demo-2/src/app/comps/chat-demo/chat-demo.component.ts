import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-demo',
  templateUrl: './chat-demo.component.html',
  styleUrl: './chat-demo.component.scss'
})
export class ChatDemoComponent {
  messages: any[] = [];

  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    const files = !event.files ? [] : event.files.map((file : any) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: reply,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: userName,
        avatar: avatar,
      },
    });
  }
}
