const fs=require('fs');
const path=require('path');
const rootDir=require('../utils/pathUtils')

module.exports =class Home{
    constructor(house,price,location,img){
        this.house=house;
        this.price=price;
        this.location=location;
        this.img=img;
    }

    save(){
        let cards=Home.fetchAll((cards)=>{
            cards.push(this);
            fs.writeFile(path.join(rootDir,'data','homes.json'),JSON.stringify(cards),(err)=>{
                console.log("something went wrong");
            });    
        })
    }
    static fetchAll(callback){
        fs.readFile(path.join(rootDir,'data','homes.json'),(err,data)=>{
            if(err){
                callback([]);
            }
            else{
               callback(JSON.parse(data));              
            }
           
        })
       
    }
}