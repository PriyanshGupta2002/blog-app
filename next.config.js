const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
module.exports=(phase)=>{
    if (phase===PHASE_DEVELOPMENT_SERVER) {
        return {
            env:{
                mongodb_username:"PriyanshGupta",
                mongodb_password:"ByQQTs2t6ifBFy1i",
                mongodb_clusterName:"cluster0",
                mongodb_dbName:"contacts-dev"
            }
        }
        
    }
    return{
        env:{
            mongodb_username:"PriyanshGupta",
            mongodb_password:"ByQQTs2t6ifBFy1i",
            mongodb_clusterName:"cluster0",
            mongodb_dbName:"contacts"
        }
    }
}