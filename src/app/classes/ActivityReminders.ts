export class activityReminders {
    constructor(
        public MedicineName?:string,   //שם תרופה
        public LeftDays?:number,   //מספר ימים שנותרו ללקיחה
        public TakingTimes?:Array<Date> , //רשימת זמני הלקיחה לתרופה זו
        public frequincy ?:number,//תדירות ביום

        public  comment?:string //הערה ללקיחה
     
    ) {
        
    }
}




