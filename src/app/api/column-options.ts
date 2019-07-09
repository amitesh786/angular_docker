export interface ColumnOptions {
    header: string;
    key: string;
    type?: "string" | "date" | "number";
    domainKey?: string;
}