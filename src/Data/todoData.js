import { sampleData } from "./sampleData";

const localData = JSON.parse(localStorage.getItem("todoData"));
export const todoDataAPI = localData ? localData : sampleData; 