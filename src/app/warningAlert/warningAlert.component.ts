import { Component } from '@angular/core';

@Component ({
    selector: 'app-warningAlert',
    template: `
    <p>warning alert</p>
    `,
    styles: [
        `
        p {
            padding: 20px;
            background-color: pink;
            border: 1px solid red;
            color: red;
        }
        `
    ]
})
export class WarningAlertComponent {

}