var value , nam ;
var object = [
	{
		name: "prajwal",
		class: "engineering",
		place: "bengaluru",
	},
	{
		name: "gunda",
		class: "snq",
		place: "ullal",
		CGPA: 9,
	},
	{
		name: "vedu",
		class: "IS",
		place: "GAT",
		CGPA: 10,
	},
];

function get(nam, value) {{
	
	for (var i = 0; i < object.length; i++) {
		if (object[i].name === nam) {
			return object[i][value] || "no such value found";
		}
		
		}
		return "no matching data found"

	}
}
console.log(get("prajwal", "place"));
