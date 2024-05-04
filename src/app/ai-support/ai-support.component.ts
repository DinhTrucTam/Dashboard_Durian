import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-ai-support',
  templateUrl: './ai-support.component.html',
  styleUrls: ['./ai-support.component.css'],
})
export class AiSupportComponent {
  question: string = '';
  aiResponse: string = '';
  loading: boolean = false;

  constructor() {}

  askQuestion() {
    if (this.question.trim() === '') {
      return;
    }
    this.loading = true;
    axios
      .post('http://localhost:3000/chat/askQuestion', {
        question: this.question,
      })
      .then((response) => {
        // Assuming the response contains an 'answer' field
        const answer = response.data.answer;
        this.typeResponse(answer);
        this.loading = false;
      })
      .catch((error) => {
        console.error('Error:', error);
        this.loading = false;
        // Handle error
      });
  }

  typeResponse(response: string) {
    this.aiResponse = ''; // Clear previous response
    let index = 0;
    const typingInterval = setInterval(() => {
      this.aiResponse += response.charAt(index);
      index++;
      if (index === response.length) {
        clearInterval(typingInterval);
      }
    }, 10); // Adjust the typing speed here (milliseconds)
  }
}
