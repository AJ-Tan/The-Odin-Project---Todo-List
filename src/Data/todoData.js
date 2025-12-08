import { sampleData } from "./sampleData";

const localData = localStorage.getItem("todoData");
export const todoDataAPI = localData ? localData : sampleData; 