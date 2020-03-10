import { Users } from './Users';
import { Surveys } from './Surveys';

export class Companies {
        id_company: number;
        full_name: string;
        site: string;
        url_logo: string;
        createdat: Date | string;
        updatedat: Date | string | null;
        deletedat: Date | string | null;
        fk_user_create: number;
        fk_user_update: number | null;
        fk_user_delete: number | null;
        Users: Users;
        Survey: Surveys[];
        notification_phone: string;
        days_contract: number;
        plan: string;
    }
