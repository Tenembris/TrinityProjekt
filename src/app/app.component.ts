import { literalMap } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { bufferToggle, elementAt } from 'rxjs';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: string;

  saveToDo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = '';

      this.save();
    } else {
      // alert('Please enter to do');
      // this.IsEmpty();
    }
  }

  // IsEmpty() {
  //   const toastTrigger = document.getElementById('liveToastBtn');
  //   const toastLiveExample = document.getElementById('liveToast');
  //   if (toastTrigger) {
  //     toastTrigger.addEventListener('click', () => {
  //       const toast = new bootstrap.Toast(toastLiveExample);

  //       toast.show();
  //     });
  //   }
  // }

  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  remove(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
    this.save();
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  ngOnInit(): void {
    let save_data = localStorage.getItem('todos');
    if (save_data != null) {
      this.todos = JSON.parse(save_data);
    }
  }
  Dark_Mode() {
    let theme = 'light';
    const themeToggle = document.querySelector('#theme-toggle');
    var element = document.body;
    let isInDarkMode = element.classList.toggle('Dark_Mode');
    let H2 = document.getElementById('h2_Dark_Theme');
    let icon = document.getElementById('toggle');
    if (isInDarkMode) {
      icon?.classList.remove('bi-moon-fill');
      icon?.classList.add('bi-sun-fill');

      H2?.classList.remove('h2');
      H2?.classList.add('H2_Dark_theme');

      localStorage.setItem('Theme', 'Dark');
    } else {
      icon?.classList.remove('bi-sun-fill');
      icon?.classList.add('bi-moon-fill');
      H2?.classList.add('h2');
      H2?.classList.remove('H2_Dark_theme');

      localStorage.setItem('Theme', 'Light');
    }
  }

  Go_To_Do() {
    document
      .getElementById('to-do-page')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  Go_Weather() {
    document
      .getElementById('weather-page')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
  // Dark_Mode() {
  //   var element = document.body;
  //   element.classList.toggle('Dark_Mode');
  //   if (element.classList.contains('Dark_Mode')) {
  //     localStorage.setItem('Theme', 'Dark');
  //   } else {
  //     localStorage.setItem('Theme', 'Light');
  //   }
  //   const themeToggle = document.querySelector('#theme-toggle');
  // var element = document.body;
  //   let isInDarkMode = element.classList.toggle('Dark_Mode');
  //   let H2 = document.getElementById('h2_Dark_Theme');
  //   let icon = document.getElementById('toggle');
  //   if (localStorage.getItem('theme') == 'light') {
  //     element.classList.toggle('Dark_Mode');
  //     icon?.classList.remove('bi-moon-fill');
  //     icon?.classList.add('bi-sun-fill');
  //     H2?.classList.remove('h2');
  //     H2?.classList.add('H2_Dark_theme');
  //     theme = 'light';
  //     localStorage.setItem('theme', theme);
  //   } else {
  //     icon?.classList.remove('bi-sun-fill');
  //     icon?.classList.add('bi-moon-fill');
  //     H2?.classList.add('h2');
  //     H2?.classList.remove('H2_Dark_theme');
  //     theme = 'dark';
  //     localStorage.setItem('theme', theme);
  //   }
  // }
  images = [
    {
      imageSrc:
        'https://cdn.dribbble.com/users/2100652/screenshots/14642350/media/44527b6f36aeeb2865173422d8823cb5.gif',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://cdn.dribbble.com/users/2715532/screenshots/6865230/ezgif.com-optimize__1_.gif',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://cdn.dribbble.com/users/5031/screenshots/2813898/media/5ced8201df20edd314aea98d53dad756.gif',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://cdn.dribbble.com/users/228367/screenshots/4630418/magic-forest---dribbble.gif',
      imageAlt: 'person2',
    },
  ];
}
