type IResponse = {
    success: boolean;
    message: string;
    data: any;
}

export const submitWaitlist = async (data: any, baseUrl: string) => {
    try {
    const response = await fetch(`${baseUrl}/waitlist`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    
    const result: IResponse = await response.json();

    return {
        success: result.success,
        message: result.message,
        data: result.data,
    };
    
    } catch (error) {
        return {
            success: false,
            message: 'Error submitting waitlist: ' + error,
            data: null,
        };
    }
}