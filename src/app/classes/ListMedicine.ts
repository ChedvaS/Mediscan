export class ListMedicine {
    constructor(
        public NameMedicine?:string,   //שפ תרופה
        public ExpiryDate?:Date,   //תאריך תפוגה
        public InserDate?:Date  //תאריך הכנסה למאגר
     
    ) {
        
    }
}