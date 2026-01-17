import { Description, Field, Input, Label, Select, Textarea } from "@headlessui/react";
import { ChevronDownIcon, Calendar, PencilLine, ListTodo } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { CreateTask } from "../../lib/Tasks";
import { Navigate, useNavigate } from "react-router";
import toast from "react-hot-toast";

const CreateTasks = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const isEditMode = true;
  

  const navigate = useNavigate();

  const onsubmit = async (formData) => {
    // data contains all your form fields automatically
    console.log("Form Data:", formData);
    // Here you would call supabase.from('tasks').insert([data])

    try {
       const tasksPayload = {
        title:formData.title,
        description:formData.description,
        priority:formData.priority,
        dueDate:formData.dueDate
    }
      await CreateTask(tasksPayload);
      toast.success("Added successfully");

      navigate('/dashboard/taskList');
    } catch (error) {
      console.log("added Failed,tyr Again!",error)
      toast.error("added Failed,tyr Again!")
    }


  };

  const inputClasses = clsx(
    "mt-2 block w-full rounded-xl border-gray-200 dark:border-none bg-white dark:bg-white/5 px-4 py-2.5 text-sm outline-none transition-all",
    "border dark:text-white text-slate-900 shadow-sm dark:shadow-none",
    "focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 data-[focus]:outline-blue-500"
  );

  const labelClasses = "text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2";
  const descClasses = "text-xs text-slate-500 dark:text-slate-400";

  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white transition-colors duration-300 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            {isEditMode ? "Create New Task" : "Edit Task"}
          </h1>
          <p className="text-slate-500 text-sm">Fill in the details below to organize your workflow.</p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/40 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-sm">
          <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
            
            {/* Task Title */}
            <Field>
              <Label className={labelClasses}><PencilLine size={16}/> Task Title</Label>
              <Description className={descClasses}>Give your task a clear, actionable name.</Description>
              <Input
                placeholder="e.g. Design Landing Page"
                className={inputClasses}
                {...register("title", { required: "Title is Required" })}
              />
              {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title.message}</p>}
            </Field>

            {/* Description */}
            <Field>
              <Label className={labelClasses}>Description</Label>
              <Description className={descClasses}>Add context or specific requirements.</Description>
              <Textarea
                placeholder="What needs to be done?"
                className={clsx(inputClasses, "resize-none h-32")}
                {...register("description")}
              />
            </Field>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Priority Select */}
              <Field>
                <Label className={labelClasses}><ListTodo size={16}/> Priority</Label>
                <Description className={descClasses}>Set the urgency level.</Description>
                <div className="relative">
                  <Select className={clsx(inputClasses, "appearance-none cursor-pointer")} {...register("priority")}>
                    <option className="text-black" value="low">Low Priority</option>
                    <option className="text-black" value="medium">Medium Priority</option>
                    <option className="text-black" value="high">High Priority</option>
                  </Select>
                  <ChevronDownIcon className="absolute top-1/2 right-3 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                </div>
              </Field>

              {/* Due Date */}
              <Field>
                <Label className={labelClasses}><Calendar size={16}/> Due Date</Label>
                <Description className={descClasses}>When should this be finished?</Description>
                <Input
                  type="date"
                  className={inputClasses}
                  {...register("dueDate", { required: "Due date is required" })}
                />
              </Field>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] cursor-pointer"
                type="submit"
              >
                {isEditMode ? "Confirm & Create Task" : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTasks;