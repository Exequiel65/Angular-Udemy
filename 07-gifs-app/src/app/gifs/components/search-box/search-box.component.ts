import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './gifs-search-box.component.html'
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput! : ElementRef<HTMLInputElement>;

  searchTag(){
    const newTag = this.tagInput.nativeElement.value
    console.log(newTag)
  }
}
