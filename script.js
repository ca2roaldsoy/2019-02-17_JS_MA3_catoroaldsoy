//Console.log out elements in JSON file
var theAuthor = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
};
         
for(var i=0; i < theAuthor.video.length; i++) {
    
  var myAuthor = theAuthor.video[i]
}
 
    console.log(myAuthor)

            