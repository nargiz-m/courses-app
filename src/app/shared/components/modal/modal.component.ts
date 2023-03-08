import { Input, Output, EventEmitter, Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title?: string;
  @Input() message?: string;
  @Input() okButtonText?: string;
  @Input() cancelButtonText?: string;
  @Output() result = new EventEmitter<boolean>();

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  sendResult(result?: boolean) {
    this.result.emit(result)
  }
}
