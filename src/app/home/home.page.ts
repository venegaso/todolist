import { AlertController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  //titulo: string;
  //desc: string;
  listTask =  [];
  newTask = new Task();
  AlertController: any;

  constructor(public alertCtrl: AlertController) {

  }

  addTask(task: Task){
    task.id = Date.now().toString(36) + Math.random().toString(36).substring(2);
    this.listTask.push(task);
    this.newTask = new Task();
  }

  deleteTask(id){
    this.listTask = this.listTask.filter(task=> task.id !== id);
  }

  async editTask(index, task: Task) {
    const aviso = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Actualizar',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Titulo',
          value: task.title
        },
        {
          name: 'desc',
          type: 'text',
          placeholder: 'Descripción',
          value: task.desc
        },],
        buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
              this.listTask[index].title = data.title;
              this.listTask[index].desc = data.desc;
          }
        }
      ]
    });

    await aviso.present();
  }
}
