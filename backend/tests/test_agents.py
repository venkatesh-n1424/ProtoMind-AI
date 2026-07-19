from agents.summary_agent import SummaryAgent
from app.services.pdf_parser import PDFParser


def test_summary(pdf_path):

    analysis = PDFParser.extract(pdf_path)

    context = analysis["content"]

    result = SummaryAgent().summarize(context)

    print(result)