import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @ViewChild('Task') Task!:EventEmitter<any>
  taskListArray!: any[];
  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.taskService.getTaskList().snapshotChanges()
    .subscribe((item:any) => {
        
      this.taskListArray = [];
      item.forEach((element:any) => {
        var value = element.payload.toJSON();
        value["key"] = element.key;
        this.taskListArray.push(value);
      })

      //sort array isChecked false  -> true
      this.taskListArray.sort((a, b) => {
        return a.isChecked - b.isChecked;
      })
    });
  }


  AddTask(task:any) {
    if(task.value.length <= 0){
      return false;
    }
    else if(task.value === this.taskListArray){
      console.log(this.taskListArray)
      return;
    }
    else{
      this.taskService.addTask(task.value);
      task.value = null;
      return;
    }
  }
  CheckTask(task: string, isChecked:boolean) {
    this.taskService.checkOrUnCheckTask(task, !isChecked);
  }

  DeleteTask(task: string) {
    Swal.fire({
      icon: "warning",
      title: 'Are you sure?',
      text: "Do you want ot remove the task!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#0162e8',
      cancelButtonText: 'No, cancel it!',
      cancelButtonColor: '#0162e8',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#0162e8'
        })
        this.taskService.removeTask(task);
        return;
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled!',
          text: 'Your imaginary file is safe :)',
          icon: 'error',
          confirmButtonColor: '#0162e8'
        })
        return false;
      }
      return
    })
  }

  
}
