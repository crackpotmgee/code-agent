interface Job {
    Id: string;
    CreatedAt: Date;
    StartedAt: Date;
    FinishedAt: Date;
    Status: {
        State: string;
        Message: string;
    }
    Prompt: string;
    Model: string;
    Parameters: {
        Temperature: number;
        TopP: number;
        MaxTokens: number;
        Stop: string[];
    }
    Input: string;
}