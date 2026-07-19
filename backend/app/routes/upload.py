from pathlib import Path
from app.services.paper_analysis_service import PaperAnalysisService
from fastapi import APIRouter, File, UploadFile
from app.services.pdf_parser import PDFParser
from agents.summary_agent import SummaryAgent
import time
from app.utils.logger import logger

router = APIRouter(prefix="/upload", tags=["Upload"])

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)
total_start = time.perf_counter()

@router.post("/")
async def upload_pdf(file: UploadFile = File(...)):
    logger.info("Upload started")
    if file.content_type != "application/pdf":
        return {
            "success": False,
            "message": "Only PDF files are allowed."
        }
    MAX_SIZE = 50 * 1024 * 1024

    contents = await file.read()

    if len(contents) > MAX_SIZE:
        return {
            "success": False,
            "message": "PDF exceeds 50 MB limit."
        }

    destination = UPLOAD_DIR / file.filename

    with open(destination, "wb") as buffer:
        buffer.write(contents)
    logger.info(f"Saved file: {file.filename}")
    pdf_start = time.perf_counter()
    analysis = PDFParser.extract(destination)
    pdf_time = time.perf_counter() - pdf_start
    logger.info("PDF parsed successfully")
    context = analysis["content"]
    logger.info("Context extraction completed")
    ai_start = time.perf_counter()
    logger.info("Starting AI analysis")
    paper_results = PaperAnalysisService.analyze(context)
    logger.info("AI analysis completed")
    ai_time = time.perf_counter() - ai_start
    total_time = time.perf_counter() - total_start
    logger.info(f"Total time: {total_time:.2f} sec")
    return {
    "success": True,
    "filename": file.filename,
    "processing": {

        "pdf_parsing": round(pdf_time, 2),

        "ai_analysis": round(ai_time, 2),

        "total_time": round(total_time, 2)

    },
    "analysis": analysis,
    "ai_analysis": paper_results,
}
