import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  categories: Category[]=[{
    id:'1', name:'Course' 
  },
  {
    id:'2', name:'General'
  },
  {
    id:'3',name:'Laboratory'
  }
]

@Output()
selectedCategoryEmitter= new EventEmitter<Category>();
//emite val catre parinte= home.component.html
clickOnCategory(category: Category): void{
    this.selectedCategoryEmitter.emit(category);
}
}
