"use strict";(self.webpackChunkgloria_tilog_root=self.webpackChunkgloria_tilog_root||[]).push([[6371],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),k=r,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||o;return a?t.createElement(m,s(s({ref:n},p),{},{components:a})):t.createElement(m,s({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=k;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7498:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],i={title:"[CI/CD] Configuration CI (1) - Install Jenkins (master-slave) with nginx proxy",tags:["jenkins","sonarQube","coverage"],date:"2021-05-13T09:31"},l=void 0,c={permalink:"/gloria-tilog/2021/05/13/ci/install-ci-jenkins",source:"@site/blog/ci/2021/05-13-install-ci-jenkins/index.mdx",title:"[CI/CD] Configuration CI (1) - Install Jenkins (master-slave) with nginx proxy",description:"\ud68c\uc0ac\uc5d0\uc11c \uac1c\ubc1c \ud658\uacbd\uc5d0 \ub300\ud55c CI \ud658\uacbd \uad6c\uc131\uc744 \ud558\uba70 \uc815\ub9ac\ud588\ub358 \uae30\ub85d\uc774\ub2e4.",date:"2021-05-13T09:31:00.000Z",formattedDate:"May 13, 2021",tags:[{label:"jenkins",permalink:"/gloria-tilog/tags/jenkins"},{label:"sonarQube",permalink:"/gloria-tilog/tags/sonar-qube"},{label:"coverage",permalink:"/gloria-tilog/tags/coverage"}],readingTime:8.71,hasTruncateMarker:!0,authors:[],frontMatter:{title:"[CI/CD] Configuration CI (1) - Install Jenkins (master-slave) with nginx proxy",tags:["jenkins","sonarQube","coverage"],date:"2021-05-13T09:31"},prevItem:{title:"[CI/CD] Configuration CI (2) - Install Jenkins (master-slave) Plugins",permalink:"/gloria-tilog/2021/05/14/ci/configuration-ci-jenkins"},nextItem:{title:"[Nginx] Reverse Proxy",permalink:"/gloria-tilog/2021/01/20/server/nginx-proxy"}},p={authorsImageUrls:[]},u=[{value:"Create the nginx config files",id:"create-the-nginx-config-files",level:2},{value:"./conf/nginx.conf",id:"confnginxconf",level:3},{value:"./conf/jenkins.conf",id:"confjenkinsconf",level:3},{value:"Create docker compose files",id:"create-docker-compose-files",level:2},{value:"jenkins \uc720\uc800 \uc0dd\uc131 \ubc0f jenkin home \ud3f4\ub354 \uc0dd\uc131",id:"jenkins-\uc720\uc800-\uc0dd\uc131-\ubc0f-jenkin-home-\ud3f4\ub354-\uc0dd\uc131",level:3},{value:"docker container \uae30\ub3d9",id:"docker-container-\uae30\ub3d9",level:3},{value:"Getting Started Jenkins",id:"getting-started-jenkins",level:2},{value:"Add jenkins slave node",id:"add-jenkins-slave-node",level:2},{value:"docker compose\uc5d0 slave \ub178\ub4dc \uc815\uc758 \ucd94\uac00",id:"docker-compose\uc5d0-slave-\ub178\ub4dc-\uc815\uc758-\ucd94\uac00",level:3},{value:"\ub178\ub4dc \ucd94\uac00",id:"\ub178\ub4dc-\ucd94\uac00",level:3},{value:"Trouble Shooting",id:"trouble-shooting",level:2},{value:"java.io.IOException: Java not found on hudson.slaves.SlaveComputer@63a0ae53. Install Java 8 or Java 11 on the Agent.",id:"javaioioexception-java-not-found-on-hudsonslavesslavecomputer63a0ae53-install-java-8-or-java-11-on-the-agent",level:3},{value:"java.io.IOException: Could not copy remoting.jar into &#39;/var/jenkins_home &#39; on agent",id:"javaioioexception-could-not-copy-remotingjar-into-varjenkins_home--on-agent",level:3},{value:"References",id:"references",level:2}],d={toc:u},k="wrapper";function m(e){var n=e.components,i=(0,r.Z)(e,s);return(0,o.kt)(k,(0,t.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud68c\uc0ac\uc5d0\uc11c \uac1c\ubc1c \ud658\uacbd\uc5d0 \ub300\ud55c CI \ud658\uacbd \uad6c\uc131\uc744 \ud558\uba70 \uc815\ub9ac\ud588\ub358 \uae30\ub85d\uc774\ub2e4."),(0,o.kt)("p",null,"\uad6c\uc131\ud55c \ud658\uacbd\uc740 \uc544\ub798\uc640 \uac19\ub2e4."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Server: CentOS 7.9 8cpu 32ram 100G SSD\nDocker v20.10.7\nDocker Compose v1.28.6\nJenkins v2.277.4\nSonarQube v7.9.4")),(0,o.kt)("p",null,"\uc820\ud0a8\uc2a4\ub97c \uc11c\ubc84\uc5d0 \uc124\uce58 \ubc0f \uc124\uc815\uc744 \ud558\ub294 \uacfc\uc815\uc774\ub2e4.\n\uc820\ud0a8\uc2a4\uc758 \uc124\uce58 \ud658\uacbd \uad6c\uc131\uc740 \ub3c4\ucee4 \ud658\uacbd \uc704\uc5d0 Jenkins\uc640 SSL \uc801\uc6a9\uc744 \uc704\ud574 nginx\ub97c \uc124\uce58\ud558\uc5ec proxy \uad6c\uc131\uc744 \ud558\uc600\ub2e4."),(0,o.kt)("h2",{id:"create-the-nginx-config-files"},"Create the nginx config files"),(0,o.kt)("h3",{id:"confnginxconf"},"./conf/nginx.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'user nginx;\nworker_processes 1;\n\nerror_log /var/log/nginx/error.log warn;\npid /var/run/nginx.pid;\n\nevents {\n    worker_connections 1024;\n}\n\nhttp {\n    include /etc/nginx/mime.types;\n    default_type application/octet-stream;\n\n    # \uc6f9 \uc124\uc815\ud558\ub294 \ubd80\ubd84\n    include /etc/nginx/conf.d/*.conf;\n\n    # \ub85c\uadf8 \ud30c\uc77c\uc5d0 \ub300\ud55c \ud3ec\ub9f7\uc744 \uc124\uc815\ud574\uc8fc\ub294 \ubd80\ubd84\n    log_format main \'$remote_addr - $remote_user [$time_local] "$request" \'\n      \'$status $body_bytes_sent "$http_referer" \'\n      \'"$http_user_agent" "$http_x_forwarded_for"\';\n    access_log /var/log/nginx/access.log main;\n\n    # https://www.lesstif.com/system-admin/nginx-http-413-client-intended-to-send-too-large-body-86311189.html\n    client_max_body_size 8M;\n\n    # gzip configuration\n    gzip on;\n    gzip_disable "msie6";\n    gzip_min_length 10240;\n    gzip_buffers 32 32k;\n    gzip_comp_level 9;\n    gzip_proxied any;\n    gzip_types text/plain application/javascript application/x-javascript text/javascript text/xml text/css;\n    gzip_vary on;\n\n    sendfile on;\n    keepalive_timeout 65;\n}\n\n')),(0,o.kt)("h3",{id:"confjenkinsconf"},"./conf/jenkins.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'upstream jenkins {\n    server jenkins-master:8080;\n}\n\nserver {\n    listen 80 default_server;\n    listen [::]:80 default_server;\n    server_name "_";\n\n    location / {\n    proxy_set_header    X-Real-IP           $remote_addr;\n    proxy_set_header    X-Forwarded-For     $proxy_add_x_forwarded_for;\n    proxy_set_header    X-Forwarded-Proto   $scheme;\n    proxy_set_header    Host                $host;\n    proxy_set_header    X-Forwarded-Host    $host;\n    proxy_set_header    X-Forwarded-Port    $server_port;\n    proxy_set_header    X-NginX-Proxy       true;\n    proxy_pass_header   Set-Cookie;\n    proxy_http_version  1.1;\n    proxy_cache_bypass  $http_upgrade;\n    proxy_pass http://jenkins/;\n   }\n}\n')),(0,o.kt)("h2",{id:"create-docker-compose-files"},"Create docker compose files"),(0,o.kt)("p",null,"\uba3c\uc800 jenkins master node\ub97c \uc704\ud55c \ucee8\ud14c\uc774\ub108\uc640 nginx \ucee8\ud14c\uc774\ub108\ub97c \uc815\uc758\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'version: "3"\nservices:\n  nginx:\n    image: nginx:latest\n    container_name: nginx\n    hostname: nginx\n    privileged: true\n    restart: always\n    volumes:\n      - ./conf/jenkins.conf:/etc/nginx/conf.d/jenkins.conf\n      - ./conf/nginx.conf:/etc/nginx/nginx.conf\n    ports:\n      - 80:80\n    environment:\n      - TZ=Asia/Seoul\n    depends_on:\n      - jenkins-master\n\n  jenkins-master:\n    image: jenkins/jenkins:lts\n    container_name: jenkins-master\n    hostname: jenkins-master\n    privileged: true\n    restart: always\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n      - /usr/bin/docker:/usr/bin/docker\n      - $HOME/jenkins_master:/var/jenkins_home\n    environment:\n      - TZ=Asia/Seoul\n')),(0,o.kt)("h3",{id:"jenkins-\uc720\uc800-\uc0dd\uc131-\ubc0f-jenkin-home-\ud3f4\ub354-\uc0dd\uc131"},"jenkins \uc720\uc800 \uc0dd\uc131 \ubc0f jenkin home \ud3f4\ub354 \uc0dd\uc131"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"jenkins_home")," \ud3f4\ub354\ub97c \uc0dd\uc131\ud558\uc5ec \uc820\ud0a8\uc2a4 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc18c\uc720\uad8c\uc744 \ub118\uae30\uae30 \uc704\ud55c \uacfc\uc815\uc774\ub2e4."),(0,o.kt)("p",null,"\uc820\ud0a8\uc2a4 \ub0b4\ubd80\uc5d0\uc11c \uc0dd\uc131\ub418\ub294 jenkins \uc720\uc800\uc758 id\ub294 \uae30\ubcf8\uc801\uc73c\ub85c 1000\uc778\ub370, \ud574\ub2f9 \uc720\uc800\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uc73c\uba74 \uad8c\ud55c \ubd80\uc5ec \uc2dc \uc544\uc774\ub514\ub85c \uc8fc\uba74\ub418\ubbc0\ub85c \uc0ac\uc6a9\uc790 \uc0dd\uc131 \ubd80\ubd84\uc740 \uc0dd\ub7b5\ud574\ub3c4 \ub41c\ub2e4.\n\ud558\uc9c0\ub9cc, \ub098\ub294 \uc774\uc655\uc774\uba74 \uc544\uc774\ub514\ubcf4\ub2e4 \uc0ac\uc6a9\uc790\uba85\uc73c\ub85c \ubcf4\uc774\ub294 \uac8c \uc88b\uc740 \uac83 \uac19\uc544\uc11c \ub3d9\uc77c\ud55c \uc544\uc774\ub514\ub85c \ub85c\uceec \uc11c\ubc84\uc5d0 jenkins \uc720\uc800\ub97c \uc0dd\uc131\ud558\uace0, docker \uadf8\ub8f9\uc5d0 \ud3ec\ud568\uc2dc\ucf30\ub2e4.\n(docker \uadf8\ub8f9\uc740 docker \uc124\uce58 \uc2dc\uc5d0 \uc0dd\uc131\ub418\ub294 group \uc774\ub2e4.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /usr/sbin/useradd jenkins -u 1000\nsudo /usr/sbin/usermod -aG docker jenkins\n")),(0,o.kt)("p",null,"\ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \uc2e4\ud589 \uc804\uc5d0 \uc820\ud0a8\uc2a4 \ud30c\uc77c\uc774 \uc704\uce58\ud560 \ud3f4\ub354 \uc0dd\uc131\ub97c \uc0dd\uc131\ud574\uc8fc\uace0, jenkins \uc720\uc800\uc5d0\uac8c \uc18c\uc720\uad8c\uc744 \ub118\uaca8\uc900\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /home1/irteam/jenkins_home\nsudo chown -R jenkins:docker /home1/irteam/jenkins_home\n")),(0,o.kt)("h3",{id:"docker-container-\uae30\ub3d9"},"docker container \uae30\ub3d9"),(0,o.kt)("p",null,"\uc774\uc81c \uc704\uc5d0\uc11c \uc0dd\uc131\ud55c docker compose \ud30c\uc77c\uc744 \uc774\uc6a9\ud558\uc5ec \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\ub97c \ub744\uc6b4\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,o.kt)("p",null,"\ucee8\ud14c\uc774\ub108 \uc2e4\ud589 \ud6c4\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \uba85\ub839\uc5b4\ub97c \uc774\uc6a9\ud558\uc5ec \uc815\uc0c1\uc801\uc73c\ub85c \uae30\ub3d9 \ubc0f \uc2e4\ud589 \uc911\uc778\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ docker ps\nCONTAINER ID   IMAGE                      COMMAND                  CREATED          STATUS                  PORTS                                NAMES\n7b527bf37770   nginx:latest               "/docker-entrypoint.\u2026"   41 minutes ago   Up 24 minutes           0.0.0.0:80->80/tcp                   nginx\n66c7edd6be59   jenkins/jenkins:lts        "/sbin/tini -- /usr/\u2026"   41 minutes ago   Up 24 minutes           8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins-master\n')),(0,o.kt)("p",null,"\ub9cc\uc57d, \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108 \uc2e4\ud589 \uc2dc \ud6c4\uc5d0 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc600\ub2e4\uac70\ub098, \uc2e4\ud589 \ub85c\uadf8\ub97c \ud655\uc778\ud558\uace0 \uc2f6\uc73c\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker container logs <container_name>\n\n# ex) docker container logs jenkins\n")),(0,o.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \uc820\ud0a8\uc2a4\uac00 \uc2e4\ud589\uc774 \ub418\uc5c8\ub2e4\uba74...nginx\uc5d0\uc11c \uc820\ud0a8\uc2a4\uc758 8080 \ud3ec\ud2b8\ub97c nginx\ub97c \ud1b5\ud558\uc5ec 80 \ud3ec\ud2b8\ub85c \ud3ec\ud2b8\ud3ec\uc6cc\ub529 \ucc98\ub9ac\ub97c \ud558\uc600\uc73c\ubbc0\ub85c \uc6f9\ube0c\ub77c\uc6b0\uc800\ub97c \ud1b5\ud558\uc5ec ",(0,o.kt)("strong",{parentName:"p"},"http://<server_ip>")," \uc8fc\uc18c\ub85c \uc820\ud0a8\uc2a4 \uad00\ub9ac\uc790 \ud654\uba74\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("h2",{id:"getting-started-jenkins"},"Getting Started Jenkins"),(0,o.kt)("p",null,"\uc820\ud0a8\uc2a4\uc5d0 \uc124\uce58 \ud6c4 \uc6f9 \ube0c\ub77c\uc6b0\uc800\ub97c \uc774\uc6a9\ud558\uc5ec \ucd5c\ucd08\ub85c \uc811\uc18d\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc124\uce58 \uc2dc \uc124\uc815\ub41c \ucd08\uae30 \ud328\uc2a4\uc6cc\ub4dc\ub97c \ud655\uc778\ud558\uc5ec \uc811\uc18d\ud574\uc57c\ud55c\ub2e4.\n\ucd08\uae30 \ud328\uc2a4\uc6cc\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ubc29\ubc95\uc73c\ub85c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword\n")),(0,o.kt)("p",null,"\ud574\ub2f9 \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc774\uc6a9\ud558\uc5ec \ub85c\uadf8\uc778\uc744 \ud558\uace0 \ub098\uba74 \uc544\ub798\uc640 \uac19\uc774 \ud50c\ub7ec\uadf8\uc778\uc744 \uc124\uce58\ud558\ub77c\ub294 \ub9e4\ub274\uac00 \ub098\uc628\ub2e4.\n\ub300\ubd80\ubd84 \uae30\ubcf8\uc801\uc73c\ub85c \uc820\ud0a8\uc2a4\uc5d0\uc11c \uc81c\uc548\ud558\ub294 \ud50c\ub7ec\uadf8\uc778\uc744 \uc124\uce58\ud558\uc9c0\ub9cc, \uc6d0\ud558\uba74 \uac01\uac01 \ubcc4\ub3c4\ub85c \ud50c\ub7ec\uadf8\uc778\uc744 \uace8\ub77c\uc11c \uc124\uce58\ud560 \uc218\ub3c4 \uc788\ub2e4.\n",(0,o.kt)("img",{alt:"getting-started-plugins",src:a(5557).Z,width:"1172",height:"732"})),(0,o.kt)("p",null,"\ud50c\ub7ec\uadf8\uc778 \uc124\uce58\uac00 \uc644\ub8cc\uac00 \ub418\uba74, \ucd08\uae30 \ub85c\uadf8\uc778 \uc0ac\uc6a9\uc790\uc5d0 \ub300\ud55c \uc124\uc815\uc744 \ud558\ub294 \ud654\uba74\uc774 \ub098\uc624\uac8c \ub41c\ub2e4."),(0,o.kt)("p",null,"\uadf8\ub7ec\uba74 \uc77c\ub2e8 \uc820\ud0a8\uc2a4 \uc124\uce58\ub294 \uc644\ub8cc!!!"),(0,o.kt)("h2",{id:"add-jenkins-slave-node"},"Add jenkins slave node"),(0,o.kt)("p",null,"\uc774\uc81c \uae30\ubcf8\uc801\uc778 \uc820\ud0a8\uc2a4 \uc124\uce58\ub294 \ub9c8\ucce4\uc73c\ubbc0\ub85c slave node \ucd94\uac00\ub97c \uc704\ud55c \uc124\uc815\uc744 \ud55c\ub2e4.\n\uc544\ub798\uc640 \uac19\uc774 master container\uc5d0 \uc811\uadfc\ud558\uc5ec ssh key\ub97c \uc0dd\uc131\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker container exec -it jenkins-master /bin/bash\njenkins@jenkins-master:/$  ssh-keygen -t rsa -C \"jenkins-master\"\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/var/jenkins_home/.ssh/id_rsa):\nCreated directory '/var/jenkins_home/.ssh'.\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in /var/jenkins_home/.ssh/id_rsa.\nYour public key has been saved in /var/jenkins_home/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:wmChG3ToFUv4hCSzvhAai2Rx/aRVHv63cDeaqjxehnM jenkins-master\nThe key's randomart image is:\n+---[RSA 2048]----+\n|ooo=*.  .o       |\n| =*+o+ oo .      |\n|++o++ =  o       |\n|*+.+.+ .  .      |\n|=..   o S  o o o |\n|. .    .  . + = .|\n| .       o E +   |\n|        ..= .    |\n|        .+o.     |\n+----[SHA256]-----+\n")),(0,o.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,o.kt)("strong",{parentName:"p"},"~/.ssh")," \ud3f4\ub354\ub85c \uc774\ub3d9\ud558\uc5ec ",(0,o.kt)("inlineCode",{parentName:"p"},"id_rsa.pub")," \ud0a4\ub97c \ud074\ub9bd\ubcf4\ub4dc\ub85c \ubcf5\uc0ac\ud574\ub454\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"jenkins@jenkins-master:/$ cat ~/.ssh/id_rsa.pub\nssh-rsa AAAAB3NzaC1yc.....\n")),(0,o.kt)("h3",{id:"docker-compose\uc5d0-slave-\ub178\ub4dc-\uc815\uc758-\ucd94\uac00"},"docker compose\uc5d0 slave \ub178\ub4dc \uc815\uc758 \ucd94\uac00"),(0,o.kt)("p",null,"\uc55e\uc5d0\uc11c \uc815\uc758\ud55c docker-compose.yml \ud30c\uc77c\uc5d0 slave node\uc5d0 \ub300\ud55c \uc815\uc758\ub97c \ucd94\uac00\ud574\uc900\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  jenkins-master:\n    image: jenkins/jenkins:lts\n    container_name: jenkins-master\n    hostname: jenkins-master\n    privileged: true\n    restart: always\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n      - /usr/bin/docker:/usr/bin/docker\n      - $HOME/jenkins_master:/var/jenkins_home\n    environment:\n      - TZ=Asia/Seoul\n    links:\n      - jenkins-agent01\n\n  jenkins-agent01:\n    image: jenkins/ssh-agent:latest\n    container_name: jenkins-agent01\n    hostname: jenkins-agent01\n    privileged: true\n    restart: always\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n      - /usr/bin/docker:/usr/bin/docker\n      - $HOME/jenkins_agent:/var/jenkins_home\n    environment:\n      - JENKINS_AGENT_SSH_PUBKEY=ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDLT3ZHpTr...\n      - TZ=Asia/Seoul\n")),(0,o.kt)("p",null,"\ucee8\ud14c\uc774\ub108\ub97c \uc7ac\uae30\ub3d9\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker container stop jenkins-master\ndocker container stop nginx\ndocker-compose up -d\n")),(0,o.kt)("h3",{id:"\ub178\ub4dc-\ucd94\uac00"},"\ub178\ub4dc \ucd94\uac00"),(0,o.kt)("p",null,"\uc820\ud0a8\uc2a4 \uc6f9\ud398\uc774\uc9c0\uc5d0 \uc811\uc18d\ud558\uc5ec \ub178\ub4dc \ucd94\uac00 \ud558\uae30 \uc804\uc5d0 ",(0,o.kt)("strong",{parentName:"p"},"Jenkins\uad00\ub9ac > Manage Credentials")," \uc5d0\uc11c ssh key\ub97c \ub4f1\ub85d\ud55c\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"credential",src:a(5022).Z,width:"2848",height:"1604"})),(0,o.kt)("p",null,"credential \ud0a4\ub97c \ub4f1\ub85d\ud55c \ub4a4\uc5d0 ",(0,o.kt)("strong",{parentName:"p"},"Jenkins\uad00\ub9ac > \ub178\ub4dc\uad00\ub9ac > \uc2e0\uaddc \ub178\ub4dc")," \ub9e4\ub274\ub85c \uc811\uadfc\ud558\uc5ec agent\ub97c \ub4f1\ub85d\ud55c\ub2e4.\n",(0,o.kt)("img",{alt:"add-node",src:a(1835).Z,width:"2842",height:"2004"})),(0,o.kt)("h2",{id:"trouble-shooting"},"Trouble Shooting"),(0,o.kt)("h3",{id:"javaioioexception-java-not-found-on-hudsonslavesslavecomputer63a0ae53-install-java-8-or-java-11-on-the-agent"},"java.io.IOException: Java not found on hudson.slaves.SlaveComputer@63a0ae53. Install Java 8 or Java 11 on the Agent."),(0,o.kt)("p",null,"agent \ub178\ub4dc \ucd94\uac00 \ud6c4\uc5d0 launch \uc2dc\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \uc5d0\ub7ec \ub85c\uadf8\uac00 \ub178\ucd9c\uc774 \ub418\uba74 ",(0,o.kt)("strong",{parentName:"p"},"Jenkins\uad00\ub9ac > \ub178\ub4dc\uad00\ub9ac"),"\uc5d0\uc11c \ud574\ub2f9 agent \ub178\ub4dc\uc758 java path\ub97c \uc124\uc815\ud574\uc900\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"java.io.IOException: Java not found on hudson.slaves.SlaveComputer@63a0ae53. Install Java 8 or Java 11 on the Agent.\n    at hudson.plugins.sshslaves.JavaVersionChecker.resolveJava(JavaVersionChecker.java:84)\n    at hudson.plugins.sshslaves.SSHLauncher$1.call(SSHLauncher.java:453)\n    at hudson.plugins.sshslaves.SSHLauncher$1.call(SSHLauncher.java:421)\n    at java.util.concurrent.FutureTask.run(FutureTask.java:266)\n    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n    at java.lang.Thread.run(Thread.java:748)\n[07/05/21 17:26:56] Launch failed - cleaning up connection\n")),(0,o.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc774 \ud574\ub2f9 agent \ub178\ub4dc\uc5d0 \uc811\uc18d\ud558\uc5ec java path\ub97c \ud655\uc778\ud558\uace0 \uc124\uc815"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker container exec -it jenkins-agent01 /bin/bash\nroot@jenkins-agent01:/home/jenkins# which java\n/usr/local/openjdk-8/bin/java\n")),(0,o.kt)("h3",{id:"javaioioexception-could-not-copy-remotingjar-into-varjenkins_home--on-agent"},"java.io.IOException: Could not copy remoting.jar into '/var/jenkins_home ' on agent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[07/05/21 17:35:37] [SSH] Remote file system root /var/jenkins_home  does not exist. Will try to create it...\njava.io.IOException: Could not copy remoting.jar into '/var/jenkins_home ' on agent\n    at hudson.plugins.sshslaves.SSHLauncher.copyAgentJar(SSHLauncher.java:738)\n    at hudson.plugins.sshslaves.SSHLauncher.access$400(SSHLauncher.java:111)\n    at hudson.plugins.sshslaves.SSHLauncher$1.call(SSHLauncher.java:456)\n    at hudson.plugins.sshslaves.SSHLauncher$1.call(SSHLauncher.java:421)\n    at java.util.concurrent.FutureTask.run(FutureTask.java:266)\n    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n    at java.lang.Thread.run(Thread.java:748)\nCaused by: java.io.IOException: Failed to mkdir /var/jenkins_home\n    at com.trilead.ssh2.jenkins.SFTPClient.mkdirs(SFTPClient.java:91)\n    at hudson.plugins.sshslaves.SSHLauncher.copyAgentJar(SSHLauncher.java:695)\n    ... 7 more\nCaused by: com.trilead.ssh2.SFTPException: Permission denied (SSH_FX_PERMISSION_DENIED: The user does not have sufficient permissions to perform the operation.)\n    at com.trilead.ssh2.SFTPv3Client.expectStatusOKMessage(SFTPv3Client.java:555)\n    at com.trilead.ssh2.SFTPv3Client.mkdir(SFTPv3Client.java:955)\n    at com.trilead.ssh2.jenkins.SFTPClient.mkdirs(SFTPClient.java:89)\n    ... 8 more\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://architectophile.tistory.com/12"},"(Nginx) \uae30\ubcf8 \uc124\uc815 \ubc29\ubc95")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://elvanov.com/2312"},"\uc2e4\uc81c\ub85c \uc0ac\uc6a9 \uac00\ub2a5\ud55c nginx \ud504\ub85d\uc2dc \uc11c\ubc84 \ub9cc\ub4e4\uae30 (docker-compose)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cornswrold.tistory.com/510"},"\uc820\ud0a8\uc2a4 Master/Slave \ubd84\uc0b0 \ube4c\ub4dc \ud658\uacbd \ub3c4\ucee4\ub85c \uad6c\ucd95\ud558\uae30"))))}m.isMDXComponent=!0},1835:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/jenkins-add-node-f412d9efbd2d76fa905632fe46fdcad7.png"},5557:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/jenkins-getting-started-plugins-4859f3f7c764f0d74d5d0fd9900e5ec7.png"},5022:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/jenkins-slave-credential-4714ded4246eae1344f34fe8922fc1e4.png"}}]);