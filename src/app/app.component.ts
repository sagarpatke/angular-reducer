import { Component, OnInit } from '@angular/core';
import TodoAppState from 'src/TodoApp/types';
import { Subject } from 'rxjs';
import { scan, startWith, tap, map, reduce } from 'rxjs/operators';
import { TodoAppActionType, addItem, TodoAppActionEnum, editTitle } from 'src/TodoApp/actions';
import TodoApp from 'src/TodoApp/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'TodoApplication';

  dispatchSubject: Subject<TodoAppActionType> = new Subject();
  currentState: TodoAppState;

  ngOnInit() {
    this.currentState = {
      title: "",
      items: []
    }

    this.dispatchSubject.pipe(
      scan(TodoApp, this.currentState)
    ).subscribe(data => {
      console.log('PING', data.title);
      this.currentState = data
    });

    setTimeout(() => {
      this.dispatch(editTitle("A new Title"));
    }, 5000);
  }

  onAddItem(newItem: string) {
    this.dispatch(addItem(newItem));
  }

  dispatch(action: TodoAppActionType) {
    this.dispatchSubject.next(action);
  }
}
