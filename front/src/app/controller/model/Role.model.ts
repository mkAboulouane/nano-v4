// import { Permission } from "./Permission.model";

import {Permission} from "./permission.model";

export class Role {
     authority: string;
     id: string;
     permissions: Permission[];

    constructor() {
        this.authority = "ROLE_ANONYMOUS";
    }

}
