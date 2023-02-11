import { Observable, Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ReloadService {
    private reload$ =  new Subject<void>();
    /**
     * Listen to this method  when you want to thing when something hapen in an other place  
     * @returns Observable void
     */
    repeat(): Observable<void> {
        return this.reload$.asObservable();
    }
    
    setReload(): void {
        this.reload$.next();
    }
}