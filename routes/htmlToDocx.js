const HtmlDocx = require('html-docx-js');
var fs = require('fs');

module.exports = async (req, res) => {
    try {
        const { app, params, body } = req
        var html = body;
        var filePath = `./${html.nome}`;       

        var fileBuffer = HtmlDocx.asBlob(html.docHtml);

        console.log(typeof fileBuffer)
        fs.writeFileSync(filePath, fileBuffer, (error) => {
            if (error) {
                console.log('Docx file creation failed');
                return;
            }

            console.log('Docx file created successfully');
        });
        fs.createReadStream(filePath).pipe(res);     
      
        
    }
    catch (err) {
        console.error('Error==>:', err)
        return res.end(err)
    }
}