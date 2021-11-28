export class medicinestock {
    constructor(
        public  id?:number,//קוד מלאי
        public idMedicne?:number,//קוד תרופה
        public insertDate?:Date,//תאריך הכנסה למאגר
        public expiryDate?:Date//תאריך תפוגה‏

    ) {
        
    }
}