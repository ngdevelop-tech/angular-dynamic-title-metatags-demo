import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {
      seo: {
        title: 'Home Page | Dynamic Title and Meta Tags Demo',
        metaTags: [
          { name: 'description', content: 'Game of Thrones Quotes : Winter is Coming, You know nothing Jon Snow, Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you' },
          { property: 'og:title', content: 'GOT Home Page ⚔' },
          { proprety: 'og:description', content: 'Game of Thrones Quotes : Winter is Coming, You know nothing Jon Snow, Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you' },
          { property: 'og:image', content: environment.appUrl + 'assets/image/homepage.png' },
          { property: 'og:url', content: environment.appUrl + 'home' },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      }
    }
  },
  {
    path: 'characters',
    loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule),
    data: {
      seo: {
        title: 'GOT Characters 🧔',
        metaTags: [
          { name: 'description', content: 'List of all the characters from game of thrones' },
          { property: 'og:title', content: 'GOT Characters 🧔' },
          { proprety: 'og:description', content: 'List of all the characters from game of thrones' },
          { property: 'og:image', content: environment.appUrl + 'assets/image/characters.png' },
          { property: 'og:url', content: environment.appUrl + 'characters' },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      }
    }
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
    data: {
      seo: {
        title: 'GOT Books 📚',
        metaTags: [
          { name: 'description', content: 'List of all Game of Thrones books. A Game of Thrones, Clash of Kings, A Storm of Swords...' },
          { property: 'og:title', content: 'Game of Thrones Books 📕' },
          { proprety: 'og:description', content: 'List of all Game of Thrones books. A Game of Thrones, Clash of Kings, A Storm of Swords, The Hedge Knight, A Feast for Crows' },
          { property: 'og:image', content: environment.appUrl + 'assets/image/books.png' },
          { property: 'og:url', content: environment.appUrl + 'books' },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      }
    }
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
