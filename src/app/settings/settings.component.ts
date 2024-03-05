import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChatService } from '../Services/chat';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit, AfterViewInit {
  public roomId: string;
  public messageText: string;
  public messageArray: { user: string; message: string }[] = [];
  private storageArray = [];

  public showScreen = false;
  public currentUser;
  public selectedUser;

  public userList = [
    {
      id: 1,
      name: 'Admin',
      email: 'admin@gmail.com',
      image: 'assets/admin.png',
      roomId: {
        1: 'room-1',
      },
    },
    {
      id: 2,
      name: 'User 1',
      email: '111',
      image: 'assets/farmer.png',
      roomId: {
        1: 'room-1',
      },
    },
  ];

  constructor(
    private chatService: ChatService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.sharedService.currentUsername.subscribe((username) => {
      console.log('shared service', username);
      this.currentUser = this.userList.find(
        (user) => user.email === username.toString()
      );
      console.log('current user', this.currentUser);
    });
    this.chatService
      .getMessage()
      .subscribe((data: { user: string; room: string; message: string }) => {
        if (this.roomId) {
          setTimeout(() => {
            this.storageArray = this.chatService.getStorage();
            const storeIndex = this.storageArray.findIndex(
              (storage) => storage.roomId === this.roomId
            );
            console.log(storeIndex);
            this.messageArray = this.storageArray[storeIndex]?.chats || [];
          }, 500);
        }
      });
  }

  ngAfterViewInit(): void {
    // Additional initialization if needed
  }

  selectUserHandler(email: string): void {
    console.log('Selected User Email:', email);
    console.log('Current User:', this.currentUser);

    this.selectedUser = this.userList.find((user) => user.email === email);

    console.log('Selected User Room IDs:', this.selectedUser?.roomId);
    console.log('Current User ID:', this.currentUser?.id);

    if (this.selectedUser && this.currentUser) {
      this.roomId = this.selectedUser.roomId[this.currentUser.id];
      console.log('Resolved Room ID:', this.roomId);

      this.messageArray = [];

      this.storageArray = this.chatService.getStorage();
      console.log('Storage Array:', this.storageArray);

      const storeIndex = this.storageArray.findIndex(
        (storage) => storage.roomId === this.roomId
      );
      console.log('Store Index:', storeIndex);

      if (storeIndex > -1) {
        this.messageArray = this.storageArray[storeIndex]?.chats || [];
        console.log('Messages in the Room:', this.messageArray);
      }

      this.join(this.currentUser.name, this.roomId);
    }
  }

  join(username: string, roomId: string): void {
    console.log(username, roomId);
    this.chatService.joinRoom({ user: username, room: roomId });
  }

  sendMessage(): void {
    this.chatService.sendMessage({
      user: this.currentUser.name,
      room: this.roomId,
      message: this.messageText,
    });

    this.storageArray = this.chatService.getStorage();
    const storeIndex = this.storageArray.findIndex(
      (storage) => storage.roomId === this.roomId
    );

    if (storeIndex > -1) {
      this.storageArray[storeIndex]?.chats.push({
        user: this.currentUser.name,
        message: this.messageText,
      });
    } else {
      const updateStorage = {
        roomId: this.roomId,
        chats: [
          {
            user: this.currentUser.name,
            message: this.messageText,
          },
        ],
      };

      this.storageArray.push(updateStorage);
    }

    this.chatService.setStorage(this.storageArray);
    this.messageText = '';
  }
}
