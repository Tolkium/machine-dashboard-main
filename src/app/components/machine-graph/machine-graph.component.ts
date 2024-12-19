import { Component } from '@angular/core';
import { LineMachineService } from '../../services/line-machine.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { MachineGraphButtonComponent } from './machine-graph-button/machine-graph-button.component';
import { MachineStatusDirective } from '../../directives/machine-status.directive';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        DatePipe,
        MachineGraphButtonComponent,
        MachineStatusDirective,
    ],
    selector: 'machine-graph',
    templateUrl: 'machine-graph.component.html',
    styleUrl: './machine-graph.component.scss',
})
export class MachineGraphComponent {
    constructor(protected readonly lineMachineService: LineMachineService) {}
}
