export interface GrepsrResponse<T> {
    status: number;
    statusText: string;
    data: T;
  }
  

export const grepsrAPI={
    dataset:"users"
}