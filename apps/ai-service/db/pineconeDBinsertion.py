import os
from pinecone import Pinecone
from dotenv import load_dotenv

load_dotenv()

pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
index = pc.Index("courses-index")


def do_pinecone_upsert(vectors):
    if not vectors:
        return

    assert len(vectors[0]["values"]) == 384, "Vector dimension mismatch"

    index.upsert(vectors=vectors)
