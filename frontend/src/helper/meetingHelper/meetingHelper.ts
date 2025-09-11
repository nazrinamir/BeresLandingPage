import { SubmitMeetingUseCase } from "../../useCase/meeting/SubmitMeetingUseCase";

export class MeetingHelper {
    constructor() {}

    async submit(data: any): Promise<any> {
        const waitlistSubmitUseCase = new SubmitMeetingUseCase();
        return waitlistSubmitUseCase.execute(data);
    }
}