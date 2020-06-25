import { Component } from './component.js';
 
export class AvatarComponent extends Component {
  render() {
    this.el.innerHTML = `
    <img height="100px" src=${this.options.avatarUrl}/>
    `;
  }

  
}