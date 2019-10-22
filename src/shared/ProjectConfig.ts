export class ProjectConfig {

    constructor(
        public id?: number,
        public title?: string, 
        public date?: string,
        public description?: string,
        public linkText?: string[],
        public link?: string[]
    ) { }
}
