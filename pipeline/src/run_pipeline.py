from extract import extract_content
from transform import transform_all

def run_pipeline():
    print("--Initializing pipeline--")

    print("\n---STEP 1: EXTRACTION ---")
    extract_content()

    print("\n--- STEP 2: TRANSFORMATION ---")
    transform_all()

    print("Pipeline Complete. Data is ready for database")


if __name__ == "__main__":
    run_pipeline()