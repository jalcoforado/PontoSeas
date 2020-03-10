import { Companies } from './Companie';
import { Users } from './Users';
import { TokenLogs } from './TokenLogs';

export class Tokens
{
    id_token: number;
    code: string;
    hits: number;
    active: boolean;
    createdat: Date | string;
    updatedat: Date | string | null;
    fk_user_create: number;
    fk_user_update: number | null;
    fk_company: number;
    companies: Companies;
    users: Users;
    tokensLogs: TokenLogs;
}