import {Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Button } from 'protractor';

@Component({
    selector:'voter-component',
    template:` 
    <h4>{{name}}</h4>
    <button (click)="vote(true)" [disabled]="voted">Yes</button>
    <button (click)="vote(false)" [disabled]="voted">No</button>
    `

})

export class VoterComponent{
    constructor(){}

    @Input() name:string
    @Output() onVoted=new EventEmitter<boolean>()
    private voted:boolean=false

    vote(agreed:boolean){
        this.onVoted.emit(agreed)
        this.voted=true
    }
}