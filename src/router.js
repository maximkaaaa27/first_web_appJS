export class Router {

    constructor() {
      this.routes = {};
      this.currentRoute = null;
    }
  
    register(name, view, isDefault = false) {
      console.log('register new route', name);
      this.routes[name] = view;
  
      if (isDefault) {
        this.defaultView = view;
      }
  
      view.render();
    }
  
    onRoute() {
      const route = location.hash.replace('#', '');
  
      let view = this.routes[route];
  
      if (!view) {
        view = this.defaultView;
      }
   
      if (this.currentRoute) {
        this.currentRoute.toggle(false);
      }
  
      view.toggle(true);
      this.currentRoute = view;
    }
  
    start() {
      console.log('start router');
  
      window.addEventListener('hashchange', () => this.onRoute());
  
      this.onRoute();
    }
  
  }