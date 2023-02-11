import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameFilter'
})
export class GameFilterPipe implements PipeTransform {

  transform(gameList:any[], searchGame:string){
    console.log(gameList,searchGame)
    if(gameList.length === 0 || searchGame ===""){
      return gameList
    }
    return gameList.filter((item)=>item.game === searchGame);
  }

}
