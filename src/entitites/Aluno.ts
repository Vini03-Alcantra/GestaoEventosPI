import { uuid } from "uuidv4";

export class Aluno {
    public readonly id: string;

    public NomeAluno: string;
    public emailAluno: string;
    public MatriculaAluno: string;
    public CpfAluno: string;
    public password: string;
    public Curso_idCurso: string;
    
    constructor(props: Omit<Aluno, 'id'>, id?: string){
        Object.assign(this, props)
    
        if(!id){
            this.id = uuid()
        }
    }    
}

