import asyncio

from db.neonDBconnection import getCourses
from db.embedding import do_batch_embedding
from db.pineconeDBinsertion import do_pinecone_upsert

EMBED_BATCH_SIZE = 200
UPSERT_BATCH_SIZE = 400

courses = asyncio.run(getCourses())

embed_batch = []
vector_buffer = []

for course in courses:
    embed_batch.append({
        "id": f"course:{course['id']}",
        "text": (
            f"Course Name: {course['course_name']}\n"
            f"Provider: {course['course_provider']}"
        ),
        "metadata": {
            "id": course["id"],
            "course_name": course["course_name"],
            "course_provider": course["course_provider"]
        }
    })

    if len(embed_batch) == EMBED_BATCH_SIZE:
        embeddings = do_batch_embedding(embed_batch)
        vector_buffer.extend(embeddings)
        embed_batch = []

    if len(vector_buffer) >= UPSERT_BATCH_SIZE:
        do_pinecone_upsert(vector_buffer[:UPSERT_BATCH_SIZE])
        vector_buffer = vector_buffer[UPSERT_BATCH_SIZE:]

# flush remaining embeddings
if embed_batch:
    embeddings = do_batch_embedding(embed_batch)
    vector_buffer.extend(embeddings)

# flush remaining vectors
if vector_buffer:
    do_pinecone_upsert(vector_buffer)
