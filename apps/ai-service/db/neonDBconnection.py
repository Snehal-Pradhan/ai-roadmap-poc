import os
import asyncpg
from dotenv import load_dotenv

load_dotenv()


async def getCourses():
    conn_string = os.getenv("DATABASE_URL")
    conn = None

    try:
        conn = await asyncpg.connect(conn_string)
        print("NeonDB connection established")

        rows = await conn.fetch(
            "SELECT id, course_name, course_provider FROM courses ORDER BY id;"
        )
        return rows

    finally:
        if conn:
            await conn.close()
