export class reminderdetails {
    constructor(
        public  id?:number,//קוד פירוט
        public idMedicineStock?:number,//קוד מלאי תרופות
        public subjectGmail?:string,//נושא המייל
        public comment?:string,//הערות לאופן לקיחת התרופה
        public  amountDays?:number,//מספר ימים
        public frequincy?:number,//תדירות
        public statusMedicine?:string,//סטטוס
        public dosage?:string,//מינון
        public startDate?:Date//תאריך התחלה

    ) {
      
    }
}