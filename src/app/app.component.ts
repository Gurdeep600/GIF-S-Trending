import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  trendingGifs: any[] = [];  // Array to store trending GIFs
  icon = faSearch;           // FontAwesome icon for the search button
  closeIcon = faTimes;       // FontAwesome icon for the close button
  totalLength: any;          // Total number of GIFs (used for pagination)
  filteredList: any[] = [];  // Array to store filtered GIFs
  originalTrendingGifs: any[] = [];  // Copy of the original list of trending GIFs
  inputValue: string = '';   // Input value for filtering

  constructor(private ApiServiceService: ApiServiceService) {}

  ngOnInit() {
    // When the component initializes, make an API call to fetch trending GIFs
    this.apiCall();
  }

  // Function to filter GIFs based on user input
  public filterResults(text: any) {
    // Filter against the original list of trending GIFs
    this.trendingGifs = this.originalTrendingGifs.filter(
      item => item.title.toLowerCase().includes(text.toLowerCase())
    );
  }

  // Function to clear the input 
  public clearInput(filterInput: any): void {
    filterInput.value = '';
    this.inputValue = '';
    this.apiCall();
  }

  // Function to make an API call to fetch trending GIFs
  private apiCall(): any {
    this.ApiServiceService.getTrendingGifs().subscribe((data: any) => {
      // Store the total length for pagination
      this.totalLength = data.length;
      // Store the trending GIFs in the component
      this.trendingGifs = data.data;
      // Create a copy of the original list for filtering
      this.originalTrendingGifs = [...this.trendingGifs];
    });
  }

  // Function to handle changes in the input field
  public onInputChanged(): void {
    // Check if the input value is empty, and if so, trigger the API call to get all trending GIFs
    if (!this.inputValue) {
      this.apiCall();
    }
  }
}





