export interface ActionI {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  userid: number;
  jobid: number;
  name: string;
  description: string;
  complete_by: string;
  completed: boolean;
}
