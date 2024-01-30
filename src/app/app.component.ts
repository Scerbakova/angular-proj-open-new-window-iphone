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
    const newWindow = window.open('_blank');
    // Simulate an asynchronous API call to get the link
    this.simulateAsyncApiCall(productRegNr, documentType)
      .then((result: string) => {
        if (result) { 
          if (newWindow) {
            newWindow.location = result;
            newWindow.focus();
          } else {
            console.error(
              'A new window could not be opened. Please check your popup blocker settings.'
            );
          }
        }
        console.log('The document was opened successfully.');
      })
      .catch(() => {
        console.error('An error occurred while trying to open the document.');
      });
  }

  private simulateAsyncApiCall(
    productRegNr: string,
    documentType: any
  ): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      // Simulate an asynchronous API call
      setTimeout(() => {
        // Simulate emitting a link based on the productRegNr and documentType
        const simulatedLink = this.simulateLink(productRegNr, documentType);

        // Resolve the promise with the simulated link
        resolve(simulatedLink);
      }, 1000); // Simulate a delay of 1 second (adjust as needed)
    });
  }

  private simulateLink(productRegNr: string, documentType: any): string {
    // Implement your logic to generate the link based on productRegNr and documentType
    // Replace this with your actual logic
    return `https://www.lvm.lv/images/lvm/Profesionaliem/Me%C5%BEizstr%C4%81de/Pielikumi/Instrukcija_mezizstrades_pakalpojumu_sniedzejiem_par_dokumentu_elektronisko_apriti.pdf`;
  }
}
