<script type="text/javascript">

  var options = {
      'callback': loginFinished,
      'approvalprompt': 'force',
      'clientid': '177325121472-1rgfp4ninj9t32d6pb1v68vm8cb7avie.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email',
      'requestvisibleactions': 'http://schemas.google.com/CommentActivity http://schemas.google.com/ReviewActivity',
      'data-accesstype' : 'online',
      'cookiepolicy': 'single_host_origin'
    };

  var renderBtn = function()
    {
      gapi.signin.render('renderMe', options);
    }

    var loginFinished = function(authResult)
    {
      if (authResult)
      {
        console.log(authResult);
      }

      gapi.client.load('oauth2', 'v2', function()
      {
        gapi.client.oauth2.userinfo.get()
          .execute(function(resp)
          {
            // Shows user email
            console.log(resp.email);
          });
      });

    };
    
  </script>