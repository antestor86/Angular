import { Observable, map, of, tap } from 'rxjs';

import { Branch } from '../interfaces/branches.interface';
import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";
import { ReloadService } from './reload.service';
import { Workstation } from '../interfaces/workstation.interface';

@Injectable({ providedIn: 'root' })
export class WorkstationService {
    private url = 'http://localhost:3000/';
    private workstations: Workstation[] = []

    constructor(private http: HttpClient, private reloadService: ReloadService) { }

    /**
     * return Workstation array
     * @returns Observable<Workstation[]>
     */
    getData(): Observable<Workstation[]> {
        if (this.workstations.length) {
            return of(this.workstations);
        }
        return this.http.get<Workstation[]>(`${this.url}workstations`).pipe(
            tap(data => (this.workstations = data)),
        )
    }

    update(workstation: Workstation): Observable<Workstation> {
        return this.http.put<Workstation>(`${this.url}workstations/${workstation.id}`, workstation).pipe(
            tap(() => this.workstations = this.workstations.map(item => item.id === +workstation.id ? workstation : item))
        )
    }

    create(workstation: Workstation): Observable<any> {
        return this.http.post<Workstation>(`${this.url}workstations`, workstation).pipe(
            tap(() => this.workstations = [ ...this.workstations, workstation]),
            tap(() => this.reloadService.setReload())
        )
    }

    ////continue
    removeData(id: number) {
        return this.http.delete<{}>(`${this.url}workstations/${id}`).pipe(
            tap(() => this.workstations = this.workstations.filter(item => item.id !== id)),
            tap(() => this.reloadService.setReload())
        )
    }

    getRegion(): Observable<String[]> {
        return this.http.get<string[]>(`${this.url}regions`)
    }

    getBranch(): Observable<Branch[]> {
        return this.http.get<Branch[]>(`${this.url}branches`)
    }

    getRam(): Observable<String[]> {
        return this.http.get<String[]>(`${this.url}ramtypes`)
    }

    editData(data: Workstation, id: number) {
        return this.http.put(`${this.url}workstations/${id}`, data)
    }

    getById(id: number): Observable<Workstation> {
        return this.getData().pipe(
            map((item: Workstation[]) => item.find(el => el.id === id) as Workstation)
        )
    }
}


