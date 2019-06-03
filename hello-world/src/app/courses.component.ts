import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',

    // template: `
    //     <h2 [textContent]="title"></h2>
    //     <img src="{{ imageUrl }}"/>
    // // `
    // template: `
    //         <h2>{{ title }}</h2>
    //         <img [src]="imageUrl"/>
    //         <table>
    //             <tr>
    //                 <td [attr.colspan]="colSpan"></td>
    //             </tr>
    //         </table>
    // `
    template:`
            <button class="btn btn-primary">Save</button>
    `


})

export class CoursesComponent {
    title = 'List of courses';
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
}