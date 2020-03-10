import { Tokens } from "./Tokens";

export class TokenLogs {
    id_token_log: number;
    ip: string;
    http_method: string;
    url_method: string;
    status: string;
    header: string;
    body: string;
    result: string;
    createdat: Date | string;
    fk_token: number;
    token: Tokens;
}
