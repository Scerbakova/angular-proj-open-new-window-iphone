import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LinkService } from './services/linkservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private linkService: LinkService) {}
  prepareUrl(): string {
    return (
      'http://' +
      'www.lvm.lv/images/lvm/Profesionaliem/Mežizstrāde/Pielikumi/Instrukcija_mezizstrades_pakalpojumu_sniedzejiem_par_dokumentu_elektronisko_apriti.pdf'
    );
  }

  openDocumentByEnum(productRegNr: string, documentType: any): void {

    // Simulate getting a link from the service
    this.linkService.getLinkObservable().subscribe((result: string) => {
      if (result) {
        const newWindow = window.open(result, '_blank');

        if (newWindow) {
          newWindow.focus();
        } else {
          console.error('A new window could not be opened. Please check your popup blocker settings.');
        }
      }
    });
    
    // Simulate emitting a link based on the productRegNr and documentType
    const simulatedLink = this.simulateLink(productRegNr, documentType);
    this.linkService.simulateLink(simulatedLink);
  }

  private simulateLink(productRegNr: string, documentType: any): string {
    // Implement your logic to generate the link based on productRegNr and documentType
    // Replace this with your actual logic
    return `https://www.lvm.lv/images/lvm/Profesionaliem/Me%C5%BEizstr%C4%81de/Pielikumi/Instrukcija_mezizstrades_pakalpojumu_sniedzejiem_par_dokumentu_elektronisko_apriti.pdf`;
  }

}
