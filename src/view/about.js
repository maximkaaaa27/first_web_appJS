import { View } from './view.js';
import { AboutModel } from '../models/about.js';
import { AvatarComponent } from '../components/avatar.js';

export class AboutView extends View {


  constructor(el) {
    super(el);
    this.model = new AboutModel();
    
    
  }
  async render() {

    const data = await this.model.getAboutData(); 

     this.el.innerHTML = `
    <div class="profile">
    <div class="profile__avatar"/>
    </div>
    `;

    
    const avatar = new AvatarComponent ({
      el: this.el.querySelector('.profile__avatar'),
      options: {
        avatarUrl: data.avatar,
      }
    });
    avatar.render();

  }


}