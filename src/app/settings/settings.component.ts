import { Component } from '@angular/core';
import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChatService } from '../Services/chat';
import { AuthService } from '../_login_services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, AfterViewInit {
  @ViewChild('popup', { static: false }) popup: any;

  public roomId: string;
  public messageText: string;
  public messageArray: { user: string, message: string }[] = [];
  private storageArray = [];

  public showScreen = false;
  public role: string = ''; // Declare role variable to store the input text
  public currentUser;
  public selectedUser;

  public userList = [
    {
      id: 1,
      name: 'Admin',
      role: 'admin',
      image: 'assets/admin.png',
      roomId: {
        2: 'room-1',
        3: 'room-2',
        4: 'room-3'
      }
    },
    {
      id: 2,
      name: 'User',
      role: 'user',
      image: 'assets/user.png',
      roomId: {
        1: 'room-1',
        3: 'room-4',
        4: 'room-5'
      }
    },
  ];

  constructor(
    private modalService: NgbModal,
    private chatService: ChatService,
    public auth: AuthService
  ) {
  }

  ngOnInit(): void {
    this.chatService.getMessage()
      .subscribe((data: { user: string, room: string, message: string }) => {
        // this.messageArray.push(data);
        if (this.roomId) {
          setTimeout(() => {
            this.storageArray = this.chatService.getStorage();
            const storeIndex = this.storageArray
              .findIndex((storage) => storage.roomId === this.roomId);
            this.messageArray = this.storageArray[storeIndex].chats;
          }, 500);
        }
      });
  }

  ngAfterViewInit(): void {
    this.openPopup(this.popup);
  }

  openPopup(content: any): void {
    this.modalService.open(content, { backdrop: false, centered: true });
  }

  login(dismiss: any): void {
    if (this.auth.person_type != this.role)
    {
      return;
    }
    this.currentUser = this.userList.find(user => user.role === this.role.toString());
    this.userList = this.userList.filter((user) => user.role !== this.role.toString());

    if (this.currentUser) {
      this.showScreen = true;
      dismiss();
    }
  }

  selectUserHandler(phone: string): void {
    this.selectedUser = this.userList.find(user => user.role === phone);
    this.roomId = this.selectedUser.roomId[this.currentUser.id];
    this.messageArray = [];

    this.storageArray = this.chatService.getStorage();
    const storeIndex = this.storageArray
      .findIndex((storage) => storage.roomId === this.roomId);

    if (storeIndex > -1) {
      this.messageArray = this.storageArray[storeIndex].chats;
    }

    this.join(this.currentUser.name, this.roomId);
  }

  join(username: string, roomId: string): void {
    this.chatService.joinRoom({ user: username, room: roomId });
  }

  sendMessage(): void {
    this.chatService.sendMessage({
      user: this.currentUser.name,
      room: this.roomId,
      message: this.messageText
    });

    this.storageArray = this.chatService.getStorage();
    const storeIndex = this.storageArray
      .findIndex((storage) => storage.roomId === this.roomId);

    if (storeIndex > -1) {
      this.storageArray[storeIndex].chats.push({
        user: this.currentUser.name,
        message: this.messageText
      });
    } else {
      const updateStorage = {
        roomId: this.roomId,
        chats: [{
          user: this.currentUser.name,
          message: this.messageText
        }]
      };

      this.storageArray.push(updateStorage);
    }

    this.chatService.setStorage(this.storageArray);
    this.messageText = '';
  }
}
