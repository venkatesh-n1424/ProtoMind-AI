from schemas.summary_schema import SummarySchema


def validate_summary(summary):

    SummarySchema(**summary)

    print("Summary Schema Passed")