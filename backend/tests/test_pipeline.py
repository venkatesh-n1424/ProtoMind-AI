import os

from app.services.pdf_parser import PDFParser
from app.services.paper_analysis_service import PaperAnalysisService


TEST_FOLDER = "test_papers"


def run_pipeline():

    pdfs = [

        file

        for file in os.listdir(TEST_FOLDER)

        if file.endswith(".pdf")

    ]

    for pdf in pdfs:

        print("\n==============================")

        print(f"Testing {pdf}")

        print("==============================")

        path = os.path.join(TEST_FOLDER, pdf)

        analysis = PDFParser.extract(path)

        context = analysis["content"]

        result = PaperAnalysisService.analyze(context)

        print("Summary        :", result["summary"]["status"])

        print("Methodology    :", result["methodology"]["status"])

        print("Research Gap   :", result["research_gap"]["status"])

        print("Dataset        :", result["datasets"]["status"])

        print("Architecture   :", result["architecture"]["status"])

        print("Roadmap        :", result["roadmap"]["status"])

        print("Starter Code   :", result["starter_code"]["status"])


if __name__ == "__main__":

    run_pipeline()