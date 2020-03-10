export class Users {
    id_user: number;
    full_name: string;
    email: string;
    password?: any;
    last_acess?: any;
    createdat: Date;
    updatedat?: any;
    type_user?: any;
    fk_company_default: number;
    fk_department: number;
    companies: any[];
    surveys?: any;
    companyUsers?: any;
}