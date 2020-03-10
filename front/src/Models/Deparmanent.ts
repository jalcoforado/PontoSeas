import { Users } from './Users';
import { Companies } from './Companie';
export class Departament {
    id_department: number;
    name: string;
    actived: boolean;
    fk_company: number;
    createdat: Date | string;
    updatedat: Date | string | null;
    deletedat: Date | string | null;
    fk_user_create: number;
    fk_user_update: number | null;
    fk_user_delete: number | null;
    Companies: Companies;
    Users: Users[];
}