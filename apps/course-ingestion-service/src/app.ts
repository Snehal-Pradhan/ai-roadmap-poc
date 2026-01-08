import { fetchNPTEL } from "./courses/NPTEL/fetchNPTEL.js";
import { dbConnect } from "./db/connection/db.js";

dbConnect();

fetchNPTEL();
