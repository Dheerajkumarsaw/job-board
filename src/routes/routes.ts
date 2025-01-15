import { Router } from "express";
import { CreateJob, UpdateJob, GetAllJobs, GetJobById, DeleteJob } from "../controllers/controllers";

export const router = Router();

router.post("/jobs", CreateJob)
router.get("/jobs", GetAllJobs)
router.get("/jobs/:id", GetJobById)
router.put("/jobs/:id", UpdateJob)
router.delete("/jobs/:id", DeleteJob)

