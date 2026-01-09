from sentence_transformers import SentenceTransformer

embedding_model = SentenceTransformer("all-MiniLM-L6-v2")


def do_batch_embedding(embed_batch):
    texts = [item["text"] for item in embed_batch]

    embeddings = embedding_model.encode(
        texts,
        batch_size=32,
        show_progress_bar=False,
        normalize_embeddings=True
    )

    vectors = []
    for item, vector in zip(embed_batch, embeddings):
        vectors.append({
            "id": item["id"],
            "values": vector.tolist(),
            "metadata": item["metadata"]
        })

    return vectors
