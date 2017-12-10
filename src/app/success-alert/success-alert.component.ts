import { Component } from '@angular/core';

@Component({
    selector: 'app-success-alert',
    template: `
        <h2>You have successfully avoided danger</h2>

    `,
    styles: [
        `
         h2{
            background-color: palegreen;
            border: 3px solid green;
            padding: 2em;
            box-shadow: 2px 2px 5px #999;
        }
        `
    ]
})
export class SuccessAlertComponent {

    }
