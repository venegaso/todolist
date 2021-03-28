export class Task{
    id: string;
    title: string;
    desc: string;
    isComplete: boolean = false;
    completedOn: string  = new Date().toDateString();
    completedDate: string = '';

    constructor(){

    }
}