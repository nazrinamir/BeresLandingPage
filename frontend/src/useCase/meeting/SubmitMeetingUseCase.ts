import { submitMeeting } from "../../helper/api/apiHelper";

export class SubmitMeetingUseCase {
    constructor() {}

    async execute(data: any): Promise<any> {
        const payload = this.buildPayload(data);

        const response = await submitMeeting(payload, import.meta.env.VITE_API_URL);
        return response;
    }

    private buildPayload(data: any) {
        return {
            full_name: data.full_name || null,
            email: data.email || null,
            phone: data.phone || null,
            business: data.business || null,
        }
    }
}