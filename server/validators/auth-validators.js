const {z} = require('zod');

const loginSchema = z.object({
    email: z
        .string({require_error:"Email is Required"})
        .trim()
        .email({message:"Enter valid Email address"})
        .min(3,{message:"email must be alteast of 10 character"})
        .max(255, {message:"Email must not be more 255 character"}),

    password: z
        .string({require_error:"Password is Required"})
        .min(7,{message:"Password must be alteast of 7 character"})
        .max(255, {message:"Password must not be more 255 character"}),

})



const signupSchema = loginSchema.extend({
    username: z
        .string({require_error:"Name is Required"})
        .trim()
        .min(3,{message:"UserName must be alteast of 3 character"})
        .max(255, {message:"UserName must not be more 255 character"}),

    
    phone: z
        .string({require_error:"Phone is Required"})
        .trim()
        .min(10,{message:"Phone must be alteast of 10 character"})
        .max(20, {message:"Phone must not be more 10 character"}),

   
});


module.exports = {signupSchema, loginSchema };