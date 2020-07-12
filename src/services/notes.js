import Api from "./api";

const NoteService = {
    index: () => Api.get("/notes", {
        headers: {'access-token': localStorage.getItem('token')}
    }),
    create: () => Api.post("/notes", { 'title': 'Nova nota', 'body': 'Novo conteúdo' }, {
        headers: {'access-token': localStorage.getItem('token')}
    }),
    delete: (id) => Api.delete(`/notes/${id}`, {
        headers: {'access-token': localStorage.getItem('token')}
    }),
}

export default NoteService;