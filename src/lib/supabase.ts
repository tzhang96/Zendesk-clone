import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  db: {
    schema: 'public',
  },
});

// Storage bucket for file attachments
export const STORAGE_BUCKET = 'attachments';

// Initialize storage bucket
export const initStorage = async () => {
  const { data: buckets, error } = await supabase.storage.listBuckets();
  
  if (error) {
    throw error;
  }

  // Create bucket if it doesn't exist
  if (!buckets.find(b => b.name === STORAGE_BUCKET)) {
    const { error: createError } = await supabase.storage.createBucket(STORAGE_BUCKET, {
      public: false,
      allowedMimeTypes: [
        'image/*',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
        'application/zip',
      ],
      fileSizeLimit: 50 * 1024 * 1024, // 50MB
    });

    if (createError) {
      throw createError;
    }
  }
}; 