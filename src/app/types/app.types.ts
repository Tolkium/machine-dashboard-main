export interface Machine {
    name: string;
    iconName: string;
    status: MachineStatus;
}

const MACHINE_STATE_VALUES = ['running', 'alarm', 'warning'] as const;

export type MachineStatus = (typeof MACHINE_STATE_VALUES)[number];
