use animations; // selecciona o crea y utiliza la db
db.characters.insertMany([
    { name:"sonic", color:"azul", specie: "erizo", likes: ["speed", "chilli-dogs"] },
	{ name:"kimba", color:"blanco", specie: "leon" },
	{ name:"barney", color:"rosa", specie: "dinosaurio" },
	{ name:"garfield", color:"naranja", specie: "gato", likes: ["sleep", "lasagna"] },
	{ name:"clifford", color:"rojo", specie: "perro" },
]); // agrega datos a la collecion (la crea de ser necesario)

db.characters.find() // devuelve todos los registros