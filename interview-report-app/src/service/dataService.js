import { communicationService } from './communicationService';

import ReportDTO from '../dto/reportDTO';
import CandidateDTO from '../dto/candidateDTO';
import CompanyDTO from '../dto/companyDTO';

class DataService {

    getReports(dataHandler) {
        let reports = [];
        communicationService.getRequest("reports",
            (data) => {

                const reportData = data.data;

                reportData.forEach(item => {

                    const id = item.id;
                    const candidateId = item.candidateId;
                    const candidateName = item.candidateName;
                    const companyId = item.companyId;
                    const companyName = item.companyName;
                    const interviewDate = item.interviewDate;
                    const phase = item.phase;
                    const status = item.status;
                    const note = item.note;

                    const report = new ReportDTO(id, candidateId, candidateName, companyId,
                        companyName, interviewDate, phase, status, note);

                    reports.push(report);

                });

                dataHandler(reports);

            }, (serverErrorObject) => {
                console.log(serverErrorObject);
            });
    }


    getCandidates(dataHandler) {
        let candidates = [];
        communicationService.getRequest("candidates",
            (data) => {

                const candidateData = data.data;

                candidateData.forEach(item => {

                    const id = item.id;
                    const name = item.name;
                    const birthday = item.birthday;
                    const email = item.email;
                    const education = item.education;
                    const avatar = item.avatar;

                    const candidate = new CandidateDTO(id, name, birthday, email,
                        education, avatar);

                    candidates.push(candidate);

                });

                dataHandler(candidates);

            }, (serverErrorObject) => {
                console.log(serverErrorObject);
            });
    }

    getCompanies(dataHandler) {
        let companies = [];
        communicationService.getRequest("companies",
            (data) => {

                const companyData = data.data;

                companyData.forEach(item => {

                    const id = item.id;
                    const name = item.name;
                    const email = item.email;

                    const company = new CompanyDTO(id, name, email);

                    companies.push(company);

                });

                dataHandler(companies);

            }, (serverErrorObject) => {
                console.log(serverErrorObject);
            });
    }

    deleteRequest(id, successHandler) {
        communicationService.deleteRequest(`/reports/${id}`, (response) => {
            successHandler(response);
        }, (error) => {
            console.log(error);
        });
    }

}

export const dataService = new DataService();