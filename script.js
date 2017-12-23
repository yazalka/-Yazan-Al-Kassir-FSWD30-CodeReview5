var Persons = [

	            {
					name: 'Maximilian',
					surname: 'Gruber',
					favoriteActor: ["Megan Fox"],
					age: 25,
		   			myPhoto: "CR5/boy1.800x1000.jpg",	
					likes: 0    
				},

				{
					name: 'Thomas',
					surname: 'Pedrson',
					favoriteActor: ["Keanu Reeves"],
					age: 24,
		   			myPhoto: "CR5/boy2.800x1000.jpg",	
					likes: 0    
				},

				{
					name: 'Emma',
					surname: 'Rosemaier',
					favoriteActor: ["Ryan Reynolds"],
					age: 22,
		   			myPhoto: "CR5/girl1.800x1000.jpg",	
					likes: 0    
				},

				{
					name: 'Hannah',
					surname: 'Wagner',
					favoriteActor: ["Amanda Seyfried"],
					age: 35,
		   			myPhoto: "CR5/girl2.800x1000.jpg",	
					likes: 0     
				},
				
	];

$(document).ready(function(){
	
	for (var i = 0; i < Persons.length; i++) {
		
		var img = Persons[i].myPhoto;
		var first = "First name: " + Persons[i].name;
		var last = "Surname: " + Persons[i].surname;
		var age = "Age: " + Persons[i].age;

		$('.num'+i+' div:nth-child(1) img').attr("src",img);
		$('.num'+i+' div:nth-child(2) p:first-child').html(first);
		$('.num'+i+' div:nth-child(2) p:nth-child(2)').html(last);
		$('.num'+i+' div p:nth-child(3)').html(age);

	}

	var person1likes = Persons[0].likes;
	var person2likes = Persons[1].likes;
	var person3likes = Persons[2].likes;
	var person4likes = Persons[3].likes;



	$("#like_0num").on('click' , function() {

		$('#peson1likes').html(person1likes += 1);
			
	})

	$("#like_1num").on('click' , function() {

		$('#peson2likes').html(person2likes += 1)

	})

	$("#like_2num").on('click' , function() {

		$('#peson3likes').html(person3likes += 1)

	})

	$("#like_3num").on('click' , function() {

		$('#peson4likes').html(person4likes += 1)

	})
	
})