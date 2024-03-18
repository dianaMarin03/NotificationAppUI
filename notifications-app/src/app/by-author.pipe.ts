import { Pipe, PipeTransform } from '@angular/core';
//declararea unui costem pipe si e folosit cu sintaxa variabila | numele pipe-ului
@Pipe({
  name: 'byAuthor'
})
export class ByAuthorPipe implements PipeTransform {

  transform(author: string): string {
    return "By Author " + author;
  }

}
