import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { empty, timeout } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})

export class AssessmentComponent implements OnInit {
  assessment: any;
  title = "Self-Assessment";

  selectedAnswersPopQuiz: string[] = [];
  activeToasts: any[] = []; // Store active toasts


  incorrectAnswersPopQuiz: string[] = [];
  correctAnswersPopQuiz: string[] = [];

  scorePopQuiz: number = 0;

  showPrompt: boolean = false;
  submittedPopQuiz: boolean = false;

  showScoreBox: boolean = false;
  showScoreBox2: boolean = false;
  showAnswers: boolean = false;
  showAnswers2: boolean = false;
  showCorrectAnswers: boolean = false;

  showPlayAgainButton: boolean = false; //For Trivia Game
  showPlayAgainButtonPop: boolean = false; // For Pop Quiz

  showUnansweredQuestionMessagePop: boolean = false;

  showSubmitButtonPop: boolean = true;
  

  constructor(private http: HttpClient,
    private titleService: Title,
    private toastr: ToastrService) {
      this.selectedAnswersPopQuiz = Array(10).fill(null);
    }

  ngOnInit(): void {
    this.http.get<any[]>(`${environment.apiUrl}assessment_trivia`)
      .subscribe(incoming_data => {
        this.assessment = incoming_data;

        this.correctAnswersPopQuiz = incoming_data.map(item => item.pop_quiz.map((quiz: { correct_answer: any; }) => quiz.correct_answer));

      });

    this.titleService.setTitle(this.title);

  }

  closeScoreBox() {
    // Close the score box
    this.showScoreBox = false;

    // Show the "Play Again" button
    this.showPlayAgainButton = true;
    
  }

  closeScoreBox2() {
    // Close the score box
    this.showScoreBox2 = false;

    // Show the "Play Again" button
    this.showPlayAgainButtonPop = true;

    //Hide the submit button
    this.showSubmitButtonPop = false;
  }

  playAgainPop() {
    // Reset the Pop Quiz, hide the score box, and hide the "Play Again" button in the Pop Quiz form
    this.resetSelectedAnswersPop();
    this.showScoreBox2 = false;
    this.showPlayAgainButtonPop = false;
  }

  checkAnswerPopQuiz() {
  // Calculate the score, incorrect answers, and correct answers for Pop Quiz
  let score_pop_quiz = 0;
  const incorrectAnswersPopQuiz: string[] = [];
  const correctAnswersPopQuiz: string[] = [];

  for (const item of this.assessment) {
    for (let i = 0; i < 10; i++) {
      const selectedAnswer = this.selectedAnswersPopQuiz[i];
      if (selectedAnswer !== null && selectedAnswer !== undefined) {
        if (item.pop_quiz[i].correct_answer.text === selectedAnswer) {
          score_pop_quiz += 1;
          correctAnswersPopQuiz.push(`Question ${i + 1}`);
        } else {
          incorrectAnswersPopQuiz.push(`Question ${i + 1}`);
        }
      }
    }
  }

    // Store the score
    this.scorePopQuiz = score_pop_quiz;
    
    // Set the submitted flag to true after submission
    this.submittedPopQuiz = true;

    // Show the score box
    this.showScoreBox2 = true;

  }
  

  submitPopQuiz() {
    // Check if any question is unanswered
    const unansweredQuestion2 = this.selectedAnswersPopQuiz.some(answer => answer === null);

    if (unansweredQuestion2) {
      this.showUnansweredQuestionMessagePop = true;
      this.toastr.error('Please answer all questions before submitting.');
    } else {
      this.showUnansweredQuestionMessagePop = false;
      this.toastr.success('Submitted!');
      this.checkAnswerPopQuiz();
    }
  }

  resetSelectedAnswersPop() {
    this.selectedAnswersPopQuiz = Array(10).fill(null); // Reset selected answers
  
    // Clear the "This is a required question" error message for Pop Quiz
    this.showUnansweredQuestionMessagePop = false;
  
    this.scorePopQuiz = 0;
    this.incorrectAnswersPopQuiz = [];
    this.correctAnswersPopQuiz = [];
    this.submittedPopQuiz = false;
    
    this.activeToasts.forEach(toast => this.toastr.clear(toast.toastId)); // Clear active toasts
    this.correctAnswersPopQuiz = [];
  
    this.showSubmitButtonPop = true; // Show the submit button again for Pop Quiz
  
    this.toastr.info('Your responses have been reset.', '');
  }  
}
