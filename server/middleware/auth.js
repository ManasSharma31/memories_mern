import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    try {

        // console.log(req.headers);
        const token = req.headers.authorization.split(" ")[1];
        // console.log("Token", token);
        let decodedData;
        const isCustom = token.length < 500; //to check if it's our own token or google token....
        if (token && isCustom) {
            decodedData = jwt.verify(token, "test");
            // console.log("Deocded Data is", decodedData); //this is the token created by us which contains email and id ...
            req.userId = decodedData.id;
        }
        else {
            decodedData = jwt.decode(token);
            // console.log("Deocded Data is", decodedData);
            req.userId = decodedData.sub; //sub container the user id of the user generted through google..
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;