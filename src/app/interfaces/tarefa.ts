import { Status } from "../enums/Status";

export interface Tarefa {
    id?: string
    titulo: string,
    descricao: string,
    status?: Status
}
