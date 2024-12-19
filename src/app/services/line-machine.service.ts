import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LINE_MACHINES_MOCK } from '../mocks/line-machines.mock';
import { Machine } from '../types/app.types';

@Injectable({ providedIn: 'root' })
export class LineMachineService {
    private readonly machinesSubject: BehaviorSubject<Machine[]> =
        new BehaviorSubject<Machine[]>(LINE_MACHINES_MOCK);
    public machines$: Observable<Machine[]> =
        this.machinesSubject.asObservable();

    constructor() {}
}
