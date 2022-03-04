const fs = require('fs');
const ofx = require('node-ofx-parser');

module.exports = async (req, res) => {
    try {
        const { app, params, body } = req        
        var filePath = `./test.ofx`;       
       
        fs.writeFileSync(filePath, body.arquivo, (error) => {
            if (error) {
                console.log('Docx file creation failed');
                return;
            }

            console.log('Docx file created successfully');
        });


        fs.readFile(filePath, 'utf8', (err, ofxData) => {
            if (err) {
                console.log('Ofx file creation failed');
                return;
            }
            
            const data = ofx.parse(ofxData);     
            fs.rmSync(filePath, {
                force: true,
            });      
            res.json(data)         
            

        })


    }
    catch (err) {
        console.error('Error==>:', err)
        return res.end(err)
    }
}

