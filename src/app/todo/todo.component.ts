import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Todo = {
    id: 1,
    name: "take 5 min break"
  }
  constructor() {}
  ngOnInit(): void {

  }
}
