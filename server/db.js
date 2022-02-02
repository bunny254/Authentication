const mongoose=require("mongoose");

module.exports=()=>{
    const connectionParams={
        useNewUrlParaser:true,
        useUnifiedTopology:true,
    };
    try{
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Sucessfully connected to database.");
    }catch (error){
        console.log(error);
        console.log("Failed to connect to database!");

    }
}