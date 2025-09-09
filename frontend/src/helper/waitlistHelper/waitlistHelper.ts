import { WaitlistSubmitUseCase } from "../../useCase/waitlist/WaitlistSubmitUseCase";

export class WaitlistHelper {

    constructor() {
    }

    async submit(data: any): Promise<any> {
        const waitlistSubmitUseCase = new WaitlistSubmitUseCase();
        return waitlistSubmitUseCase.execute(data);
    }
}