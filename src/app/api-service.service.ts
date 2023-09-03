import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiKey = 'Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY'; //GIPHY API Key
  private apiUrl = 'https://api.giphy.com/v1/gifs'; // Base API URL

  constructor(private http: HttpClient) {}

  // Function to fetch trending GIFs from the Giphy API
  getTrendingGifs() {
    const url = `${this.apiUrl}/trending?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}