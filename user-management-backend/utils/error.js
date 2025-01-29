export const createError=(status,message)=>{
    console.log("in creating error")
    const err = new Error();
    err.status=status;
    err.message=message;
    return err;
};