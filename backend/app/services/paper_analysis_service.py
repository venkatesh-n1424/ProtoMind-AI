from concurrent.futures import ThreadPoolExecutor

from agents.summary_agent import SummaryAgent
from agents.methodology_agent import MethodologyAgent
from agents.research_gap_agent import ResearchGapAgent
from agents.dataset_agent import DatasetAgent
from app.utils.logger import logger
import time

def safe_run(agent_name, agent_method, context):
    start = time.perf_counter()

    try:
        result = agent_method(context)

        duration = time.perf_counter() - start

        logger.info(f"{agent_name} completed in {duration:.2f} sec")

        return {
            "status": "success",
            "time": round(duration, 2),
            "data": result
        }

    except Exception as e:
        logger.exception(f"{agent_name} failed")

        return {
            "status": "error",
            "agent": agent_name,
            "message": str(e)
        }
class PaperAnalysisService:

    @staticmethod
    def analyze(context: dict):

        summary_agent = SummaryAgent()
        methodology_agent = MethodologyAgent()
        research_gap_agent = ResearchGapAgent()
        dataset_agent = DatasetAgent()

        with ThreadPoolExecutor(max_workers=2) as executor:

            summary_future = executor.submit(
                safe_run,
                "summary",
                summary_agent.summarize,
                context,
            )

            methodology_future = executor.submit(
                safe_run,
                "methodology",
                methodology_agent.analyze,
                context,
            )

            research_gap_future = executor.submit(
                safe_run,
                "research_gap",
                research_gap_agent.analyze,
                context,
            )

            dataset_future = executor.submit(
                safe_run,
                "dataset",
                dataset_agent.analyze,
                context,
            )

        return {

            "summary": summary_future.result(),

            "methodology": methodology_future.result(),

            "research_gap": research_gap_future.result(),

            "datasets": dataset_future.result(),

        }