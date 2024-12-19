import { Machine } from '../types/app.types';

export const LINE_MACHINES_MOCK: Machine[] = [
    {
        name: 'Scale',
        iconName: 'system_update_alt',
        status: 'running',
    },
    {
        name: 'Attacher',
        iconName: 'chrome_reader_mode',
        status: 'alarm',
    },
    {
        name: 'Packer',
        iconName: 'call_to_action',
        status: 'running',
    },
    {
        name: 'Closer',
        iconName: 'grid_on',
        status: 'warning',
    },
];
