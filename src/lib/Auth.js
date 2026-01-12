import { em } from "motion/react-m";
import supabase from "./supabase";

export async function signUp(email, password, username = "") {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options : {
      data:{
        display_name: username || email.split("@")[0]
      }
    }
  });

  console.log("Auth signup successfully.", data);

  if(error) throw error

  if (data?.user) {
    const { data: sessionData } = await supabase.auth.getSession();

    if (!sessionData?.session) {
      console.log(
        "No active session yet - profile will be created on first sign in"
      );
      return data;
    }

    const displayName = username || email.split("@")[0];

    // create profile

    const { data: profileData, error: profileError } = await supabase
      .from("users")
      .insert({
        id: data.user.id,
        username: displayName,
        avatar_url: null,
      })
      .select()
      .single();

    if (profileError) {
      console.log("Profile creation error:", profileError);
    } else {
      console.log("Profile created successfully:", profileData);
    }
  }

  return data;
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  console.log("checking data Info", data);

  if (error) throw error;
  console.log("Sign-in  successfully", data)

  // checking if user is there, if it is not exits Created
  if (data?.user) {
    try {
      const profile = await getUserProfile(data?.user.id);
    } catch (profileError) {
      throw profileError;
    }
  }
  return data
}

export async function getUserProfile(userId) {
  const { data: session } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();
  // if the profile don't exist
  if (error && error.code === "PGRST116") {
    console.log("Np profile found, attempting to create new profile", userId);
    // get user email if we nedded the username
    const { data: userData } = await supabase.auth.getUser();

    const email = userData?.user?.email || "";
    const defaultUsername = email ? email.split("@")[0] : `user_${Date.now()}`;

    //   Create new Profile for user
    const { data: newProfile, error: insertError } = await supabase
      .from("users")
      .insert({
        id: userId,
        username: defaultUsername,
        avatar_url: null,
      })
      .select()
      .single();

    if (insertError) {
      console.error("Profile creation error:", insertError);
      throw insertError;
    }

    return newProfile;
  }
  // geranal error
  if (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }

  return data;
}

export function onAuthChange(callback) {
  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    callback(session?.user || null, event);
  });

  return () => data.subscription.unsubscribe();
}
export const signOut = async () => {
  await supabase.auth.signOut();
};
