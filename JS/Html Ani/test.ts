function LogClass(constructor:Function){
    console.log('Log Class decortaor executed for the constructor');
    console.log(constructor)
}

@LogClass
class TextWidget{
    text:string;

      constructor(text:string = 'default text'){
      this.text = text
    
    }
    render(){
        console.log(`Rendering text:${this.text}`)
    }
}

let widget = new TextWidget();

widget.render();