export interface ICustomer {
    image: string;
    Title: string;
    Subject: string;
    Grade: number;
    Units: number;
    Lessons: number;
    Topics: number;
    Teacher: string[];
    Students: number;
    Start: string;
    End: string;
    isfavourite: boolean;
    preview:boolean
    manage_course:boolean
    grade_submission:boolean
    reports:boolean
    is_expired: boolean 
}