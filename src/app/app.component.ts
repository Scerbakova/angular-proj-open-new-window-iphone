import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  prepareUrl(): string {
    return (
      'http://' +
      'www.lvm.lv/images/lvm/Profesionaliem/Mežizstrāde/Pielikumi/Instrukcija_mezizstrades_pakalpojumu_sniedzejiem_par_dokumentu_elektronisko_apriti.pdf'
    );
  }

  openDocumentByEnum() {
    const newWindow = window.open(
      'https://www.lvm.lv/images/lvm/Profesionaliem/Me%C5%BEizstr%C4%81de/Pielikumi/Instrukcija_mezizstrades_pakalpojumu_sniedzejiem_par_dokumentu_elektronisko_apriti.pdf',
      '_blank'
    );

    if (newWindow) {
      newWindow.focus();
    } else {
      console.error(
        'A new window could not be opened. Please check your popup blocker settings.'
      );
    }
  }
}
