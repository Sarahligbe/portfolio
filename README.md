# Portfolio
This repository contains the code for my portfolio  
You can view the portfolio [here](https://sarahligbe.live)  

The portfolio is built with HTML, CSS, and Javascript.   
Docker is used for containerization, and Docker compose is used to aid interaction between the portfolio container and the certbot container.  
Certbot is used with Let's Encrypt to provide an SSL/TLS certificate for the site.  

The code can be found in the `data/certbot/www/` directory  
The init-letsencrypt.sh script is used to request a certificate from Let's Encrypt
