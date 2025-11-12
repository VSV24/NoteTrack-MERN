import ratelimit from "../src/config/upstash.js"


const rateLimiter = async (req,res,next)=>{
  try{
    const {success} = await ratelimit.limit("my-little-key")
    if(!success){
      return res.status(429).json({
        message:"Too many requests please try again later"
      })
    }
    next()
  }catch(err){
    console.error("rate limit error",err.message)
    next(err)
  }

}

export default rateLimiter