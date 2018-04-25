import { Component, ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { DOCUMENT, Title } from '@angular/platform-browser';

import { environment } from '../environments/environment';

@Component({
    selector: 'app-container',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    constructor(
        @Inject(DOCUMENT) private document,
        private titleService: Title) {
    }

    public ngOnInit() {
        this.titleService.setTitle(environment.title);
        this.initDomain();
    }

    private initDomain() {
        this.document.domain = '127.0.0.1';
    }
}
