export interface ProcessingTime {
  pdf_parsing: number;
  ai_analysis: number;
  total_time: number;
}

export interface AnalysisResponse {
  success: boolean;
  filename: string;
  processing: ProcessingTime;
  analysis: any;
  ai_analysis: any;
}