import Student from "./Student";

export  default class MingStudent extends Student{
    constructor(){
        super("小明",20,"难")
    }
    getDescription(){
        return "姓名"+this.name+this.sex+this.age
    }
}