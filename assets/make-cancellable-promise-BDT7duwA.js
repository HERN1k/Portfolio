function i(r){var e=!1,t=new Promise(function(a,c){r.then(function(n){return!e&&a(n)}).catch(function(n){return!e&&c(n)})});return{promise:t,cancel:function(){e=!0}}}export{i as m};
