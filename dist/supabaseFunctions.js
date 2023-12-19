import supabase from "./supabase";
// テーブル名
export const TABLE_NAME = "user_table";
// データの全取得
export const fetchDatabase = async () => {
    try {
        const { data } = await supabase
            .from(TABLE_NAME)
            .select("*");
        // .order("createdAt");
        return data;
    }
    catch (error) {
        console.error(error);
    }
};
// type InsertProps = Pick<Database, "user_name">;
// データの追加
const { error } = await supabase
    .from(TABLE_NAME)
    .insert({ user_name: 'yamada' });
// export const addSupabaseData = async ({ user_name }: InsertProps) => {
//   try {
//     await supabase.from(TABLE_NAME).insert({ user_name });
//   } catch (error) {
//     console.error(error);
//   }
// };
