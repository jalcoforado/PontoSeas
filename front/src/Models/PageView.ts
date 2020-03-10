import { Surveys } from './Surveys';

export class PageView {
    idpageview: number;
    fk_survey: number;
    acessdate: Date | string;
    device_info: string;
    Survey: Surveys;
}