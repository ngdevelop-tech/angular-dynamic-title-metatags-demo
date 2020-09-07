import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {
      seo: {
        title: 'Home Page | Dynamic Title and Meta Tags Demo',
        metaTags: {
          description: 'Home page of dynamic Title and Metatags Demo application.',
          'og:title': 'GOT Home Page',
          'og:description': 'List of all the characters from game of thrones',
          'og:image': document.baseURI + 'assets/image/homepage.png'
        }
      }
    }
  },
  { path: 'characters', 
    loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule),
    data: {
      seo: {
        title: 'GOT Characters',
        metaTags: {
          description: 'List of all the characters from game of thrones',
          'og:title': 'GOT Characters',
          'og:description': 'List of all the characters from game of thrones',
          'og:image': document.baseURI + 'assets/image/characters.png'
        }
      }
    }
  },
  { path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
    data: {
      seo: {
        title: 'GOT Books',
        metaTags: {
          description: 'Checkout the List of all game of thrones books',
          'og:title': 'GOT Books',
          'og:description': 'Checkout the List of all game of thrones books',
          'og:image': document.baseURI + 'assets/image/books.png'
        }
      }
    } 
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
