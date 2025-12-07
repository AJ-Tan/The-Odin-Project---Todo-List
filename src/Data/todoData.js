import { sampleData } from "./sampleData";

const localData = localStorage.getItem("todoData");
export const todoData = localData ? localData : sampleData; 