import { Request, Response } from "express"
import Job from "../models/model";

// Create Job
export const CreateJob = async function (req: Request, res: Response): Promise<void> {
   try {
      const { title, company, location, salary, description } = req.body;

      // Validate input
      if (!title || !company || !location || !salary || !description) {
         res.status(400).send({ status: false, message: 'All fields are required.' });
         return;
      }

      // Define the job object for creation
      const jobData = {
         title: title as string,
         company: company as string,
         location: location as string,
         salary: salary as number,
         description: description as string,
      };

      // Create the job
      const job = await Job.create(jobData);

      res.status(201).send({ status: true, message: 'Job created successfully.', data: job });
   } catch (err: any) {
      res.status(500).send({ status: false, error: err.message, message: "Internal Server Error" });
   }
};

// Update Job
export const UpdateJob = async function (req: Request, res: Response): Promise<void> {
   try {
      const jobId = req.params.id;
      const { title, company, location, salary, description } = req.body;

      // Validate input
      if (!title || !company || !location || !salary || !description) {
         res.status(400).send({ status: false, message: 'All fields are required.' });
         return;
      }

      // Find the job by ID and update
      const job = await Job.findByPk(jobId);
      if (!job || job!.dataValues.is_deleted) {
         res.status(404).send({ status: false, message: 'Job not found.' });
         return;
      }

      job.title = title;
      job.company = company;
      job.location = location;
      job.salary = salary;
      job.description = description;

      await job.update(job);

      res.status(200).send({ status: true, message: 'Job updated successfully.', data: job });
   } catch (err: any) {
      res.status(500).send({ status: false, error: err.message, message: "Internal Server Error" });
   }
}

// Get All Jobs
export const GetAllJobs = async function (req: Request, res: Response): Promise<void> {
   try {
      const jobs = await Job.findAll({ where: { is_deleted: false } });

      if (jobs.length === 0) {
         res.status(404).send({ status: false, message: 'No jobs found.' });
         return;
      }

      res.status(200).send({ status: true, message: 'Jobs fetched successfully.', data: jobs });
   } catch (err: any) {
      res.status(500).send({ status: false, error: err.message, message: "Internal Server Error" });
   }
}

// Get Job By ID
export const GetJobById = async function (req: Request, res: Response): Promise<void> {
   try {
      const jobId = req.params.id;
      const job = await Job.findByPk(jobId);

      if (!job || job!.dataValues.is_deleted) {
         res.status(404).send({ status: false, message: 'Job not found.' });
         return;
      }

      res.status(200).send({ status: true, message: 'Job fetched successfully.', data: job });
   } catch (err: any) {
      res.status(500).send({ status: false, error: err.message, message: "Internal Server Error" });
   }
}

// Delete Job
export const DeleteJob = async function (req: Request, res: Response): Promise<void> {
   try {
      const jobId = req.params.id;
      const job = await Job.findByPk(jobId);

      if (!job) {
         res.status(404).send({ status: false, message: 'Job not found.' });
         return;
      }

      // Soft delete or hard delete depending on your requirement
      job.is_deleted = true;  // Example of a soft delete
      await job.update({ is_deleted: true });

      res.status(200).send({ status: true, message: 'Job deleted successfully.' });
   } catch (err: any) {
      res.status(500).send({ status: false, error: err.message, message: "Internal Server Error" });
   }
}
