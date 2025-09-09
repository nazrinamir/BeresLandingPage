import { submitWaitlist } from "../../helper/api/apiHelper";

export class WaitlistSubmitUseCase {
    async execute(data: any): Promise<any> {
        const payload = this.buildPayload(data);

        const response = await submitWaitlist(payload, import.meta.env.VITE_API_URL);
        return response;
    }

    private buildPayload(data: any) {
        return {
            first_name: data.first_name || null,
            last_name: data.last_name || null,
            email: data.email || null,
            phone: data.phone || null,
            business: data.business || null,
        }
    }
}