export class Surveys {
    id_survey: number;
    title: string;
    description: string;
    url_photo: string;
    language: string;
    button_answer_url: string;
    active: boolean;
    fk_company: number;
    contacts: number;
    createdat: Date;
    updatedat: Date;
    deletedat?: any;
    fk_user_create: number;
    fk_user_update?: any;
    fk_user_delete?: any;
    color_button: any;
    companies?: any;
    users?: any;
    flag_wizard: boolean;
}