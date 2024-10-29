const zod = require("zod") ;

const userzodschema = zod.object({
    firstname: zod.string(),
    lastname : zod.string(),
    username : zod.string(),
    password : zod.string()
                  .min(8, "Password must be at least 8 characters long") // Minimum length
                  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
                  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
                  .regex(/[0-9]/, "Password must contain at least one number")
                  .regex(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)")
})


const updateuserschema = zod.object({
    firstname: zod.string().optional(),
    lastname : zod.string().optional(),
    password : zod.string()
    .min(8, "Password must be at least 8 characters long") // Minimum length
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)")
})
module.exports = {
    userzodschema,
    updateuserschema
} ;
