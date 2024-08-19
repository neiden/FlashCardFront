export class Flashcard {
    id: number;
    question: string;
    answer: string;
    studySetId: number;


    constructor(id: number, question: string, answer: string, studySetId: number){
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.studySetId = studySetId;
    }

    
}