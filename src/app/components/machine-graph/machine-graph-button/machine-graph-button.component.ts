import { Component, Input } from '@angular/core';
import { MachineStatusDirective } from '../../../directives/machine-status.directive';
import { Machine } from '../../../types/app.types';

@Component({
    standalone: true,
    imports: [MachineStatusDirective],
    selector: 'machine-graph-button',
    templateUrl: './machine-graph-button.component.html',
    styleUrl: './machine-graph-button.component.scss',
})
export class MachineGraphButtonComponent {
    @Input({ required: true }) machine!: Machine;
    constructor() {}
}
