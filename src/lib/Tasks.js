import supabase from "./supabase"


export async function CreateTask(tasks) {
    console.log("creating tasks with data: ");

    const tasksData = {
        title:tasks.title,
        description:tasks.description,
        priority:tasks.priority,
        status:tasks.status,
        due_date:tasks.due_date,
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
        .from('tasks')
        .update({
            title: updates.title,
            description: updates.description,
            priority: updates.priority,
            status: updates.status,
            due_date: updates.due_date,
            updated_at: new Date().toISOString()
        })
        .eq("id",id)
        .select()
        

    if (error) {
    console.error("Error updating tasks:", error);
    console.error("Update error details:", JSON.stringify(error, null, 2));
    throw error;
  }

  console.log("Tasks updated successfully:", data);
  return data;
}

