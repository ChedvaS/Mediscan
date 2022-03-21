export class activityReminders {
    constructor(
        public MedicineName?:string,   //שם תרופה
        public LeftDays?:number,   //מספר ימים שנותרו ללקיחה
        public TakingTimes?:Array<Date>  //זמן לקיחה הבא
     
    ) {
        
    }
}




