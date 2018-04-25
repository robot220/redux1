import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { PeopleActions } from '../../../store/actions/action-providers';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { IPerson, PersonType } from '../models';

@Component({
    selector: 'cmp-people',
    templateUrl: './people.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent implements OnInit {

    @select(['counter']) public people$: Observable<IPerson>;

    public male: IPerson[] = [];
    public female: IPerson[] = [];
    public people: IPerson[] = [];

    constructor(private peopleActions: PeopleActions) {
        window['peopleComponent'] = this;
    }

    public create(): void {
        const time = new Date().getTime().toString();
        this.peopleActions.create({
            name: time,
            type: PersonType.Male,
        });
    }

    ngOnInit(): void {
        this.people$.subscribe((person: IPerson) => {
            this.people.push(person);
        });
    }
}
