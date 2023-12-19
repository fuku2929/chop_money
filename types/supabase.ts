export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      accounting_table: {
        Row: {
          created_at: string
          event_id: string
          event_name: string | null
          group_id: string | null
        }
        Insert: {
          created_at: string
          event_id?: string
          event_name?: string | null
          group_id?: string | null
        }
        Update: {
          created_at?: string
          event_id?: string
          event_name?: string | null
          group_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounting_table_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "group-table"
            referencedColumns: ["group_id"]
          }
        ]
      }
      calculate: {
        Row: {
          amount: number | null
          calculate_id: string
          event_id: string | null
          paid_at: string | null
          person_who_paid: string | null
        }
        Insert: {
          amount?: number | null
          calculate_id?: string
          event_id?: string | null
          paid_at?: string | null
          person_who_paid?: string | null
        }
        Update: {
          amount?: number | null
          calculate_id?: string
          event_id?: string | null
          paid_at?: string | null
          person_who_paid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "calculate_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "accounting_table"
            referencedColumns: ["event_id"]
          },
          {
            foreignKeyName: "calculate_paid_at_fkey"
            columns: ["paid_at"]
            isOneToOne: false
            referencedRelation: "user_table"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "calculate_person_who_paid_fkey"
            columns: ["person_who_paid"]
            isOneToOne: false
            referencedRelation: "user_table"
            referencedColumns: ["user_id"]
          }
        ]
      }
      "group-table": {
        Row: {
          group_id: string
          group_name: string
        }
        Insert: {
          group_id?: string
          group_name: string
        }
        Update: {
          group_id?: string
          group_name?: string
        }
        Relationships: []
      }
      user_table: {
        Row: {
          group_id: string
          user_id: string
          user_name: string
        }
        Insert: {
          group_id: string
          user_id?: string
          user_name: string
        }
        Update: {
          group_id?: string
          user_id?: string
          user_name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
