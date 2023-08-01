export class QuestionModal {
    constructor(
        public id: string,
        public answer: string,
        public imageName: string,
        public options: string[],
        public question: string,
        public participantAnswer: string) { }
}