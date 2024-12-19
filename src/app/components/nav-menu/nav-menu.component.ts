import { Component, OnInit } from '@angular/core';
import { LineMachineService } from '../../services/line-machine.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { NavMenuMachineButtonComponent } from './nav-menu-machine-button/nav-menu-machine-button.component';

@Component({
    standalone: true,
    imports: [AsyncPipe, DatePipe, NavMenuMachineButtonComponent],
    selector: 'nav-menu',
    templateUrl: 'nav-menu.component.html',
    styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent implements OnInit {
    protected currentDateTime!: Date;
    protected readonly userName: string = 'John Dudu';

    constructor(protected readonly lineMachineService: LineMachineService) {}

    ngOnInit(): void {
        this.updateDateTime();
        setInterval(() => this.updateDateTime(), 1000);
    }

    updateDateTime() {
        this.currentDateTime = new Date();
    }
}
