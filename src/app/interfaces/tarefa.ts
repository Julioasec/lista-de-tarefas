import { Status } from "../enums/enums";

export interface Tarefa {
    id?: string
    titulo: string,
    descricao: string,
    status: Status
}
