//register - api request
exports.registerController = (req,res)=>{
    console.log("Inside register controller");
    const {username,email,password} = req.body
    console.log(username,email,password);
    
    res.status(200).json("Request received")
    
}
//login api
//user edit profile
//admin edit profile