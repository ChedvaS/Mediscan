export class reminders {
    constructor(
                public id?:number,   //קוד תזכורת
                public idDetail?:number,  //קוד פירוט
                public dateTake?:Date,  //תאריך לקיחה
                public hourTake?:Date //שעת לקיחה
    ) {
        
    }
}