
import './common.css';
import style1 from './style1.css';
import style2 from './style2.css';
import component from './component';


document.body.appendChild(component('hello world!', style1.class1, style2.class1));
// document.body.appendChild(component('hello world'));