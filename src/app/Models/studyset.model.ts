

export class StudySet{
    id: number;
    userId: number;
    category: string;

    constructor(id: number, userId: number, category: string ){
        this.id = id;
        this.category = category;
        this.userId = userId;
    }

}
