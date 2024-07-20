export interface Database {
  public: {
    Tables: {
      movies: {
        Row: {
          movie: number | null
          created_at: string | null
          id: number
          name: string | null
          user: string
        }
        Insert: {
            movie: number | null
            created_at?: string | null
            id?: number
            name?: string | null
            user: string
        }
        Update: {
            movie?: number | null
            created_at?: string | null
            id?: number
            name?: string | null
            user: string
        }
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
