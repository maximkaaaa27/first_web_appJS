export class View {

    constructor(el) {
      this.el = el;
      this.state = false;
  
    }
  
  
    render() {
      console.warn('write method RENDER');
    }
  
    toggle(state) {
      this.el.hidden = !state;
    
    }
  }