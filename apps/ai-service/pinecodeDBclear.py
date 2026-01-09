import os
from dotenv import load_dotenv
from pinecone import Pinecone, ServerlessSpec

load_dotenv()

pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))

INDEX_NAME = "courses-index"

# Delete index if it exists
if INDEX_NAME in pc.list_indexes().names():
    pc.delete_index(INDEX_NAME)

# Create serverless index (REQUIRED spec)
pc.create_index(
    name=INDEX_NAME,
    dimension=384,
    metric="cosine",
    spec=ServerlessSpec(
        cloud="aws",      # or "gcp" depending on your Pinecone setup
        region="us-east-1"  # must match your Pinecone environment
    )
)
index = pc.Index(INDEX_NAME)
stats = index.describe_index_stats()
print(stats)
