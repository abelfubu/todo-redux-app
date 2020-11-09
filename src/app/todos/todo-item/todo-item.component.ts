import * as ng from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { fromEvent } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { deleteTodo, editTodo, toggle } from '../todo.actions';

@ng.Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements ng.OnInit, ng.AfterViewInit {
  @ng.Input() todo: Todo;
  @ng.ViewChild('todoInput') todoInput: ng.ElementRef;
  @ng.ViewChild('labelEl') labelEl: ng.ElementRef;

  checkCompleted: FormControl;
  txtInput: FormControl;
  edit = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    this.checkCompleted.valueChanges.subscribe(() =>
      this.toggleTodoCompletion()
    );
  }

  ngAfterViewInit(): void {
    fromEvent(this.labelEl.nativeElement, 'dblclick')
      .pipe(
        tap(() => (this.edit = true)),
        delay(10)
      )
      .subscribe(() => {
        console.log('click');
        this.todoInput.nativeElement.select();
      });

    fromEvent(this.todoInput.nativeElement, 'blur').subscribe(() => {
      this.edit = false;
      this.handleTodoEdition();
    });
  }

  toggleTodoCompletion(): void {
    this.store.dispatch(toggle(this.todo));
  }

  handleTodoEdition(): void {
    this.store.dispatch(
      editTodo({ id: this.todo.id, text: this.txtInput.value })
    );
  }

  handleTodoDeletion(): void {
    this.store.dispatch(deleteTodo(this.todo));
  }
}
