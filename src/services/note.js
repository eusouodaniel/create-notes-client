import Api from "./api";

const NoteService = {
    index: () => Api.get("/notes", {
        headers: {'access-token': localStorage.getItem('token')}
    }),
}

export default NoteService;