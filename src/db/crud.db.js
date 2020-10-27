export default class Crud{
   constructor(action){
       this.action=action;
   }


   createTable(){
       const create_table = `CREATE TABLE IF NOT EXIST Shop(
          
           PRODUCT_NAME TEXT,
           PRODUCT_CAT TEXT
         
       )`;       
       return this.action.run(create_table);
   }

   insert(pname, pcat){
       return this.action.run(
           "INSERT INTO SHOP PRODUCT_NAME PRODUCT_CAT, VALUES (?,?)", [pname, pcat]
       );
   }


}