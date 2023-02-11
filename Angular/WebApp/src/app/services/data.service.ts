export class DataService {
     data = [{price:'200$'},{price:'500$'}]
    getData() {
        return this.data;
    }

    addData(value:any){
        this.data.push(value);
    }
}



