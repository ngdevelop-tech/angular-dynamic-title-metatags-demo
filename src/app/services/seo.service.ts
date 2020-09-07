import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta) { }

  updateTitle(title: string){
    this.title.setTitle(title);
  }

  updateMetaTags(metaTags: {[key: string]: string}){
    for(let key of Object.keys(metaTags)){
      console.log(key);
      this.meta.updateTag({name: key, content: metaTags[key]});
    }
  }
}
