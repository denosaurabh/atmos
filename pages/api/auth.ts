import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@supabase/client';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('/api/auth');
  supabase.auth.api.setAuthCookie(req, res);
}
