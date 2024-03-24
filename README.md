# Angular16

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


指令可以查看目前安裝了哪些版本
$ nvm ls
* 18.16.0 (Currently using 64-bit executable)
  14.21.3
  10.24.1
  8.17.0


查看目前安裝 Node.js 的版本
$ node -v
v18.16.0

$ npm -v
9.5.1


網址
http://localhost:4200/auth/log-in


帳密
jassi
jassicheng@yahoo.com.tw
Zxcv1234


# 列出目前有哪些 Node.js 版本可供安裝
> nvm list available

# 列出目前本機安裝哪些 Node.js 版本，及 active 哪一版
> nvm list

# 安裝指定 Node.js 版本
> nvm install 版本號

# 切換到指定 Node.js 版本
> nvm use 版本號

# 檢查當前 active 的 node 和 npm
> node -v
> npm -v



用 npm 安裝 jQuery
npm install jquery --save
npm install --save-dev @types/jquery

npm i --save-dev @types/jquery

在 angular-cli.json 找到 "scripts": []
"apps": [{
  ...
  "scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
  ],
  ...
}]

接著在你的 Component 裡面加上

import * as $ from 'jquery';


npm install lodash
npm install @types/lodash  --save-dev 

npm install lodash-es
npm install @types/lodash-es  --save-dev 

https://todomvc.com/



json-server --watch db.json


json-server --watch db.json --id TodoId --delay 1000

=====================================================================
https://github.com/bradcheng1203/angular14

git remote add origin https://github.com/bradcheng1203/angular14.git
git branch -M main
git push -u origin main


ng build --output-path docs --base-href /angular14/

https://bradcheng1203.github.io/angular14

#######################################################
=================================
apache 開啟專案
ng build --base-href /angular14/

.htaccess 內容
========================================================
RewriteEngine On 
RewriteBase /angular14/
# If an existing asset or directory is requested go to it as it is 
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR] 
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d 
RewriteRule ^ - [L] 
 
# If the requested resource doesn't exist, use index.html 
RewriteRule ^ /index.html


### 建立新專案 ####################################################
npx -p @angular/cli@14.1.0 ng new angular14


==Outputs Angular CLI version==
ng version

ng --help

npm install
npm start

=========================
Angular CLI: 17.2.1
Node: 18.19.1
Package Manager: npm 10.2.4
OS: win32 x64

建立新的project
>ng new helloworld

用 npm 安裝 jQuery
npm install jquery --save
npm i --save-dev @types/jquery


npm install lodash-es
npm install @types/lodash-es  --save-dev 


npm install -g json-server

json-server --watch db.json

-- 建立service
ng g s example

-- 產生component,html,
ng g c login

-- 產生 module檔及routing檔  因此會產生以下兩個檔案
ng g m login --routing

ng g m login2 --routing

ng g m notfound --routing

ng g c frameset  

ng g m frameset --routing


==== Build CRUD Application   ==================================
npx -p @angular/cli@15.0.0 ng new angular15
ng new angular17

ng add @angular/material

ng g c emp-add-edit

json-server --watch db.json

ng g s services/employee

npm i -g json-server@0.17.4


npx -p @angular/cli@16.1.0 ng new angular16

npm install ngx-toastr -save

ng g c menubar

ng g s core

ng g c login

ng g s services/auth

建立路由守衛
ng g g @guard/auth

ng g s @services/auth

ng g m menubar --routing

ng g c employee

/* 
  displayTimer$ !:Observable<number>; 
  
  const idleTime$ = timer(0,1000);
    const mouseMove$ = fromEvent<MouseEvent>(document, 'click');
    
    this.displayTimer$ = idleTime$.pipe(
      takeUntil(mouseMove$),
      repeat()
     );    
    
    idleTime$.pipe(takeUntil(mouseMove$),repeat()).subscribe(time=>{      
      console.log(time);      
      if( time == 0 ){
        console.log('OK');
        //this.reset();
        this.clearTimer();
        this.remainingTime = this.seconds;
        this.start();
      }      
}); */ 

"id": 1 ,          
"fullName": "aaaaa",
"accountNumber": "",     
"birthDay": "",
"homeAddress": "",
"homeCityStateZipCode": "",
"homeTelephoneNumber": "",
"emailAddress": "",
"education": "",
"gender":"",      
"experience": 3, 
"package": 3,       
"investmentObjective": "" ,
"investmentExperience": ""


