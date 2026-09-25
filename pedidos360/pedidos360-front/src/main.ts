import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth:{
    Cognito:{
      userPoolId: 'us-east-1_4yZjvdOpe',
      userPoolClientId:'5663k8ngb48evt5pth8j4ml5te',
      loginWith:{
        oauth:{
          domain: 'us-east-14yzjvdope.auth.us-east-1.amazoncognito.com',
          scopes:[
            'email',
            'openid',
            'profile',
            'pedidos360-api/pedidos-api-read'
          ],
          redirectSignIn:[
            'http://localhost:4200'
          ],
          redirectSignOut:[
            'http://localhost:4200'
          ],
          responseType:'code'
        }
      }
    }
  }
});

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
