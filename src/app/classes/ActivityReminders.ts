export class activityReminders {
    constructor(
        public MedicineId?:number,
        public reminderDId?:number,
        public MedicineName?:string,   //שם תרופה
        public LeftDays?:number,   //מספר ימים שנותרו ללקיחה
        public TakingTimes?:Map<number,Date> , //רשימת זמני הלקיחה לתרופה זו
        public frequincy ?:number,//תדירות ביום
        public  comment?:string //הערה ללקיחה
     
    ) {
        
    }
}




