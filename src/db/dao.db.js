const sqlite3 = window.require('sqlite3');
const Promise = window.require('bluebird');


export default class Dao{
    constructor(db){
        this.db = new sqlite3.Database(db);
    }

    run(sql, params=[]){
        return new Promise((resolve, reject)=>{
            this.db.run(sql, params, (err)=>{
                err?reject():resolve();
            })
        })

    }

    get(sql, params=[]){
        return new Promise((resolve, reject)=>{
            this.db.get(sql, params, (err)=>{
                err?reject():resolve();
            })
        })
    }

    all(sql, params=[]){
        return new Promise((resolve, reject)=>{
            this.db.all(sql, params, (err)=>{
                err?reject():resolve();
            })
        })

    }




}
