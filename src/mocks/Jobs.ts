import { JobI } from "../types/Job_Object";

export const jobs: JobI[] = [
    {
        CreatedAt: "2022-01-01T01:00:00.000Z",
        DeletedAt: "",
        ID: 1,
        UpdatedAt: "2022-01-01T01:00:00.000Z",
        userid: "user1",
        description: "Job 1 description",
        organisation: "Organisation 1",
        priority: 1,
        status: "Open",
        title: "Job 1"
    },
    {
        CreatedAt: "2022-01-15T01:00:00.000Z",
        DeletedAt: "",
        ID: 2,
        UpdatedAt: "2022-01-15T01:00:00.000Z",
        userid: "user2",
        description: "Job 2 description",
        organisation: "Organisation 2",
        priority: 2,
        status: "In progress",
        title: "Job 2"
    },
    {
        CreatedAt: "2022-02-01T01:00:00.000Z",
        DeletedAt: "",
        ID: 3,
        UpdatedAt: "2022-02-01T01:00:00.000Z",
        userid: "user3",
        description: "Job 3 description",
        organisation: "Organisation 3",
        priority: 3,
        status: "Closed",
        title: "Job 3"
    },
    {
        CreatedAt: "2022-02-15T01:00:00.000Z",
        DeletedAt: "",
        ID: 4,
        UpdatedAt: "2022-02-15T01:00:00.000Z",
        userid: "user4",
        description: "Job 4 description",
        organisation: "Organisation 4",
        priority: 4,
        status: "Open",
        title: "Job 4"
    }
];