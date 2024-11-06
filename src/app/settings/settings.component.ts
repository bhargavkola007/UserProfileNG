import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone:true,
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  imports:[CommonModule]
})
export class SettingsComponent implements OnInit {
  isOpen = false;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.settingsModalStatus.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

  closeModal() {
    this.modalService.closeSettingsModal();
  }
}
