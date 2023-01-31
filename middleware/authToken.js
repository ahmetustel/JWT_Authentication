const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        /* Postman'da "Authorization" sekmesinde header 'da gönderilmek üzere çeşitli çeşitli type de bilgiler vardır. Bunlardan bir tanesi BEARER TOKEN'dır. Bu kısma jwt ile oluşturulan token'ın ataması yapılarak oluşturulan token'ın client --> server tarafına gönderilmesini sağlarız. Aşağıdaki işlem gönderilen tokenın alınması */
        const token = req.headers['authorization'].split(" ")[1];
        /* const token = req.headers.authorization.split(" ")[1]; // Bir üst satırdaki kod ile AYNI, Bearer kısmından sonrasını almak için */

        /* ".verify()" methodunun;
            1.parametresi yetkinin aranacağı --> TOKEN,
            2.parametre verify edilecek .env dosyasındaki --> KEY,
            NOT: iki parametre varsa method return olarak token'ın PAYLOAD'ını döndürür.
            3.parametre  error ve PAYLOAD'ı döndüren arrow function yazabiliriz. */
        const decodedToken = jwt.verify(token, process.env.api_secret_key)
        // res.headers.authorization = decodedToken;
        // req.userData = decodedToken; // verify edildiğinde 
        // req.body.username = loginingUser.username;
        next();
    }
    /* eğer try bloğunda değişkenlerden biri undefined olursa (mesela header'ın olmaması gibi) catch bloğu hatayı 
        yakalar. */
    catch (err) {
        return res.sendStatus(401);
    }

    // YUKARIDA BASEDİLEN ^PARAMETRELİ .verify() METHODUNUN KULLANIMINA ÖRNEK

    // jwt.verify(token, process.env.api_secret_key, (err,loginingUser)=>{
    //     if(err) return res.sendStatus(403) // token var ama artık geçerli değil ise 403
    //     req.body.username = loginingUser.username;
    //     next();
    // });
}