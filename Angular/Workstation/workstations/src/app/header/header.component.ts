import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Branch } from '../interfaces/branches.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Workstation } from '../interfaces/workstation.interface';
import { WorkstationService } from '../services/workstation.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    // expression for Button active style
    activeButton: boolean | any;

    //For form open or close expression
    openFormStatuss: boolean = true;

    //X imgae source
    closeImageSource = '../../assets/images/closeicon.png';
    //get region and brabnches observables
    regions$!: Observable<String[]>;
    branches$!: Observable<Branch[]>;

    //hard and os types arrays
    hards = ['HDD', 'SSD'];
    os = [
        "Windows 10 Enterprise",
        "Windows 10 Enterprise LTSC",
        "Windows 11",
        "WIndows 10 Etreprise LTSB"

    ]

    //for ram type
    ram$!: Observable<String[]>
    //form default
    form!: FormGroup;
    //for workstation interface
    workstation!: Workstation[];

    constructor(private router: Router, private workstationService: WorkstationService) { }

    ngOnInit(): void {
        this.getData();
        this.getBranches();
        this.getRamTypes();
        this.formInit();
    }

    //FOR OPEN ADD WORKSTATION FORM IN CSS STYLE
    toogle() {
        this.activeButton = true;
        console.log(this.activeButton);
    }

    //FOR CLOSE FORM WITH CANCEL BUTTON
    leave() {
        this.activeButton = false;
        console.log(this.activeButton);
    }


    //fUunctions for routing
    openStations() {
        this.router.navigate(['/hosts']);
    }

    openTerminals() {
        this.router.navigate(['/other']);
    }

    //For open add new workstation form
    openForm() {
        this.openFormStatuss = false;
        console.log('form opened');
    }
    //For close add ne workstation form
    closeBlock() {
        this.openFormStatuss = true;
        console.log('test')
    }
    //Get main data
    getData(): void {
        this.regions$ = this.workstationService.getRegion();
    }
    //get branches
    getBranches(): void {
        this.branches$ = this.workstationService.getBranch();
    }
    //get ram types
    getRamTypes(): void {
        this.ram$ = this.workstationService.getRam();
    }

    //init form function
    formInit() {
        this.form = new FormGroup({

            ipAddress: new FormControl('', Validators.pattern('^([0-9] {1,3})\.([0-9] {1,3})\.([0-9] {1,3})\.([0-9] {1-3})$')),
            cpu: new FormControl('', Validators.required),
            board: new FormControl(''),
            ram: new FormControl('', Validators.pattern('^([0-9] {1,3})')),
            capacity: new FormControl('', Validators.pattern('^([0-9] {1-4})')),
            hostname: new FormControl('', Validators.required),
            barcode: new FormControl('', Validators.minLength(8)),
            types: new FormGroup({
                ramType: new FormControl('DDR3', Validators.pattern('^D.+|R ([2-4] {1})')),
                region: new FormControl('', Validators.required),
                branch: new FormControl('', Validators.required),
                hdd: new FormControl(''),
                os: new FormControl('', Validators.required)

            })
        }
        )
    }

    //add workstation
    submit() {
        const formData = { ...this.form.value }
        this.workstationService.create(formData).subscribe(() => {
            this.closeBlock()
        })
    }

    onChange(value: String) {
        this.form.value.region = value
    }
}
