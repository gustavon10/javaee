/**
 * Confirmar a exclusao de um contato
 * 
 * @author Gustavo Nunes
 * @param id
 */

function confirmar(id) {
	let resposta = confirm("Confirmar a exclusão deste contato?")
	if (resposta === true) {
		window.location.href = "delete?id=" + id
	}
}

 