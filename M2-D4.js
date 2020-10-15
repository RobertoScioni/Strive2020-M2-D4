let assigned = []

const assign = () => {
	let teams = document.querySelector("#teams").value
	let names = document.querySelector("#listImport").value.split("\n")
	//console.log(teams, " teams")
	//console.log(" Students")
	//console.log(names)
	let student = Math.round(Math.random() * (names.length - 1))
	//console.log(names[student], " estratto")
	let studentName = names.splice(student, 1)
	//console.log(names.join("\n"))
	document.querySelector("#listImport").value = names.join("\n")

	let roster = document.querySelector("#roster")
	if (roster.children.length === 0) {
		document.querySelector("#teams").readOnly = true
		for (let i = 0; i < teams; i++) {
			let team = document.createElement("div")
			team.classList.add("col", "col-sm-2", "testerClass")
			roster.appendChild(team)

			let list = document.createElement("ul")
			list.id = "t" + i
			list.classList.add("list-group")
			team.appendChild(list)
		}
	}
	student = document.createElement("li")
	student.innerText = studentName
	assigned.push(studentName)
	student.classList.add("list-group-item", "active", "list-group-item-action")
	student.addEventListener("click", resetStudent)

	document
		.querySelector("#t" + Math.round(Math.random() * (teams - 1)))
		.appendChild(student)
}

const resetStudent = (E) => {
	let student = E.target
	let names = document.querySelector("#listImport").value
	console.log(names)
	names =
		names !== "" || names !== null
			? names.concat("\n" + student.innerText)
			: student.innerText
	//names = names.concat("\n" + student.innerText)
	document.querySelector("#listImport").value = names
	student.remove()
}

const reset = () => {
	document.querySelector("#teams").readOnly = false
	document.querySelector("#teams").value = "1"
	let names = document
		.querySelector("#listImport")
		.value.concat(assigned.join("\n"))

	document.querySelector("#listImport").value = names
	document.querySelector("#roster").innerHTML = ""

	assigned = []
}
