
export class JobDto {
    public id: Number;
    public title: string;
    public description: string;
    public salary: Number;
    public vacancies: Number;
    public availableUntil: Date;
    public company: string;
    public industry: string;
}

export class CompanyDto {

    public id: Number;
    public name: string;
    public industry: string;

}

export class NewCompanyDto {

    public name: string;
    public idIndustry: Number;

}

export class IndustryDto {
    public id: Number;
    public name: string;
}

export class NewJobDto {
    public title: string;

    public description: string;

    public salary: Number;

    public vacancies: Number;

    public availableFrom: Date;

    public availableUntil: Date;

    public companyId: Number;
}