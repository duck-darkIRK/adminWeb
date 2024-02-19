import React from 'react';
import ReactDOMServer from 'react-dom/server';

class ContactUs extends React.Component {
    componentDidMount() {
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);

        document.querySelector('#contact-form').addEventListener('submit', this.handleFormSubmit);
        document.querySelector('#title-form').addEventListener('change', this.handleTitleChange);
        document.querySelector('#message-form').addEventListener('change', this.handleMessageChange);
    }

    componentWillUnmount() {
        document.querySelector('#contact-form').removeEventListener('submit', this.handleFormSubmit);
        document.querySelector('#title-form').removeEventListener('change', this.handleTitleChange);
        document.querySelector('#message-form').removeEventListener('change', this.handleMessageChange);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const data = {
            title: document.querySelector('#title-form').value,
            message: document.querySelector('#message-form').value
        };

        window.location.href = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=blackcatstudio2024@gmail.com&su=${encodeURIComponent(data.title)}&body=${encodeURIComponent(data.message)}`;
    }

    handleTitleChange(e) {
        const form = document.querySelector('#message-form');
        if (e.target.value === 'Đóng góp ý kiến') {
            form.placeholder = `Ý kiến đưa ra?\nGiải quyết vấn đề gì?\nPhương pháp thực hiện(nếu có).`;
        } else if (e.target.value === 'Yêu cầu xóa tài khoản hoặc một phần dữ liệu') {
            form.placeholder = `Tên tài khoản?\nLý do của yêu cầu?\nThành phần yêu cầu xóa?`;
        } else {
            form.placeholder = `Vị trí lỗi?\nMô tả lỗi?\nphương pháp giải quyết(nếu có)`;
        }
    }

    handleMessageChange(e) {
        // Không cần làm gì cả vì chúng ta đã cập nhật data.message trong handleFormSubmit
    }


    render() {
        const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Responsive Contact Form</title>
        <link href='https://fonts.googleapis.com/css?family=Lato:400,100,300' rel='stylesheet' type='text/css'>
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,400,700" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Oswald:200,400,700" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <script src="https://use.fontawesome.com/20ab91acc4.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'>
        <link rel="stylesheet" href="./style.css">
        <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #000;
            padding-bottom: 100px;
          }
          
          #contact {
            width: 100%;
            height: 100%;
          }
          
          .section-header {
            text-align: center;
            margin: 0 auto;
            padding: 40px 0;
            font: 300 60px 'Oswald', sans-serif;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 6px;
          }
          
          .contact-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            max-width: 840px;
          }
          
          /* Left contact page */
          .form-horizontal {
            /*float: left;*/
            max-width: 400px;
            font-family: 'Lato';
            font-weight: 400;
          }
          
          .form-control, 
          textarea {
            max-width: 400px;
            background-color: #000;
            color: #fff;
            letter-spacing: 1px;
          }
          
          .send-button {
            margin-top: 15px;
            height: 34px;
            width: 400px;
            overflow: hidden;
            transition: all .2s ease-in-out;
          }
          
          .alt-send-button {
            width: 400px;
            height: 34px;
            transition: all .2s ease-in-out;
          }
          
          .send-text {
            display: block;
            margin-top: 10px;
            font: 700 12px 'Lato', sans-serif;
            letter-spacing: 2px;
          }
          
          .alt-send-button:hover {
            transform: translate3d(0px, -29px, 0px);
          }
          
          /* Begin Right Contact Page */
          .direct-contact-container {
            max-width: 400px;
          }
          
          /* Location, Phone, Email Section */
          .contact-list {
            list-style-type: none;
            margin-left: -30px;
            padding-right: 20px;
          }
          
          .list-item {
            line-height: 4;
            color: #aaa;
          }
          
          .contact-text {
            font: 300 18px 'Lato', sans-serif;
            letter-spacing: 1.9px;
            color: #bbb;
          }
          
          .place {
            margin-left: 62px;
          }
          
          .phone {
            margin-left: 56px;
          }
          
          .gmail {
            margin-left: 53px;
          }
          
          .contact-text a {
            color: #bbb;
            text-decoration: none;
            transition-duration: 0.2s;
          }
          
          .contact-text a:hover {
            color: #fff;
            text-decoration: none;
          }
          
          
          /* Social Media Icons */
          .social-media-list {
            position: relative;
            font-size: 22px;
            text-align: center;
            width: 100%;
            margin: 0 auto;
            padding: 0;
          }
          
          .social-media-list li a {
            color: #fff;
          }
          
          .social-media-list li {
            position: relative; 
            display: inline-block;
            height: 60px;
            width: 60px;
            margin: 10px 3px;
            line-height: 60px;
            border-radius: 50%;
            color: #fff;
            background-color: rgb(27,27,27);
            cursor: pointer; 
            transition: all .2s ease-in-out;
          }
          
          .social-media-list li:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 60px;
            height: 60px;
            line-height: 60px;
            border-radius: 50%;
            opacity: 0;
            box-shadow: 0 0 0 1px #fff;
            transition: all .2s ease-in-out;
          }
          
          .social-media-list li:hover {
            background-color: #fff; 
          }
          
          .social-media-list li:hover:after {
            opacity: 1;  
            transform: scale(1.12);
            transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
          }
          
          .social-media-list li:hover a {
            color: #000;
          }
          
          .copyright {
            font: 200 14px 'Oswald', sans-serif;
            color: #555;
            letter-spacing: 1px;
            text-align: center;
          }
          
          hr {
            border-color: rgba(255,255,255,.6);
          }
          
          /* Begin Media Queries*/
          @media screen and (max-width: 850px) {
            .contact-wrapper {
              display: flex;
              flex-direction: column;
            }
            .direct-contact-container, .form-horizontal {
              margin: 0 auto;
            }  
            
            .direct-contact-container {
              margin-top: 60px;
              max-width: 300px;
            }    
            .social-media-list li {
              height: 60px;
              width: 60px;
              line-height: 60px;
            }
            .social-media-list li:after {
              width: 60px;
              height: 60px;
              line-height: 60px;
            }
          }
          
          @media screen and (max-width: 569px) {
          
            .direct-contact-container, .form-wrapper {
              float: none;
              margin: 0 auto;
            }  
            .form-control, textarea {
              
              margin: 0 auto;
            }
           
            
            .name, .email, textarea {
              width: 280px;
            } 
            
            .direct-contact-container {
              margin-top: 60px;
              max-width: 280px;
            }  
            .social-media-list {
              left: 0;
            }
            .social-media-list li {
              height: 55px;
              width: 55px;
              line-height: 55px;
              font-size: 2rem;
            }
            .social-media-list li:after {
              width: 55px;
              height: 55px;
              line-height: 55px;
            }
            
          }
          
          @media screen and (max-width: 410px) {
            .send-button {
              width: 99%;
            }
          }
        </style>
      </head>
      <body>
      <!-- partial:index.partial.html -->
      <section id="contact">
        
        <h1 class="section-header"><img style="aspect-ratio: 1; height: 100px; filter: drop-shadow(2px 4px 6px white);" src="https://firebasestorage.googleapis.com/v0/b/testgame-d8af2.appspot.com/o/icon.png?alt=media&token=f5c02dfa-e3ca-43eb-8330-fb56439f9c8b" alt="">Contact</h1>
    
        <div class="contact-wrapper">
    
          <!-- Left contact page -->
    
          <form id="contact-form" class="form-horizontal" role="form">
            
            <!-- <div class="form-group">
              <div class="col-sm-12">
                <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required>
              </div>
            </div> -->
    
            <div class="form-group">
              <div class="col-sm-12">
                <!-- <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required> -->
                <input id="title-form" class="form-control" list="title" placeholder="TITLE">
                <datalist id="title">
                  <option value="Đóng góp ý kiến">
                  <option value="Yêu cầu xóa tài khoản hoặc một phần dữ liệu">
                  <option value="Báo cáo lỗi">
                </datalist>
              </div>
            </div>
    
    
            <textarea id="message-form" class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
    
            <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
              <div class="alt-send-button">
                <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
              </div>
    
            </button>
    
          </form>
    
          <!-- Left contact page -->
    
          <div class="direct-contact-container">
    
            <ul class="contact-list">
              <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">HaNoi,
                    VietNam</span></i></li>
    
              <li class="list-item"><i class="fa fa fa-building-o fa-2x"><span class="contact-text phone">Blackcat Studio</span></i></li>
    
              <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=blackcatstudio2024@gmail.com"
                      title="Send me an email">blackcatstudio2024</a></span></i></li>
    
            </ul>
    
            <hr>
            <ul class="social-media-list">
              <li><a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-github" aria-hidden="true"></i></a>
              </li>
              <!-- <li><a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-codepen" aria-hidden="true"></i></a>
              </li> -->
              <!-- <li><a href="#" target="_blank" class="contact-icon">
                  <i class="fa fa-twitter" aria-hidden="true"></i></a>
              </li> -->
              <li><a href="https://codepen.io/bobbykorec" target="_blank" class="contact-icon">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i></a>
              </li>
            </ul>
            <hr>
    
            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
            <div class="copyright">Make by: BOBBY KOREC</div>
            <div class="copyright">Edit by: I don't know</div>
    
          </div>
    
        </div>
    
      </section>
    
      <div class="copyright" style="margin-top: 40px; ">Nếu bạn có yêu cầu nào ngoài form viết sẵn hoặc hình ảnh xin thông qua đường dẫn để đến gmail.</div>
      <div class="copyright" style="font-size: 20px ">Xin cảm ơn.</div>
    
      <!-- partial -->
      <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
      <script src='//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'></script>
      </body>
      </html>
    `;

        return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    }
}

export default ContactUs;
