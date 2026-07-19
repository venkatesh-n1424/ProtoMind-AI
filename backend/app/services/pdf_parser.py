import fitz
import re
from app.services.context_builder import ContextBuilder

class PDFParser:

    @staticmethod
    def extract(pdf_path: str):

        document = fitz.open(pdf_path)

        text = ""

        for page in document:
            text += page.get_text()

        metadata = document.metadata

        words = len(text.split())

        abstract = ""

        match = re.search(
            r"Abstract(.*?)(Introduction|Keywords|1\.)",
            text,
            re.DOTALL | re.IGNORECASE,
        )
        sections = ContextBuilder.extract_sections(text)

        if match:
            abstract = match.group(1).strip()

        return {
            "paper": {
                "title": metadata.get("title") or "Unknown",
                "author": metadata.get("author") or "Unknown",
                "pages": document.page_count,
            },
            "statistics": {
                "characters": len(text),
                "words": words,
            },
            "content": {
                "abstract": sections["abstract"],

        "introduction": sections["introduction"],

        "methodology": sections["methodology"],

        "results": sections["results"],

        "discussion": sections["discussion"],

        "conclusion": sections["conclusion"],

        "references": sections["references"],

        "preview": text[:1500],

        "full_text": text
            },
        }