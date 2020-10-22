import express=require('express');
class Server {
    public app: express.Application;   
    constructor() {       
        this.app = express();
    }    
    start () {
        this.app.listen(3000, () => {console.log('running port 3000') });
    }
}
export default Server;