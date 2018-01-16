import { communicationService } from './communicationService';
import ReportDTO from '../dto/reportDTO';

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

    deletePost(id, successHandler) {
        communicationService.deleteRequest(`/reports/${id}`, (response) => {
            successHandler(response);
        }, (error) => {
            console.log(error);
        });
    }

}

export const dataService = new DataService();