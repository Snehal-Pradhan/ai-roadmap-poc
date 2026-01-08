import os
from dotenv import load_dotenv
import psycopg2
from pinecone import Pinecone


load_dotenv()

NEON_HOST = os.environ["NEON_HOST"]
NEON_DB = os.environ["NEON_DB"]
NEON_USER = os.environ["NEON_USER"]
NEON_PASSWORD = os.environ["NEON_PASSWORD"]
PINECONE_API_KEY = os.environ["PINECONE_API_KEY"]


conn = psycopg2.connect(
    host=NEON_HOST,
    database=NEON_DB,
    user=NEON_USER,
    password=NEON_PASSWORD,
    sslmode="require"
)

cursor = conn.cursor()
print("NeonDB connected successfully")
