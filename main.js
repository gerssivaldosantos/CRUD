"use strict"


const openModal = () => document.getElementById("modal")
    .classList.add("active")

const closeModal = () => document.getElementById("modal")
    .classList.remove("active")

const tempClient = {
	name: "Gollum", 
	email: "precious@gmail.com",
	phonenumber: "89-744333531",
	town: "Valle"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem("dbClient")) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("dbClient", JSON.stringify(dbClient))

// CRUD | Create Read Update Delete
//  ____Create____
	const createClient = (client) => {
	const dbClient = getLocalStorage()
	dbClient.push (client) 
	setLocalStorage(dbClient)	
}


// Events 
document.getElementById("registerClient")
    .addEventListener("click", openModal)
 
document.getElementById("modalClose")
    .addEventListener("click", closeModal)


