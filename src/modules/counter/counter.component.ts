import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CounterActions } from '../../store/actions/action-providers';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

@Component({
    selector: 'cmp-counter',
    templateUrl: './counter.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

    @select(['counter']) public counter$: Observable<any>;

    public counter: number;

    constructor(private counterActions: CounterActions) {}

    increase(): void {
        this.counterActions.increase(1);
    }

    decrease(): void {
        this.counterActions.decrease(1);
    }

    ngOnInit(): void {
        this.counter$.subscribe(value => {
            this.counter = value;
        });
    }
}
