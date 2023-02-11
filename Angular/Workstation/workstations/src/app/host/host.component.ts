import {ActivatedRoute, Params, Router} from '@angular/router';
import {Component, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable, switchMap, Subject, throwError } from 'rxjs';

import { Branch } from "../interfaces/branches.interface";
import { WorkstationService } from '../services/workstation.service';
import {Workstation} from "../interfaces/workstation.interface";
import {catchError, map, takeUntil, tap} from "rxjs/operators";

@Component({
    selector: 'app-host',
    templateUrl: './host.component.html',
    styleUrls: ['./host.component.css']
})
export class HostComponent implements OnDestroy{
    id!: number;
    regions$: Observable<String[]> = this.data.getRegion();
    branches$: Observable<Branch[]> = this.data.getBranch();
    ram$: Observable<String[]> = this.data.getRam();
    form!: FormGroup;
    private unsubscribe$ = new Subject<void>();

    // Get own workstation observable from dynamic routing
    workstation$ = this.route.params.pipe(
        map((params: Params) => +params['id']),
        tap(id => this.id = id),
        switchMap(id => this.data.getById(id).pipe(
            tap(val => this.formInit(val)),
            catchError(err => throwError(err))
        ))
    );

    //hard and os types arrays
    hards = ['HDD', 'SSD'];
    osList = [
        { name: "Windows 10 Enterprise", id: 1 },
        { name: "Windows 10 Enterprise LTSC", id: 2 },
        { name: "Windows 11", id: 3 },
        { name: "WIndows 10 Etreprise LTSB", id: 4 }
    ]

    constructor(
        private route: ActivatedRoute,
        private data: WorkstationService,
        private router: Router,
        private fb: FormBuilder
    ) { }

    // init form function
    private formInit(data: Workstation): void {
        this.form = this.fb.group({
            ipAddress: [data.ipAddress, Validators.pattern('^([0-9] {1,3})\.([0-9] {1,3})\.([0-9] {1,3})\.([0-9] {1-3})$')],
            cpu: [data.cpu, Validators.required],
            board: [data.board],
            ram: [data.ram, Validators.pattern('^([0-9] {1,3})')],
            capacity: [data.capacity, Validators.pattern('^([0-9] {1-4})')],
            hostname: [data.hostname, Validators.required],
            barcode: [data.barcode, Validators.minLength(8)],
            types: this.fb.group({
                ramType: [data.types.ramType, Validators.pattern('^D.+|R ([2-4] {1})')],
                region: [data.types.region, Validators.required],
                branch: [data.types.branch, Validators.required],
                hdd: [data.types.hdd],
                os: [data.types.os, Validators.required]
            })
        })
    }

    /**
     * add workstation
     * @returns void
     */
    submit(): void {
        const formData = { ...this.form.value, id: this.id }
        this.data.update(formData).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.close()
        })
    }

    close(): void {
        this.router.navigate(['/hosts'])
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
