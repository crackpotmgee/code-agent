export interface PR {
    Id: string;
    CreatedAt: Date;
    StartedAt: Date;
    FinishedAt: Date;
    Status: {
        State: string;
        Message: string;
    }
    Jobs: Job[];
    Branch: string;
    Repository: string;
    Title: string;
    Description: string;
}