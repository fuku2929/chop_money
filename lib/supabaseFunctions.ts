import supabase, { Database } from "./supabase";

// テーブル名
export const USER_TABLE = "user_table";

// データの全取得
export const fetchUserTable = async () => {
  try {
    const { data } = await supabase.from(USER_TABLE).select("*");
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
  }
};

// type InsertProps = Pick<Database, "user_name">;

// データの追加

// const insertUserName = async () => {
//   const { error } = await supabase
//     .from(TABLE_NAME)
//     .insert({ user_name: "yamada" });
// };
// export const addSupabaseData = async ({ user_name }: InsertProps) => {
//   try {
//     await supabase.from(TABLE_NAME).insert({ user_name });
//   } catch (error) {
//     console.error(error);
//   }
// };
