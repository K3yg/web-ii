import { jwtVerify } from "jose";

export const secret_key = new TextEncoder().encode(
    "Swe4g7c?UBm5Nrd96vhsVDtkyJFbqKMTm!TMw5BDRLtaCFAXNvbq?s4rGKQSZnUP"
);

export const verifyToken = async (token) => {
    try {
        const result = await jwtVerify(token, secret_key);
        return result;
    } catch (err) {
        return err;
    }
    
}
