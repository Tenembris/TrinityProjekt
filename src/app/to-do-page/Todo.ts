export class Todo {
  name: string;
  isCompleted: boolean;
}

let icon = document.getElementById('toggle');
var element = document.body;
console.log('hello');
let H2 = document.getElementById('h2_Dark_Theme');
let h3 = document.getElementById('test');
// if (element.classList.contains('Dark_Mode')) {
//   console.log('44444');
//   localStorage.setItem('Theme', 'Dark');
// }

if (localStorage.getItem('Theme') == 'Dark') {
  console.log('3333');
  element.classList.add('Dark_Mode');

  H2?.classList.remove('h2');
  H2?.classList.add('H2_Dark_theme');

  h3?.classList.add('h3Dark');
} else {
  element.classList.remove('Dark_Mode');
}
