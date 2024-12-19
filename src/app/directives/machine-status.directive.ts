import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { MachineStatus } from '../types/app.types';

@Directive({
    selector: '[appMachineStatus]',
    standalone: true,
})
export class MachineStatusDirective implements OnInit {
    @Input({ required: true }) appMachineStatus!: MachineStatus;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
    ) {}

    ngOnInit(): void {
        this.updateStyles();
    }

    private updateStyles(): void {
        const button = this.el.nativeElement;
        const icon = button.querySelector('.status-icon');

        if (!this.appMachineStatus) {
            return;
        }

        switch (this.appMachineStatus) {
            case 'running':
                this.setButtonStyle(button, '#dcdcdc', '#313131');
                this.setIconStyle('settings_backup_restore', icon, '#7fa723');
                break;
            case 'warning':
                this.setButtonStyle(button, '#ff9705', 'white');
                this.setIconStyle('warning', icon);
                break;
            case 'alarm':
                this.setButtonStyle(button, '#fe3636', 'white');
                this.setIconStyle('error_outline', icon);
                break;
            default:
                break;
        }
    }

    private setButtonStyle(
        button: HTMLElement,
        backgroundColor: string,
        textColor: string,
    ): void {
        this.renderer.setStyle(button, 'background-color', backgroundColor);
        this.renderer.setStyle(button, 'color', textColor);
    }

    private setIconStyle(
        iconName: string,
        icon?: Element,
        color?: string,
    ): void {
        if (!icon) return;
        if (color) {
            this.renderer.setStyle(icon, 'color', color);
        }
        this.renderer.setProperty(icon, 'innerHTML', iconName);
    }
}
