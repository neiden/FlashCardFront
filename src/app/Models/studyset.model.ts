

export class StudySet{
    id: string;
    userId: number;
    category: string;

    constructor(id: string, userId: number, category: string ){
        this.id = id;
        this.category = category;
        this.userId = userId;
    }

}
