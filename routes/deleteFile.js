var fs = require('fs');
module.exports = async (req, res) => {
    try {
        const { app, params, body } = req
        var html = body;
        var filePath = `./${html.nome}`;
        


      
        fs.rmSync(filePath, {
            force: true,
        });

        res.json("true")
        
    }
    catch (err) {
        console.error('Error==>:', err)
        return res.end(err)
    }
}