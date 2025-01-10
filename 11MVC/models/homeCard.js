//fake database
cards=[];
module.exports =class Home{
    constructor(house,price,location,img){
        this.house=house;
        this.price=price;
        this.location=location;
        this.img=img;
    }

    save(){
        cards.push(this);
    }
    static fetchAll(){
        return cards;
    }
}