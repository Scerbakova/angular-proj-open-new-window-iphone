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

      return "http://" + 'www.lvm.lv/images/lvm/Profesionaliem/Mežizstrāde/Pielikumi/Instrukcija_mezizstrades_pakalpojumu_sniedzejiem_par_dokumentu_elektronisko_apriti.pdf';

  }
}
