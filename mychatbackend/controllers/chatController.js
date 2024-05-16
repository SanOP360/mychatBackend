const ChatMessage = require("../models/chatMessage");

exports.postMessage = async (req, res) => {
  const { message } = req.body;
  const UserId = req.user.id; 
  console.log("User ID from request:", UserId);

  try {
    await ChatMessage.create({
      message,UserId
    });
    res.status(201).json({ message: "Chat message stored successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.getMessages=async (req,res)=>{
  try{
    const messages=await ChatMessage.findAll();

    res.status(200).json({messages});
  }catch(err){
    console.log(err);
    res.status(500).json({message:"Internal server error"});
  }
}
