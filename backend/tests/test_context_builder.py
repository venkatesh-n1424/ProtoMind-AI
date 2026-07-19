from app.services.pdf_parser import PDFParser


def test_context(pdf_path):

    analysis = PDFParser.extract(pdf_path)

    context = analysis["content"]

    print("\n===== CONTEXT CHECK =====")

    for key, value in context.items():

        if isinstance(value, str):

            print(f"{key:<15}: {len(value)} characters")