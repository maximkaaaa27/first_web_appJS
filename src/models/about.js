export class AboutModel {
    constructor() {
  
  
    }
    async getAboutData () {
      const resp = await fetch('./data/about.json');
      return await resp.json();
    }
  }