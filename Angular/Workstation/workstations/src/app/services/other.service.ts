import { BehaviorSubject, Observable, Subscription, pipe, tap } from 'rxjs';

import { Branch } from '../interfaces/branches.interface';
import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";
import { SubSink } from 'subsink';
import { Workstation } from '../interfaces/workstation.interface';

@Injectable({ providedIn: 'root' })
export class OtherService {
    //set default url
    private url = 'http://localhost:3000/';

    //create workstations array
    workstations$!: Observable<Workstation[]>

    //new Array workstation type for set and delete data
    workstationList: Workstation[] = []

    //create subscription
    private sub = new SubSink



    constructor(private http: HttpClient) { }

    /**
     * return Workstation array
     * @returns Observable<Workstation[]>
     */
    getData(): Observable<Workstation[]> {
        return this.http.get<Workstation[]>(`${this.url}other`)
    }



    /*getWorkstations(){
       this.sub.add(
        this.http.get<Workstation[]>(`${this.url}other`).subscribe(
            data=>{
              this.workstationList = data
            }
        )
       )
    }*/

    //add new workstation
    setData(workstation: Workstation): Observable<Workstation> {
        return this.http.post<Workstation>(`${this.url}other`, workstation)
    }

    //remove workstation
    removeData(id: number) {
        return this.http.delete<{}>(`${this.url}other/${id}`).pipe(
            tap(console.log),
            tap(() => {
                this.workstationList = this.workstationList.filter((item) => {
                    return item.id != id;
                })
            })
        )

    }

    //Get Region list   
    getRegion(): Observable<String[]> {
        return this.http.get<string[]>(`${this.url}regions`)
    }

    //Get Branch List
    getBranch(): Observable<Branch[]> {
        return this.http.get<Branch[]>(`${this.url}branches`)
    }

    //get ram types
    getRam(): Observable<String[]> {
        return this.http.get<String[]>(`${this.url}ramtypes`)
    }




}


