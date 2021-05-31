import { Injectable } from "@angular/core";
export interface Phone{
  id?:number,
  brand:string,
  model:string,
  url:string
}
@Injectable({providedIn:'root'})
export class PhoneService{
 phones:Phone[]=[
    {id:1,brand:'Apple',model:'Iphone6s',url:'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/iPhone-6s-Plus-space-gray-back.png'},
    {id:2,brand:'Apple',model:'Iphone7',url:'https://avatars.mds.yandex.net/get-mpic/1859063/img_id4109987386688090174.jpeg/9hq'},
    {id:3,brand:'Apple',model:'Iphone12',url:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000'},
    {id:4,brand:'Apple',model:'Iphone11Pro',url:'https://www.bite.lv/sites/default/files/products/2019-09/iPhone_11_Pro_Silver_2.png'},
    {id:5,brand:'Samsung',model:'GalaxyS10',url:'https://airoom.ru/wp-content/uploads/2019/03/Samsung-Galaxy-S10-Black.jpg'},
    {id:6,brand:'Xiaomi',model:'Note9',url:'https://mi-shop.com/upload/resize_cache/iblock/3f2/445_473_2/3f25656a3f31802bc090faf1db7a1f34.jpg'},
  ]

  getPhone(id:number){
     return this.phones.find((phone)=>{
        return phone.id == id
    })
  }

}
