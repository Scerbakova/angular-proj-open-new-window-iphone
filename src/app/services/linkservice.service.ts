import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  private linkSubject = new Subject<string>();

  getLinkObservable(): Observable<string> {
    return this.linkSubject.asObservable();
  }

  // Simulate emitting a link
  simulateLink(link: string) {
    this.linkSubject.next(link);
  }
}