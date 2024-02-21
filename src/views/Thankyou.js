import React from 'react';
import ReactDOMServer from 'react-dom/server';

class Thankyou extends React.Component {
    componentDidMount() {

    }

    render() {
        const htmlContent = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Responsive Contact Form</title>
        <link href='https://fonts.googleapis.com/css?family=Lato:400,100,300' rel='stylesheet' type='text/css'>
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,400,700" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Oswald:200,400,700" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro" rel="stylesheet">
        <script src="https://use.fontawesome.com/20ab91acc4.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'>
        <style>
        *{
            box-sizing:border-box;
           /* outline:1px solid ;*/
           
          }
          html, body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
          body{
            background: #ffffff;
            background: linear-gradient(to bottom, #ffffff 0%,#e1e8ed 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e1e8ed',GradientType=0 );
                height: 100%;
                    margin: 0;
                    background-repeat: no-repeat;
                     background-attachment: fixed;
            
          }
          
          .wrapper-1{
            width:100%;
            height:100vh;
            flex-direction: column;
            display: flex; /* Add this */
            justify-content: center; /* Add this */
            align-items: center; /* Add this */
        }        
          .wrapper-2{
            padding :30px;
            text-align:center;
          }
          h1{
              font-family: 'Kaushan Script', cursive;
            font-size:4em;
            letter-spacing:3px;
            color:#5892FF ;
            margin:0;
            margin-bottom:20px;
          }
          .wrapper-2 p{
            margin:0;
            font-size:1.3em;
            color:#aaa;
            font-family: 'Source Sans Pro', sans-serif;
            letter-spacing:1px;
          }
          .go-home{
            color:#fff;
            background:#5892FF;
            border:none;
            padding:10px 50px;
            margin:30px 0;
            border-radius:30px;
            text-transform:capitalize;
            box-shadow: 0 10px 16px 1px rgba(174, 199, 251, 1);
          }
          .footer-like {
            margin-top: auto; 
            background:#D7E6FE;
            padding:6px;
            text-align:center;
          }
          .footer-like p{
            margin:0;
            padding:4px;
            color:#5892FF;
            font-family: 'Source Sans Pro', sans-serif;
            letter-spacing:1px;
          }
          .footer-like p a{
            text-decoration:none;
            color:#5892FF;
            font-weight:600;
          }
          .copyright {
            font: 200 14px 'Oswald', sans-serif;
            color: #555;
            letter-spacing: 1px;
            text-align: center;
          }
          .copyrightFooter {
            padding-bottom: 20vh;
          }
          @media (min-width:360px){
            h1{
              font-size:4.5em;
            }
            .go-home{
              margin-bottom:20px;
            }
          }

          @media (min-width:600px){
            .content{
            max-width:1000px;
            margin:0 auto;
          }
            .wrapper-1{
            height: initial;
            max-width:620px;
            margin:0 auto;
            margin-top:50px;
            box-shadow: 4px 8px 40px 8px rgba(88, 146, 255, 0.2);
          }
        }
        </style>
      </head>
      <body>
        <div class=content>
        <div class="wrapper-1">
            <div class="wrapper-2">
            <h1>Thank you !</h1>
            <p>Thank you so much for your generous monetary gift.</p>
            </div>
        </div>
        </div>
        <div class="copyrightFooter">
        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        <div class="copyright">Make by: Kholoud Ameen</div>
        <div class="copyright">Edit by: Kain</div>
        </div>
      <!-- partial -->
      <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
      <script src='//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'></script>
      </body>
      </html>
    `

        return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    }
}

export default Thankyou;
