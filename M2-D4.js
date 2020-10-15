const assign = () => {
	let teams = document.querySelector("#teams").value
	let names = document.querySelector("#listImport").value.split("\n")
	//console.log(teams, " teams")
	//console.log(" Students")
	//console.log(names)
	let student = Math.round(Math.random() * (names.length - 1))
	//console.log(names[student], " estratto")
	names.splice(student, 1)
	//console.log(names.join("\n"))
	document.querySelector("#listImport").value = names.join("\n")

	let roster = document.querySelector("#roster")
	if (roster.children.length === 0) {
		document.querySelector("#teams").readonly = true
		for (let i = 0; i < teams; i++) {
			let team = document.createElement("div")
			team.classList.add("col", "col-sm-2", "testerClass")
			roster.appendChild(team)

			let list = document.createElement("ul")
			list.id = "t" + i
			team.appendChild(list)
		}
	}

	document.querySelector("#t" + Math.round(Math.random() * teams))
}
