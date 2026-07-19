import re


class ContextBuilder:

    @staticmethod
    def extract_sections(text: str):

        sections = {
            "abstract": "",
            "introduction": "",
            "methodology": "",
            "results": "",
            "discussion": "",
            "conclusion": "",
            "references": "",
            "full_text": text
        }

        patterns = {
            "abstract": r"abstract(.*?)(keywords|introduction|1\.)",
            "introduction": r"(introduction|1\.)\s*(.*?)(related work|background|methodology|methods|2\.)",
            "methodology": r"(methodology|methods|proposed method|materials and methods)(.*?)(results|experiments|evaluation|3\.)",
            "results": r"(results|experiments|evaluation)(.*?)(discussion|conclusion|4\.)",
            "discussion": r"(discussion)(.*?)(conclusion|references)",
            "conclusion": r"(conclusion|conclusions)(.*?)(references|acknowledgement|$)",
            "references": r"(references)(.*)"
        }

        lower_text = text.lower()

        for section, pattern in patterns.items():

            match = re.search(
                pattern,
                lower_text,
                re.DOTALL
            )

            if match:

                sections[section] = match.group(0)

        return sections