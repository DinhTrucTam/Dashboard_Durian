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
    // axios
    //   .post('http://localhost:3000/chat/askQuestion', {
    //     question: this.question,
    //   })
    //   .then((response) => {
    //     // Assuming the response contains an 'answer' field
    //     const answer = response.data.answer;
    //     this.typeResponse(answer);
    //     this.loading = false;
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //     this.loading = false;
    //     // Handle error
    //   });
    const answer = "The durian tree progresses through four stages: Young Tree, First Flowering, Fruit Bearing, and Fruit Ripening. Throughout the first three stages, the ideal temperature is 24-30°C with soil moisture levels ranging from 65-80% for the first two stages and 70-90% for the third. During the final stage of Fruit Ripening, the optimal temperature drops to 20-22°C, and soil moisture should be reduced to 50-60%.";
    this.typeResponse(answer);
    this.loading = false;
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
