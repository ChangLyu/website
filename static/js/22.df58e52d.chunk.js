(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[22],{539:function(e,t,i){"use strict";i.r(t),i.d(t,"amplify_federated_sign_in",(function(){return r}));var a=i(23),n=i(55),d=i(65),s=i(129),o=i(40),f=new n.a("amplify-federated-sign-in"),r=function(){function e(e){Object(a.k)(this,e),this.authState=d.a.SignIn,this.federated={}}return e.prototype.componentWillLoad=function(){if(!s.a||"function"!==typeof s.a.configure)throw new Error(o.d);var e=s.a.configure().oauth,t=void 0===e?{}:e;t.domain?this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t):t.awsCognito&&(this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t.awsCognito)),t.auth0&&(this.federated.auth0=Object.assign(Object.assign({},this.federated.auth0),t.auth0))},e.prototype.render=function(){return this.federated?Object.values(d.a).includes(this.authState)?(f.debug("federated Config is",this.federated),Object(a.i)("amplify-form-section",{"data-test":"federated-sign-in-section"},Object(a.i)("amplify-section",{"data-test":"federated-sign-in-body-section"},Object(a.i)("amplify-federated-buttons",{authState:this.authState,"data-test":"federated-sign-in-buttons",federated:this.federated})))):null:(f.debug("federated prop is empty. show nothing"),f.debug("federated={google_client_id: , facebook_app_id: , amazon_client_id}"),null)},e}()}}]);
//# sourceMappingURL=22.df58e52d.chunk.js.map