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
    // template:`
    //         <button class="btn btn-primary" [class.active] ="isActive" >Save</button>
    // `
    // template:`
    //         <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    // `
    // template:`
    //     <button (click)="onSave()">Save</button>
    // `
    // template:`
    //     <button (click)="onSave($event)">Save</button>
    // `
    // template:`
    //     <div (click)="onDivClicked()">
    //         <button (click)="onSave($event)">Save</button>
    //     </div>
    //     `
    // template:`
    //     <input (keyup)="onKeyUp($event)" />
    //     `
    template: `
        <input (keyup.enter)="onKeyUp()" />
        `
})

export class CoursesComponent {
    // title = 'List of courses';
    // imageUrl = "http://lorempixel.com/400/200";
    // colSpan = 2;
    // isActive = false; 

    //onSave(){
    // onSave($event){
    //     $event.stopPropagation();
    //     console.log("Button was clicked", $event);
    // }

    // onDivClicked(){
    //     console.log("Div was clicked");
    // }

    // onKeyUp($event) {
    //     if ($event.keyCode === 13) console.log("ENTER was pressed");
    // }

    onKeyUp() {
        console.log("ENTER was pressed");
    }
}