import supabase from "./supabase"


export async function CreateTask(tasks) {
    console.log("creating tasks with data: ");

    const tasksData = {
        title:tasks.title,
        description:tasks.description,
        priority:tasks.priority,
        due_date:tasks.dueDate,
        user_id:tasks.user_id
    }
    
    const {data,error} = await supabase
        .from("tasks")
        .insert(tasksData)
        .select()
        .single()

    if(error) throw error

    console.log("tasks created successfully", data)

    return data
}

export async function UpdateTasks(id , updates) {
    console.log(`attemmping to update task with id:${id}`,updates)


    const {error , data} = await supabase
        .updates({
            title: formData.title,
            description: formData.description,
            priority: formData.priority,
            status: formData.status,
            due_date: formData.dueDate,
            updated_at: Date()
        })
        .eq("id",id)
        .select()
        .single()

    if (error) {
    console.error("Error updating tasks:", error);
    console.error("Update error details:", JSON.stringify(error, null, 2));
    throw error;
  }

  console.log("Tasks updated successfully:", data);
  return data;
}

