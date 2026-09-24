import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth:{
    Cognito:{
      userPoolId: 'us-east-1_8dCb8Xuzj',
      userPoolClientId:'4kk9mcffsnpltthov2opq5sgrg',
      loginWith:{
        oauth:{
          domain: 'us-east-18dcb8xuzj.auth.us-east-1.amazoncognito.com',
          scopes:[
            'email',
            'openid',
            'profile',
            'pedidos360api/pedidos-api-read'
          ],
          redirectSignIn:[
            'http//localhoost:4200'
          ],
          redirectSignOut:[
            'http//localhoost:4200'
          ],
          responseType:'code'
        }
      }
    }
  }
});

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
