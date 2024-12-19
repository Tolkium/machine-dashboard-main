import { Component } from '@angular/core';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { LineMachineService } from './services/line-machine.service';
import { MachineGraphComponent } from './components/machine-graph/machine-graph.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [NavMenuComponent, MachineGraphComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'machine-dashboard';

    constructor(protected lineMachineService: LineMachineService) {}
}
