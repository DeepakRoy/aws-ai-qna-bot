const aws=require('./aws')
const lambda=new aws.Lambda()

module.exports=function(status){
    console.log("calling poll lambda")
    return lambda.invoke({
       FunctionName:process.env.POLL_LAMBDA,
       InvocationType:"Event",
       Payload:"{}"
    }).promise()
}
