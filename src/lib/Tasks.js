import supabase from "./supabase"


export async function CreateTask(tasks) {
    console.log("creating tasks with data: ");

    const tasksData = {
        title:tasks.title,
        description:tasks.description,
        priority:tasks.priority,
        dueDate:tasks.dueDate
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