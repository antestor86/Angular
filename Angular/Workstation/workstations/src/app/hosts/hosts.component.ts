import { Component, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';
import { ReloadService } from '../services/reload.service';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { Workstation } from '../interfaces/workstation.interface';
import { WorkstationService } from '../services/workstation.service';
import { repeatWhen ,filter,of} from 'rxjs';

import {faIdBadge } from "@fortawesome/free-solid-svg-icons";
import {Find} from "../interfaces/find.interface";




@Component({
    selector: 'app-hosts',
    templateUrl: './hosts.component.html',
    styleUrls: ['./hosts.component.css'],
})
export class HostsComponent implements OnDestroy {
    faCocktain = faIdBadge;
    workstations!:Workstation[];
    searchForm:Find = {os:"",region:"",branch:""};
    private sub = new SubSink();
    workstations$: Observable<Workstation[]> = this.workstationService.getData().pipe(
        repeatWhen(() => this.reloadService.repeat())
    )
    id: any;
    searchStatuss:boolean = false;
    filterValue:any




    constructor(
        private workstationService: WorkstationService,
        private router: Router,
        private reloadService: ReloadService
    ) { }

    //Remove Process Start
    removeItem(id: any): void {
        this.sub.add(
            this.workstationService.removeData(id).subscribe()
        )
    }

    openPage(id: number): void {
        this.sub.add(this.workstationService.getById(id).subscribe(() => {
            this.router.navigate(['hosts/', id])
        }))
    }

    navigate(id: number, mode: 'viewMode' | 'editMode') {
        this.router.navigate([`host/${mode}`, id]);
    }


    getMessage(value:any){
        this.searchForm ={...value};
        this.workstationService.getData().subscribe((data:any)=>{
            console.log(this.searchForm)
            this.searchStatuss = true
            this.filterValue =  data.filter((item:any)=>{
                return item.types.os.includes(this.searchForm.os) && item.types.branch.includes(this.searchForm.branch) && item.types.region.includes(this.searchForm.region)
            })
            console.log(this.filterValue)
        })
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }
}
