const nodemailer = require('nodemailer');
const express = require('express');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })
  var upload = multer({ storage: storage }).array('file', 100);

const path = require('path');
const res = require('express/lib/response');
const req = require('express/lib/request');
const PORT = process.env.PORT || 3000

const app = express();

app.use(express.static(path.join(__dirname + 'public/uploads')))

app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/index.html")
});
 app.use(express.urlencoded({extended: false}));
let paths = []

app.post('/sendemail', (req, res) =>{
    upload(req, res, (error) =>{
        if(error){
            console.log("Error in uploading files")
            return
        }else{
            console.log(req.body);
            const { cliente, cedula, tamano, precio} = req.body;
            contentHTML = `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
            
            <head>
                <meta charset="UTF-8">
                <meta content="width=device-width, initial-scale=1" name="viewport">
                <meta name="x-apple-disable-message-reformatting">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta content="telephone=no" name="format-detection">
                <title></title>
                <!--[if (mso 16)]>
                <style type="text/css">
                a {text-decoration: none;}
                </style>
                <![endif]-->
                <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
                <!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG></o:AllowPNG>
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            </head>
            
            <body>
                <div class="es-wrapper-color">
                    <!--[if gte mso 9]>
                        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                            <v:fill type="tile" color="#f1f1f1"></v:fill>
                        </v:background>
                    <![endif]-->
                    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td class="esd-email-paddings" valign="top">
                                    <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" esd-custom-block-id="7958" align="center">
                                                    <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p15t es-p15b es-p10r es-p10l" align="left">
                                                                    <!--[if mso]><table width="580" cellpadding="0" cellspacing="0"><tr><td width="282" valign="top"><![endif]-->
                                                                    <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="282" align="left">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                               
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!--[if mso]></td><td width="20"></td><td width="278" valign="top"><![endif]-->
                                                                    <table class="es-right" cellspacing="0" cellpadding="0" align="right">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="278" align="left">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!--[if mso]></td></tr></table><![endif]-->
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table cellpadding="0" cellspacing="0" class="es-header" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" esd-custom-block-id="88999" align="center">
                                                    <table class="es-header-body" style="background-color: #ffffff;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p30t es-p30b es-p40r es-p40l" style="background-color: #333333;" bgcolor="#333333" align="left">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="520" valign="top" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                           
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" esd-custom-block-id="7388" align="center">
                                                    <table class="es-content-body" style="background-color: #333333;" width="600" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure esd-checked es-p40t es-p40b es-p40r es-p40l" style="background-image: url('https://tlr.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png'); background-repeat: no-repeat;" align="left">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="520" valign="top" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-text es-p40t es-p10b">
                                                                                                    <h1 style="color: #ffffff;">Información de solicitud</h1>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                        
                                                                                            </tr>
                                                                                    
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" align="center">
                                                    <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p40t es-p40r es-p40l" esd-custom-block-id="7389" align="left">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="520" valign="top" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p5t es-p15b es-m-txt-c" align="left">
                                                                                                    <h2 style = "color: rgb(62, 143, 209);">Solicitud De Crédito</h2>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p10b" align="left">
                                                                                                    <p style = "font-weight: 50;"><strong>Nombre del Cliente: </strong>${cliente}</p>
                                                                                                </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                
                                                                                                <td class="esd-block-text es-p10b" align="left">
                                                                                                <p><strong>n.º de cédula Jurídica:</strong> ${cedula}</p>
                                                                                            </td>
                                                                                           
                                                                                            </tr>
                                                                                            
                                                                                            </tr>
                                                                                            <tr>
                                                                                            <td class="esd-block-text es-p10b" align="left">
                                                                                            <p><strong>Tamaño del Sistema(kW): </strong>${tamano}</p>
                                                                                        </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                        
                                                                                        <td class="esd-block-text es-p10b" align="left">
                                                                                            <p><strong>Precio del Sistema(USD): </strong>${precio}</p>
                                                                                        </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p10t es-p10b" align="left">
                                                                                                    <p>GoSolar</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="esd-structure es-p10t es-p40b es-p40r es-p40l" esd-custom-block-id="7390" align="left">
                                                                    <!--[if mso]><table width="520" cellpadding="0"
                                        cellspacing="0"><tr><td width="40" valign="top"><![endif]-->
                                                                    <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="es-m-p0r es-m-p20b esd-container-frame" width="40" valign="top" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!--[if mso]></td><td width="20"></td><td width="460" valign="top"><![endif]-->
                                                                    <table cellspacing="0" cellpadding="0" align="right">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="460" align="left">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p10t" align="left">
                                                                                                    <p style="color: #222222; font-size: 14px;"><strong>GoSolar</strong><br></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text" align="left">
                                                                                                    <p style="color: #666666; font-size: 14px;">GoSolar | Solicitud de Crédito</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!--[if mso]></td></tr></table><![endif]-->
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" esd-custom-block-id="7392" align="center">
                                                    <table class="es-content-body" style="background-color: #26a4d3;" width="600" cellspacing="0" cellpadding="0" bgcolor="#26a4d3" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p40t es-p20b es-p40r es-p40l" style="background-color: #26a4d3;" bgcolor="#26a4d3" align="left">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="520" valign="top" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-m-txt-c" align="center">
                                                                                                    <h2 style="color: #ffffff;">Estados Financieros<br></h2>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p5t es-p10b" align="center">
                                                                                                    <p style="color: #aad4ea; font-size: 17px;">Descargue abajo el archivo de estado financiero.<br></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" esd-custom-block-id="7393" align="center">
                                                    <table class="es-content-body" style="background-color: #292828;" width="600" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p30t es-p30b es-p40r es-p40l" align="left">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="520" valign="top" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-social" align="center" style="font-size:0">
                                                                                                    <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td class="es-p10r" valign="top" align="center"><a target="_blank" href><img title="Facebook" src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24"></a></td>
                                                                                                                <td class="es-p10r" valign="top" align="center"><a target="_blank" href><img title="Twitter" src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-white/twitter-circle-white.png" alt="Tw" width="24" height="24"></a></td>
                                                                                                                <td class="es-p10r" valign="top" align="center"><a target="_blank" href><img title="Instagram" src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24"></a></td>
                                                                                                                <td valign="top" align="center"><a target="_blank" href><img title="Linkedin" src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-white/linkedin-circle-white.png" alt="In" width="24" height="24"></a></td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" esd-custom-block-id="7394" align="center">
                                                    <table class="es-footer-body" style="background-color: #ffffff;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p40t es-p40b es-p40r es-p40l" align="left">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="520" valign="top" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p10b" align="center">
                                                                                                    <p>RTC | Solicitud</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p10b" align="center">
                                                                                                    <p>Email to contact Us</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="center" class="esd-block-text es-p10b">
                                                                                                    <p><a target="_blank" href="cmadrigal@realtimeassistance.com">Email | RTC</a>  </p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text" align="center">
                                                                                                    <p>Copyright © 2015-2018 <strong>Real Time Consulting</strong>, All Rights Reserved.</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="esd-footer-popover es-content" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe" align="center">
                                                    <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body>
            
            </html>
               `
            req.files.forEach(file => {
                paths.push({
                    filename: "Estado Financiero" + "file" + path.extname(file.originalname),
                    path: file.path
                })
            });
            res.send('Su Email ha sido enviado de forma exitosa');
            console.log(paths)

            sendEmail(paths)
                .then((result) =>{
                    console.log('Email is sent' + result)
            })
            .catch((error) =>{
            console.log('Ha sucedido algo: ' + error.message)
            });
            
        }
    });
})


app.listen(PORT, () =>{
    console.log("App is listening on PORT http://localhost:3000")
})

async function sendEmail(paths){
    try{

        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
            user: 'zelayajeremy875@gmail.com',
            pass: 'rhpanyenmczbngzn',
            },
        });


        const mailOptions = {
            from: '"📧Solicitud de crédito📧"<zelayajeremy875@gmail.com>',
            to: 'zelayajeremy874@gmail.com',
            html: contentHTML,
            subject: 'Solicitud de Crédito',
            
            attachments: paths
        };

        const result = await transport.sendMail(mailOptions);

        return result;

    }catch(error){
        return error
    };
};