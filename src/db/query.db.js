export default class Query{
   constructor(action){
       this.action=action;
   }


   createTable(){
       const create_table = `CREATE TABLE IF NOT EXIST TradeCoderApp(
           ID INTEGER PRIMARY KEY,
           PRODUCT_NAME TEXT,
           PRODUCT_CAT TEXT,
           PRODUCT_SIZE TEXT,
           BUY_COST INTEGER,
           SALE_PRICE INTEGER,
           BUY_DATE TEXT,
           SALE_DATE TEXT,
           CUSTOMER TEXT,
           SUPPLIER TEXT,
           STOCK INTEGER,
           TOTAL_BUY_QTY INTEGER,
           TOTAL_SALE_QTY INTEGER,
           TOTAL_BUY INTEGER,
           TOTAL_SALES INTEGER,
           STMT_DATE TEXT
       )`;
       return this.action.run(create_table);
   }
}